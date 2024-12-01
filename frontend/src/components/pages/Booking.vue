<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import FormLayout, { type FormInputs } from '../FormLayout.vue';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import FormSectionLayout from '../FormSectionLayout.vue';
import { Input } from '../inputs/classes/_input';
import { Validators } from '../inputs/classes/_validators';
import { Helpers } from '@/helpers/_helpers';
import InputText from '../inputs/InputText.vue';
import InputDate from '../inputs/InputDate.vue';
import InputRadioField from '../inputs/InputRadioField.vue';
import InputSelectField from '../inputs/InputSelectField.vue';
import InputNumberSelect from '../inputs/InputNumberSelect.vue';
import { useUser } from '@/composables/useUser';
import { usebooking, type Booking } from '@/composables/useBooking';
import ProtectedContent from '../ProtectedContent.vue';
import { useEstablishment } from '@/composables/useEstablishment';
import InputRadioOption from '../inputs/InputRadioOption.vue';
import InputSelectOption from '../inputs/InputSelectOption.vue';

const { user } = useUser();
const { post, isLoading, error } = usebooking();
const { establishmentInfo } = useEstablishment();

const initialBookingOptions = Helpers.Booking.getInitialBookingOptions(establishmentInfo);

const inputs = reactive<FormInputs>({
    'name': new Input('name', 'Votre prénom', Helpers.FormatTool.Text.toSentenceCase(user.value?.name), Validators.Name()),
    'surname': new Input('surname', 'Votre nom', user.value?.surname.toUpperCase(), Validators.Name()),
    'date': new Input('date', 'Date de réservation', initialBookingOptions.minDate, Validators.Booking()),
    'service': new Input('service', 'Service souhaité', initialBookingOptions.service.name),
    'time': new Input('time', 'Heure d\'arrivée', initialBookingOptions.service.times[0], Validators.NotEmpty()),
    'numberOfPerson': new Input('numberOfPerson', 'Nombres de convives', user.value?.additional?.numberOfPerson),
    'hasAllergy': new Input('hasAllergy', 'Avez-vous des allergies ?', user.value?.additional?.hasAllergy),
    'allergies': new Input('allergies', 'Lesquelles ?', Helpers.FormatTool.Text.toSentenceCase(user.value?.additional?.allergies), Validators.Sentence()),
})

const servicesTimes = computed(() => {
    const lunch = Helpers.Booking.getServiceTimes(inputs['date'].value, establishmentInfo.servicesTime.lunch, establishmentInfo.serviceDuration);
    const diner = Helpers.Booking.getServiceTimes(inputs['date'].value, establishmentInfo.servicesTime.diner, establishmentInfo.serviceDuration);
    return {
        lunch,
        diner
    }
})

watch(() => inputs['date'].value, () => {
    inputs['service'].value = servicesTimes.value.lunch.length > 0 ? 'lunch' : 'diner';
})

watch(() => inputs['service'].value, () => {
    inputs['time'].value = inputs['service'].value === 'lunch' ? servicesTimes.value.lunch[0] : servicesTimes.value.diner[0];
})


function onSubmit(data: Booking): void {
    post(data);
}

</script>

<template>
    <ProtectedContent>
        <PageContent>
            <TitleContent>
                Réservation
            </TitleContent>
            <FormLayout :inputs :submit-btn-label="'Envoyer'" @on-submit="(data) => onSubmit(data as Booking)" :is-loading :error>
                <FormSectionLayout title="Information de réservation" centered-title one-lined>
                    <InputText :input="inputs['name']" />
                    <InputText :input="inputs['surname']" />
                    <InputDate :input="inputs['date']" :options="{
                        min: initialBookingOptions.minDate,
                        max: Helpers.FormatTool.Date.toFullYearMonthDay(new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
                    }" />
                    <InputRadioField :input="inputs['service']">
                        <InputRadioOption :input="inputs['service']" name="lunch" label="Midi" value="lunch" :options="{ disabled: servicesTimes.lunch.length === 0 }"/>
                        <InputRadioOption :input="inputs['service']" name="diner" label="Soir" value="diner"/>
                    </InputRadioField>
                    <InputSelectField :input="inputs['time']">
                        <InputSelectOption
                            v-for="hour in inputs['service'].value === 'lunch'
                                    ? servicesTimes.lunch
                                    : servicesTimes.diner"
                            :value="hour"
                        />
                    </InputSelectField>
                    <InputNumberSelect :input="inputs['numberOfPerson']" />
                    <InputRadioField :input="inputs['hasAllergy']">
                        <InputRadioOption :input="inputs['hasAllergy']" name="yes" label="Oui" :value="true"/>
                        <InputRadioOption :input="inputs['hasAllergy']" name="no" label="Non" :value="false"/>
                    </InputRadioField>
                    <InputText v-if="inputs['hasAllergy'].value" :input="inputs['allergies']"/>
                </FormSectionLayout>
            </FormLayout>
        </PageContent>
    </ProtectedContent>
</template>