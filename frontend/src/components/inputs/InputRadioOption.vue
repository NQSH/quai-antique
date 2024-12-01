<script setup lang="ts">
import type { Reactive } from 'vue';
import type { Input } from './classes/_input';


const props = defineProps<{
    input: Reactive<Input>
    name: string
    label: string
    value: any
    options?: object
}>()
</script>

<template>
    <div class="container">
        <input type="radio" :id="props.name" v-model="props.input.value" :value="props.value" :name="props.input.name" v-bind="options"/>
        <label :for="props.name">{{ props.label }}</label>
    </div>
</template>

<style lang="css" scoped>
.container{
    display: flex;
    align-items: center;
}
input {
    margin-right: 10px;
}

label {
    color: var(--color-tertiary);
}
</style>