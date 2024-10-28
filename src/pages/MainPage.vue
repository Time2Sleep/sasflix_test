<script setup lang="ts">
import Post from '@/components/post/Post.vue';
import { usePostsStore } from '@/store';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';

const postsStore = usePostsStore();
const { isLoading, postsList } = storeToRefs(postsStore);
const { fetchPosts } = postsStore;

onBeforeMount(() => {
    fetchPosts();
});
</script>

<template>
    <div class="posts-wrapper">
        <template v-if="isLoading">
            Загрузка...
        </template>

        <template v-else>
            <Post
                v-for="post in postsList"
                :key="post.id"
                :data="post"
            />
        </template>
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