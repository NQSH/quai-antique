<script setup lang="ts">
import FormLayout, { type FormInputs } from '@/components/FormLayout.vue';
import FormSectionLayout from '@/components/FormSectionLayout.vue';
import { Input } from '@/components/inputs/classes/_input';
import { Validators } from '@/components/inputs/classes/_validators';
import InputDate from '@/components/inputs/InputDate.vue';
import InputNumberSelect from '@/components/inputs/InputNumberSelect.vue';
import InputRadioField from '@/components/inputs/InputRadioField.vue';
import InputRadioOption from '@/components/inputs/InputRadioOption.vue';
import InputSelectField from '@/components/inputs/InputSelectField.vue';
import InputSelectOption from '@/components/inputs/InputSelectOption.vue';
import InputText from '@/components/inputs/InputText.vue';
import PageContent from '@/components/PageContent.vue';
import TitleContent from '@/components/TitleContent.vue';
import { useBooking, type Booking } from '@/composables/useBooking';
import { useEstablishment } from '@/composables/useEstablishment';
import { Helpers } from '@/helpers/_helpers';
import { computed, reactive, watch } from 'vue';

const props = defineProps<{
    booking: Booking
}>()

const inputs = reactive<FormInputs>({
    'name': new Input('name', 'Votre prénom', props.booking.name, Validators.Name()),
    'surname': new Input('surname', 'Votre nom', props.booking.surname?.toUpperCase(), Validators.Name()),
    'date': new Input('date', 'Date de réservation', props.booking.date, Validators.Booking()),
    'service': new Input('service', 'Service souhaité', props.booking.service),
    'time': new Input('time', 'Heure d\'arrivée', props.booking.time, Validators.NotEmpty()),
    'numberOfPerson': new Input('numberOfPerson', 'Nombres de convives', props.booking.numberOfPerson),
    'hasAllergy': new Input('hasAllergy', 'Avez-vous des allergies ?', props.booking.hasAllergy),
    'allergies': new Input('allergies', 'Lesquelles ?', props.booking.allergies, Validators.Sentence()),
})

const { put, isLoading, error } = useBooking();
const { establishmentInfo } = useEstablishment();


const servicesTimes = computed(() => {
    const lunch = Helpers.Booking.getServiceTimes(inputs['date'].value, establishmentInfo.value.servicesTime.lunch, establishmentInfo.value.serviceDuration);
    const diner = Helpers.Booking.getServiceTimes(inputs['date'].value, establishmentInfo.value.servicesTime.diner, establishmentInfo.value.serviceDuration);
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

function onSubmit(booking: Booking): void {
    put({ ...booking, id: props.booking.id });
}

</script>

<template>
    <PageContent>
        <TitleContent>
            Modification de votre réservation
        </TitleContent>
        <FormLayout :inputs :submit-btn-label="'Enregistrer'" @on-submit="booking => onSubmit(booking as Booking)" :is-loading :error>
            <FormSectionLayout title="Information de réservation">
                <InputText :input="inputs['name']" />
                <InputText :input="inputs['surname']" />
                <InputDate :input="inputs['date']" :options="{
                    min: Helpers.Booking.getInitialBookingOptions(establishmentInfo).minDate,
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
</template>