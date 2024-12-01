<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import FormLayout, { type FormInputs } from '../FormLayout.vue';
import FormSectionLayout from '../FormSectionLayout.vue';
import { Input } from '../inputs/classes/_input';
import { Validators } from '../inputs/classes/_validators';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import { useUser, type NewUser } from '@/composables/useUser';
import InputText from '../inputs/InputText.vue';
import InputNumberSelect from '../inputs/InputNumberSelect.vue';
import InputRadioField from '../inputs/InputRadioField.vue';
import InputRadioOption from '../inputs/InputRadioOption.vue';
import ButtonBooking from '../inputs/ButtonBooking.vue';

const { isLoading, error, post } = useUser();

const password = ref('');
const isSuccess = ref(false);

const inputs = reactive<FormInputs>({
    'name': new Input('name', 'Prénom', '', Validators.Name()),
    'surname': new Input('surname', 'Nom de famille', '', Validators.Name()),
    'address': new Input('address', 'Adresse de domicile', '', Validators.Address()),
    'zip': new Input('zip', 'Code postal', '', Validators.ZipCode()),
    'city': new Input('city', 'Ville', '', Validators.Name()),
    'email': new Input('email', 'Adresse email', '', Validators.Email()),
    'password': new Input('password', 'Mot de passe', password, Validators.Password()),
    'passwordConfirm': new Input('passwordConfirm', 'Confirmation du mot de passe', '', Validators.PasswordConfirm(password)),
    'numberOfPerson': new Input('numberOfPerson', 'Nombre de convives (par défaut)', 1),
    'hasAllergy': new Input('hasAllergy', 'Avez-vous des allergies ?', false),
    'allergies': new Input('allergies', 'Lesquelles ?', '', Validators.Sentence()),
})

watch(isLoading, () => {
    if (!isLoading.value && !error.value) {
        isSuccess.value = true;
    }
})

function onSubmit(data: object): void {
    post(data as NewUser);
}
</script>

<template>
    <PageContent>
        <TitleContent v-if="!isSuccess">
            Inscription
        </TitleContent>
        <FormLayout  v-if="!isSuccess" :inputs submit-btn-label="S'inscrire" @on-submit="onSubmit" :is-loading="isLoading" :error="error">
            <FormSectionLayout one-lined title="Informations personnelles">
                <InputText :input="inputs['name']" :options="{ autocomplete: 'given-name' }" />
                <InputText :input="inputs['surname']" :options="{ autocomplete: 'family-name' }" />
                <InputText :input="inputs['address']" :options="{ autocomplete: 'street-address' }" />
                <div class="address-container">
                    <InputText :input="inputs['zip']" :options="{ autocomplete: 'postal-code' }" />
                    <InputText :input="inputs['city']" :options="{ autocomplete: 'address-level2' }" />
                </div>
            </FormSectionLayout>
            <FormSectionLayout one-lined title="Identifiants">
                <InputText :input="inputs['email']" :options="{ autocomplete: 'email' }" />
                <InputText :input="inputs['password']" :options="{ type: 'password' }" />
                <InputText :input="inputs['passwordConfirm']" :options="{ type: 'password' }" />
            </FormSectionLayout>
            <FormSectionLayout one-lined title="Informations complémentaires">
                <InputNumberSelect :input="inputs['numberOfPerson']" />
                <InputRadioField :input="inputs['hasAllergy']">
                    <InputRadioOption :input="inputs['hasAllergy']" name="yes" label="Oui" :value="true" />
                    <InputRadioOption :input="inputs['hasAllergy']" name="no" label="Non" :value="false" />
                </InputRadioField>
                <InputText :input="inputs['allergies']" v-show="inputs['hasAllergy'].value" />
            </FormSectionLayout>
        </FormLayout>
        <div class="success-message-container" v-if="isSuccess">
            <h2 class="text-title">Votre compte a été créé avec succès</h2>
            <p class="success-message">Un e-mail de confirmation vous a été envoyé.</p>
            <ButtonBooking />
        </div>
    </PageContent>
</template>

<style lang="css" scoped>
.address-container {
    display: flex;
    gap: 30px;

    & > :first-child {
        flex: 2;
    }

    & > :last-child {
        flex: 5;
    }
}

.success-message-container {
    text-align: center;
}

.success-message {
    margin-bottom: 30px;
}
</style>