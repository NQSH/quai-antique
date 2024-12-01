<script setup lang="ts">
import ButtonDefault from '@/components/inputs/ButtonDefault.vue';
import type { Booking } from '@/composables/useBooking';
import { useModal } from '@/composables/useModal';
import BookingItemChangeModal from './BookingItemChangeModal.vue';
import BookingItemCancelModal from './BookingItemCancelModal.vue';

const { openModal } = useModal();

const props = defineProps<{
    booking: Booking
}>()

function onChangeClick(): void {
    openModal(BookingItemChangeModal, { booking: props.booking })
}

function onCancelClick(): void {
    openModal(BookingItemCancelModal, { booking: props.booking })
}

</script>

<template>
    <div class="container">
        <p>{{ `Le ${new Date(props.booking.date).toLocaleDateString()} à ${props.booking.time.replace(':', 'h')}` }}</p>
        <p>{{ `Pour ${props.booking.numberOfPerson} personne${props.booking.numberOfPerson > 1 ? 's': ''}` }}</p>
        <p>{{ `Allergies: ${props.booking.hasAllergy ? props.booking.allergies : 'Aucune'}` }}</p>
        <div class="buttons">
            <ButtonDefault label="Modifier" @on-click="onChangeClick"/>
            <ButtonDefault label="Annuler" @on-click="onCancelClick" dark/>
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