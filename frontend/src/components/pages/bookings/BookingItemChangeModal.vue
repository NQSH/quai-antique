<script setup lang="ts">
import FormLayout from '@/components/FormLayout.vue';
import FormSectionLayout from '@/components/FormSectionLayout.vue';
import { Input } from '@/components/inputs/classes/_input';
import { Validators } from '@/components/inputs/classes/_validators';
import InputDate from '@/components/inputs/InputDate.vue';
import InputNumberSelect from '@/components/inputs/InputNumberSelect.vue';
import InputRadio from '@/components/inputs/InputRadio.vue';
import InputSelect from '@/components/inputs/InputSelect.vue';
import InputText from '@/components/inputs/InputText.vue';
import TitleContent from '@/components/TitleContent.vue';
import { usebooking, type Booking } from '@/composables/useBooking';
import { useEstablishment } from '@/composables/useEstablishment';
import { Helpers } from '@/helpers/_helpers';
import { reactive } from 'vue';

const props = defineProps<{
    booking: Booking
}>()

const inputs = reactive([
    new Input('name', 'Votre prénom', props.booking.name, Validators.Name()),
    new Input('surname', 'Votre nom', props.booking.surname?.toUpperCase(), Validators.Name()),
    new Input('date', 'Date de réservation', props.booking.date, Validators.Booking()),
    new Input('service', 'Service souhaité', props.booking.service),
    new Input('time', 'Heure d\'arrivée', props.booking.time, Validators.NotEmpty()),
    new Input('numberOfPerson', 'Nombres de convives', props.booking.numberOfPerson),
    new Input('hasAllergy', 'Avez-vous des allergies ?', props.booking.allergy),
    new Input('allergies', 'Lesquelles ?', props.booking.allergies, Validators.Sentence()),
])

const { put, isLoading, error } = usebooking();
const { establishmentInfo } = useEstablishment();

function onSubmit(booking: Booking): void {
    put(booking)
}

</script>

<template>
    <TitleContent>
        Modification de votre réservation
    </TitleContent>
    <FormLayout :inputs :submit-btn-label="'Enregistrer'" @on-submit="booking => onSubmit(booking as Booking)" :is-loading :error>
        <FormSectionLayout title="Information de réservation" centered-title one-lined>
            <InputText :input="inputs[0]" />
            <InputText :input="inputs[1]" />
            <InputDate :input="inputs[2]" :options="{
                min: Helpers.FormatTool.Date.toFullYearMonthDay(new Date()),
                max: Helpers.FormatTool.Date.toFullYearMonthDay(new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
            }" />
            <InputRadio :input="inputs[3]" :options="[
                { name: 'lunch', label: 'Midi', value: 'lunch' },
                { name: 'diner', label: 'Soir', value: 'diner' }
            ]" />
            <InputSelect
                :input="inputs[4]"
                :options="Helpers.Datetime.getServiceTimes(
                    inputs[2].value,
                    inputs[3].value === 'lunch' ? establishmentInfo.servicesTime.lunch : establishmentInfo.servicesTime.diner,
                    establishmentInfo.serviceDuration
                )"
            />
            <InputNumberSelect :input="inputs[5]" />
            <InputRadio :input="inputs[6]" :options="[
                { name: 'yes', label: 'Oui', value: true },
                { name: 'no', label: 'Non', value: false }
            ]" />
            <InputText v-if="inputs[6].value" :input="inputs[7]"/>
        </FormSectionLayout>
    </FormLayout>
</template>