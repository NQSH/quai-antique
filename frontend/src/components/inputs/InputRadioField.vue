<script setup lang="ts">
import { watch, type Reactive } from 'vue';
import { Input } from './classes/_input';
import InputLayout from './InputLayout.vue';

const props = defineProps<{
    input: Reactive<Input>
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
                <slot />
            </div>
        </fieldset>
    </InputLayout>
</template>

<style lang="css" scoped>
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
</style>