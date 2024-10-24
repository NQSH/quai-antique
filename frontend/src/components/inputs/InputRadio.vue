<script setup lang="ts">
import { watch, type Reactive } from 'vue';
import { Input } from './classes/_input';
import InputLayout from './InputLayout.vue';

type Radio = {
    name: string
    label: string
    value: any
}

const props = defineProps<{
    input: Reactive<Input>
    options: Radio[]
}>()

watch(() => props.input.value, () => {
    props.input.value
})

</script>

<template>
    <InputLayout :errors="props.input.validator?.errors">
        <fieldset>
            <legend>{{ props.input.label }}</legend>
            <div class="inputs">
                <div class="input-container" v-for="radio in options">
                    <input type="radio" :id="props.input.name" v-model="props.input.value" :value="radio.value"/>
                    <label :for="radio.name">{{ radio.label }}</label>
                </div>
            </div>
        </fieldset>
    </InputLayout>
</template>

<style lang="css" scoped>

input {
    margin-right: 10px;
}

label {
    color: var(--color-tertiary);
}

fieldset {
    margin: 0px;
    padding: 0px;
    border: 0px;
}

legend {
    padding-inline: 10px;
    margin-bottom: 18px;
    color: var(--color-tertiary-light);
}

.inputs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
}
.input-container{
    display: flex;
    align-items: center;
}
</style>