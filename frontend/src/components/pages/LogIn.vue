<script setup lang="ts">
import { reactive, watch } from 'vue';
import FormLayout from '../FormLayout.vue';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import { Input } from '../inputs/classes/_input';
import { Validators } from '../inputs/classes/_validators';
import FormSectionLayout from '../FormSectionLayout.vue';
import InputText from '../inputs/InputText.vue';
import { useAuthentication } from '@/composables/useAuthentication';
import { useRouter } from '@/composables/useRouter';
import Link from '../Link.vue';

type Data = {
    email: string
    password: string
}

const inputs = reactive([
    new Input('email', 'Adresse email', '', Validators.Email()),
    new Input('password', 'Mot de passe', ''),
])

const { logIn, authentication, error, isLoading } = useAuthentication();
const { navigateFrom } = useRouter();

function onSubmit(data: Data): void {
    logIn(data);
}

watch(authentication, () => {
    if(authentication.value) navigateFrom();
}, { immediate: true })

</script>

<template>
    <PageContent>
        <TitleContent>
            Connexion
        </TitleContent>
        <FormLayout :inputs :submit-btn-label="'Se connecter'" @on-submit="(data: object) => onSubmit(data as Data)" :is-loading>
            <FormSectionLayout title="Identifiants" :centered-title="true" :one-lined="true">
                <InputText :input="inputs[0]" :options="{ type: 'email', disabled: isLoading }"/>
                <InputText :input="inputs[1]" :options="{ type: 'password', disabled: isLoading }"/>
            </FormSectionLayout>
            <p v-if="error">{{ error }}</p>
        </FormLayout>
        <Link href="#/signin" label="Devenir client"/>
    </PageContent>
</template>