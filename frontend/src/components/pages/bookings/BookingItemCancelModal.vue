<script setup lang="ts">
import ButtonDefault from '@/components/inputs/ButtonDefault.vue';
import PageContent from '@/components/PageContent.vue';
import TitleContent from '@/components/TitleContent.vue';
import { usebooking, type Booking } from '@/composables/useBooking';
import { useModal } from '@/composables/useModal';

const { remove } = usebooking();
const { closeModal } = useModal();

const props = defineProps<{
    booking: Booking
}>()

function onYesClick(): void {
    remove(props.booking);
    closeModal();
}

</script>

<template>
    <PageContent>
        <TitleContent>
            Annulation de votre réservation
        </TitleContent>
        <p>Êtes-vous sûr de vouloir annuler cette réservation ?</p>
        <div class="buttons-container">
            <ButtonDefault label="Oui" @on-click="onYesClick" />
            <ButtonDefault label="Non" @on-click="closeModal" dark />
        </div>
    </PageContent>
</template>

<style lang="css" scoped>
.buttons-container {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
}

p {
    text-align: center;
}
</style>