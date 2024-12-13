<script setup lang="ts">
import { computed, reactive } from 'vue';
import FormLayout, { type FormInputs } from '../FormLayout.vue';
import FormSectionLayout from '../FormSectionLayout.vue';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import { Input } from '../inputs/classes/_input';
import { useEstablishment } from '@/composables/useEstablishment';
import InputCheckbox from '../inputs/InputCheckbox.vue';
import InputSelectField from '../inputs/InputSelectField.vue';
import InputSelectOption from '../inputs/InputSelectOption.vue';
import InputNumberSelect from '../inputs/InputNumberSelect.vue';
import InputText from '../inputs/InputText.vue';
import { useModal } from '@/composables/useModal';

const { establishmentInfo, post } = useEstablishment();
const { closeModal } = useModal();

const lunchSchedule = new Input('lunch', 'Midi', establishmentInfo.value?.schedules[1]?[0] + ':00' : '12:00');
const dinerSchedule = new Input('diner', 'Soir', establishmentInfo.value?.schedules[1]?[1] + ':00' : '19:00');

const address = new Input('address', 'Adresse', establishmentInfo.value?.location.address);
const zipCode = new Input('zipCode', 'Code postal', establishmentInfo.value?.location.zipCode);
const city = new Input('city', 'Ville', establishmentInfo.value?.location.city);

const phone = new Input('phone', 'Numéro de téléphone', establishmentInfo.value?.contact.phone);
const email = new Input('email', 'Adresse email', establishmentInfo.value?.contact.email);

const schedules = computed(() => {
    const value = [];
    const lunchValue = Number(String(lunchSchedule.value).slice(0, 2));
    const dinerValue = Number(String(dinerSchedule.value).slice(0, 2));

    for (let i = 0; i < 7; i++) {
        if (i === 0) value.push(null);
        else value.push([lunchValue, dinerValue]);        
    }

    return value;
})

const location = computed(() => {
    return {
        address: address.value,
        zipCode: zipCode.value,
        city: city.value
    };
})

const contact = computed(() => {
    return {
        phone: phone.value,
        email: email.value
    };
})

const inputs = reactive<FormInputs>({
    'recurringSchedule': new Input('recurringSchedule', 'Horaire récurrent', true),
    'schedules': new Input('schedules', '', schedules),
    'capacity': new Input('capacity', 'Nombre de convive maximum', establishmentInfo.value?.capacity),
    'location': new Input('location', '', location),
    'contact': new Input('contact', '', contact),
})


function onSudmit(data: object): void {
    post(data);
    closeModal();
}

</script>

<template>
    <PageContent>
        <TitleContent>
            Modification des informations
        </TitleContent>
        <FormLayout :inputs submit-btn-label="Enregistrer" @on-submit="onSudmit">
            <FormSectionLayout title="Horaires d'ouverture">
                <InputCheckbox :input="inputs['recurringSchedule']" :options="{ disabled: true }"/>
                <div class="schedules">
                    <div class="schedules-detail">
                        <InputSelectField :input="lunchSchedule">
                            <InputSelectOption value="11:00"/>
                            <InputSelectOption value="12:00"/>
                            <InputSelectOption value="13:00"/>
                        </InputSelectField>
                    </div>
                    <div class="schedules-detail">
                        <InputSelectField :input="dinerSchedule">
                            <InputSelectOption value="18:00"/>
                            <InputSelectOption value="19:00"/>
                            <InputSelectOption value="20:00"/>
                        </InputSelectField>
                    </div>
                </div>
            </FormSectionLayout>
            <FormSectionLayout title="Capacité du restaurant">
                <InputNumberSelect :input="inputs['capacity']"/>
            </FormSectionLayout>
            <FormSectionLayout title="Informations de localisation">
                <InputText :input="address" />
                <InputText :input="zipCode" />
                <InputText :input="city" />
            </FormSectionLayout>
            <FormSectionLayout title="Informations de contact">
                <InputText :input="phone" />
                <InputText :input="email" />
            </FormSectionLayout>
        </FormLayout>
    </PageContent>
</template>

<style lang="css" scoped>
.schedules {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.schedules-detail {
    width: 100%;
}
</style>