<script setup lang="ts">
import MainHeader from './components/layouts/MainHeader.vue';
</script>

<template>
  <MainHeader/>
  <main class="content">
    <RouterView/>
  </main>  
</template>

<style scoped lang="scss">
.content {
    margin: 0 auto;
    width: 678px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>