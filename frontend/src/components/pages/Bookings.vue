<script setup lang="ts">
import { useBooking } from '@/composables/useBooking';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import ProtectedContent from '../ProtectedContent.vue';
import BookingItem from './bookings/BookingItem.vue';

const { bookings } = useBooking();

</script>

<template>
    <ProtectedContent>
        <PageContent>
            <TitleContent>
                Mes réservations
            </TitleContent>
            <div class="bookings-list" >
                <h2 class="text-title">Réservations à venir</h2>
                <BookingItem :booking v-for="booking in bookings" />
                <p v-if="bookings?.length === 0">Aucune réservation à venir</p>
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