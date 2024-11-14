<script setup lang="ts">
import { usebooking, type Booking } from '@/composables/useBooking';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import ProtectedContent from '../ProtectedContent.vue';
import BookingItem from './bookings/BookingItem.vue';
import BookingItemChangeModal from './bookings/BookingItemChangeModal.vue';
import { useModal } from '@/composables/useModal';

const { bookings } = usebooking();
const { openModal } = useModal();

function onChangeClick(booking: Booking): void {
    openModal(BookingItemChangeModal, { booking })
}
</script>

<template>
    <ProtectedContent>
        <PageContent>
            <TitleContent>
                Mes réservations
            </TitleContent>
            <div class="bookings-list" >
                <h2 class="text-title">Réservation à venir</h2>
                <BookingItem :booking v-for="booking in bookings" @on-change-click="booking=> onChangeClick(booking)"/>
            </div>
        </PageContent>
    </ProtectedContent>
</template>

<style lang="css" scoped>
.bookings-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
</style>