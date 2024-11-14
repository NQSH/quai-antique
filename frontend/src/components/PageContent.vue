<template>
    <section>
        <slot />
    </section>
</template>

<style lang="css" scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 768px;
    max-width: min(calc(100% - 20px), 768px);
    padding-block: 40px;
}
</style>