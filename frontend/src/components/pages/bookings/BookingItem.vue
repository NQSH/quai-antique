<script setup lang="ts">
import ButtonDefault from '@/components/inputs/ButtonDefault.vue';
import type { Booking } from '@/composables/useBooking';

const props = defineProps<{
    booking: Booking
}>()

const emits = defineEmits<{
    (event: 'onChangeClick', booking: Booking): void
}>()
</script>

<template>
    <div class="container">
        <p>{{ `Le ${new Date(props.booking.date).toLocaleDateString()} à ${props.booking.time.replace(':', 'h')}` }}</p>
        <p>{{ `Pour ${props.booking.numberOfPerson} personne${props.booking.numberOfPerson > 1 ? 's': ''}` }}</p>
        <p>{{ `Allergies: ${props.booking.allergy ? props.booking.allergies : 'Aucune'}` }}</p>
        <div class="buttons">
            <ButtonDefault label="Modifier" @on-click="emits('onChangeClick', booking)"/>
            <ButtonDefault label="Annuler" @on-click="console.log('Annuler')" dark/>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--color-tertiary);
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.buttons {
    display: flex;
    justify-content: end;
    gap: 30px;
}
</style>