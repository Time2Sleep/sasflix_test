<script setup lang="ts">
import Comment from '@/components/comments/Comment.vue';
import Post from '@/components/post/Post.vue';
</script>

<template>
    <div class="post-page">
        <Post class="post-page__post"/>

        <div class="post-page__comments">
            <h2 class="post-page__count">2  comments</h2>

            <Comment/>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
@use '@styles/variables' as *;

.post-page {
    width: 100%;

    &__post {
        margin-bottom: 42px;
    }

    &__comments {
        width: 100%;
    }

    &__count {        
        margin-bottom: $spacing-m;
    }
}
</style>