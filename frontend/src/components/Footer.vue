<script setup lang="ts">
import { useEstablishment } from '@/composables/useEstablishment';
import ButtonAdminChange from './ButtonAdminChange.vue';
import IconEmail from './footer/IconEmail.vue';
import IconPhone from './footer/IconPhone.vue';
import { Helpers } from '@/helpers/_helpers';
import { useModal } from '@/composables/useModal';
import EstablishmentInfoChangeModal from './footer/EstablishmentInfoChangeModal.vue';


enum daysOfWeek {"Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"};

const { establishmentInfo } = useEstablishment();
const { openModal } = useModal();

function onAdminBtnClick() {
    openModal(EstablishmentInfoChangeModal, {});
}

</script>

<template>
<footer>
    <section>
        <table>
            <caption>
                <h1 class="text-title">Nos horaires</h1>
            </caption>
            <thead v-show="false">
                <tr>
                    <th scope="col">Jours</th>
                    <th scope="col">Horaires</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(hours, index) in establishmentInfo?.schedules">
                    <th scope="row">{{ daysOfWeek[index] }}</th>
                    <td>{{ hours ? `${hours[0]}h-${hours[0] + 2}h / ${hours[1]}h-${hours[1] + 2}h` : 'Fermé' }}</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section>
        <h1 class="text-title">Nous trouver</h1>
        <address>
            {{ establishmentInfo?.location.address }}
            <br>
            {{ `${establishmentInfo?.location.zipCode} ${establishmentInfo?.location.city}` }}
        </address>
    </section>
    <section>
        <h1 class="text-title">Nous contacter</h1>
        <address>
            <a class="contact-link" :href="`tel:${establishmentInfo?.contact.phone}`"><IconPhone class="icon" /><p>{{ Helpers.FormatTool.PhoneNumber.phoneNumberFR(establishmentInfo?.contact.phone || '') }}</p></a>
            <a class="contact-link" :href="`mailto:${establishmentInfo?.contact.email}`"><IconEmail class="icon" /><p>{{ establishmentInfo?.contact.email }}</p></a>
        </address>
    </section>
    <ButtonAdminChange class="admin-button" @on-click="onAdminBtnClick"/>
</footer>
</template>

<style lang="css" scoped>
footer {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 20px 30px;
    background-color: var(--color-primary);
    
    & * {
        color: var(--color-white);
    }
}

section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
}

address {
    font-style: normal;
}

h1 {
    color: var(--color-tertiary-light);
}

.contact-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: var(--color-white);
    text-decoration: none;
}

th {
    text-align: right;
}

td {
    text-align: left;
    padding-left: 30px;
}

.admin-button {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
}

@media (max-width: 992px) {
    footer {
        flex-direction: column;
    }
}
</style>