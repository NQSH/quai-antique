<script setup lang="ts">
import { computed, ref, type Reactive } from 'vue';
import { Input } from './classes/_input';
import InputLayout from './InputLayout.vue';

const props = defineProps<{
    input: Reactive<Input>
    options?: Object
}>()

const isFocused = ref(false)

const labelStyle = computed(() => {
    return props.input.value !== '' || isFocused.value ? 'changing' : '';
})

function onBlur(): void {
    isFocused.value = false;
    props.input.validator?.isValid(props.input.value);
}

function onInput(): void {    
    if(props.input.validator && props.input.validator.errors.length > 0) props.input.validator?.isValid(props.input.value);
}

</script>

<template>
    <InputLayout :errors="props.input.validator?.errors">
        <div class="input-container">
            <label :class="labelStyle" :for="props.input.name">{{ props.input.label }}</label>
            <input type="text" :id="props.input.name" v-model="props.input.value" @focus="isFocused = true" @blur="onBlur" @input="onInput" v-bind="props.options"/>
        </div>
    </InputLayout>
</template>

<style lang="css" scoped>
.input-container {
    position: relative;
}

input {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-content);

    width: 100%;
    height: 40px;
    border: 1px solid var(--color-tertiary);
    border-radius: 5px;
    padding-inline: 10px;
}
label {
    color: var(--color-tertiary-light);
    position: absolute;
    top: 50%;
    left: 5px;
    padding: 0px 5px;
    transform: translateY(-50%);
    background-color: white;
    transition: 300ms;

    &.changing {
        top: -2px;
        left: 10px;
        font-size: 12px;
    }
}
</style>