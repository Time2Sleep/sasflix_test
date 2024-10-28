<script setup lang="ts">
import Post from '@/components/post/Post.vue';
</script>

<template>
    <div class="posts-wrapper">
        <Post/>
        <Post/>
    </div>
    
</template>

<style scoped lang="scss">
@use '@styles/variables' as *;

.posts-wrapper {
    display: flex;
    flex-direction: column;
    gap: $spacing-l;
}
</style>