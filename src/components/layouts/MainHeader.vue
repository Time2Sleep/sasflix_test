<template>
    <header class="header">
        <h1><RouterLink to="/">ikakprosto.ru</RouterLink></h1>
    </header>
</template>


<style scoped lang="scss">
@use '@styles/variables' as *;

.header {
    width: 100%;
    padding: $spacing-s 0 $spacing-xl;
    display: flex;
    justify-content: center;
}
</style>