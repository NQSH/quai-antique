<script setup lang="ts">
import IconEmail from './Icon-email.vue';
import IconPhone from './Icon-phone.vue';

enum daysOfWeek {"Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"};

const schedules = [
    null,
    [12, 19],
    [12, 19],
    [12, 19],
    [12, 19],
    [12, 19],
    [12, 19]
]
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
                <tr v-for="(hours, index) in schedules">
                    <th scope="row">{{ daysOfWeek[index] }}</th>
                    <td>{{ hours ? `${hours[0]}h-${hours[0] + 2}h / ${hours[1]}h-${hours[1] + 2}h` : 'Fermé' }}</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section>
        <h1 class="text-title">Nous trouver</h1>
        <address>
            123 Avenue du Grand Port
            <br>
            73100 Aix-les-Bains
        </address>
    </section>
    <section>
        <h1 class="text-title">Nous contacter</h1>
        <address>
            <a class="contact-link" href="tel:+33612345678"><IconPhone class="icon" /><p>06 12 34 56 78</p></a>
            <a class="contact-link" href="mailto:contact@quai-antique.fr"><IconEmail class="icon" /><p>contact@quai-antique.fr</p></a>
        </address>
    </section>
</footer>
</template>

<style lang="css" scoped>
footer {
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
</style>