<script setup lang="ts">
import { useUser } from '@/composables/useUser';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import { Helpers } from '@/helpers/_helpers';
import ButtonDefault from '../inputs/ButtonDefault.vue';
import ProtectedContent from '../ProtectedContent.vue';

const { user } = useUser();

function onChangeContactDetailsClick(): void {
    console.log('onChangeContactDetailsClick');
}

function onChangeEmailClick(): void {
    console.log('onChangeEmailClick');
}

function onChangePasswordClick(): void {
    console.log('onChangePasswordClick');
}

function onChangeAdditionalInfoClick(): void {
    console.log('onChangeAdditionalInfoClick');
}

function onDeleteAccountClick(): void {
    console.log('onDeleteAccountClick');
}
</script>

<template>
    <ProtectedContent>
        
    </ProtectedContent>
    <PageContent>
        <TitleContent>
            Mon compte
        </TitleContent>
        <div class="container">
            <section class="category">
                <h2 class="text-title">Information personnelles</h2>
                <div class="details">
                    <p>{{ `${Helpers.FormatTool.Text.toSentenceCase(user?.name)} ${user?.surname.toUpperCase()}`}}</p>
                    <p>{{  user?.address }}</p>
                    <p>{{  `${user?.zip} ${Helpers.FormatTool.Text.toSentenceCase(user?.city)}` }}</p>
                </div>
                <ButtonDefault label="Modifier mes coordonnées" @on-click="onChangeContactDetailsClick"/>
            </section>
            <section class="category">
                <h2 class="text-title">Identifiants</h2>
                <p>{{  user?.email }}</p>
                <ButtonDefault label="Modifier mon adresse email" @on-click="onChangeEmailClick"/>
                <ButtonDefault label="Modifier mon mot de passe" @on-click="onChangePasswordClick"/>
            </section>
            <section class="category">
                <h2 class="text-title">Information complémentaires</h2>
                <div class="details">
                    <p>Nombre de convives (par défaut) {{ user?.additional?.numberOfPerson }}</p>
                    <p>Allergies: {{ user?.additional?.hasAllergy ? user.additional.allergies : 'Aucune' }}</p>
                </div>
                <ButtonDefault label="Modifier mes informations" @on-click="onChangeAdditionalInfoClick"/>
            </section>
            <div class="button-delete">
                <ButtonDefault label="Suppimer mon compte" @on-click="onDeleteAccountClick" dark/>
            </div>
        </div>
</PageContent>
</template>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 30px;
}

.category {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 18px;
    min-width: min(calc(50% - 15px), calc(100% - 20px));
    max-width: calc(100% - 20px);
    padding-inline: 10px;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

p {
    padding-inline: 10px;
}

.button-delete {
    padding: 10px;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-content: center;
    }

    .category {
        min-width: none;
    }
}
</style>