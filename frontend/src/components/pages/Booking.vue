<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import FormLayout from '../FormLayout.vue';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import FormSectionLayout from '../FormSectionLayout.vue';
import { Input } from '../inputs/classes/_input';
import { Validators } from '../inputs/classes/_validators';
import { Helpers } from '@/helpers/_helpers';
import InputText from '../inputs/InputText.vue';
import InputDate from '../inputs/InputDate.vue';
import InputRadio from '../inputs/InputRadio.vue';
import InputSelect from '../inputs/InputSelect.vue';
import InputNumberSelect from '../inputs/InputNumberSelect.vue';
import { useAuthentication } from '@/composables/useAuthentication';
import { useRouter } from '@/composables/useRouter';
import { useToast } from '@/composables/useToast';

const inputs = reactive([
    new Input('name', 'Votre prénom', '', Validators.Name()),
    new Input('surname', 'Votre nom', '', Validators.Name()),
    new Input('date', 'Date de réservation', Helpers.FormatTool.Date.toFullYearMonthDay(new Date()), Validators.Booking()),
    new Input('service', 'Service souhaité', 'lunch'),
    new Input('time', 'Heure d\'arrivée', ''),
    new Input('numberOfPerson', 'Nombres de convives', 1),
    new Input('hasAllergy', 'Avez-vous des allergies ?', true),
    new Input('allergies', 'Lesquelles ?', '', Validators.Sentence()),
])

const { authentication } = useAuthentication();
const { redirectTo } = useRouter();
const { popMessage } = useToast();

const establishmentInfo = {
    servicesTime: {
        lunch: '12:00',
        diner: '19:00'
    },
    serviceDuration: 2,
    capacity: 40,
}

function onSubmit(data: object): void {
    console.log(data);
}

onBeforeMount(() => {
    if(!authentication.value) {
        redirectTo('login');
        popMessage('Vous devez être connecté pour pouvoir réserver.')
    }
})

</script>

<template>
    <PageContent>
        <TitleContent>
            Réservation
        </TitleContent>
        <FormLayout :inputs :submit-btn-label="'Envoyer'" @on-submit="(data: object) => onSubmit(data)">
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
                        inputs[3].value === 'lunch' ? establishmentInfo.servicesTime.lunch : establishmentInfo.servicesTime.diner, 2)"
                    default="Choisissez l'heure de réservation"
                />
                <InputNumberSelect :input="inputs[5]" />
                <InputRadio :input="inputs[6]" :options="[
                    { name: 'yes', label: 'Oui', value: true },
                    { name: 'no', label: 'Non', value: false }
                ]" />
                <InputText v-if="inputs[6].value" :input="inputs[7]"/>
            </FormSectionLayout>
        </FormLayout>
    </PageContent>
</template>