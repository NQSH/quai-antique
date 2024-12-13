<script setup lang="ts">
import type { Reactive } from 'vue';
import type { Input } from './classes/_input';


const props = defineProps<{
    input: Reactive<Input>
    options?: object
}>()
</script>

<template>
    <div class="container">
        <input type="checkbox" :name="props.input.name" :id="props.input.name" :checked="props.input.value" :value="props.input.value" v-bind="options">
        <label :for="props.input.name">{{ props.input.label }}</label>
    </div>
</template>

<style lang="css" scoped>
    .container {
        display: flex;
        flex-direction: row;
        align-self: start;
        gap: 10px;
    }
</style>