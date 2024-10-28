<script setup lang="ts">
import Comment from '@/components/comments/Comment.vue';
import Loader from '@/components/layouts/Loader.vue';
import Post from '@/components/post/Post.vue';
import { usePostsStore } from '@/store';
import { usePostPageStore } from '@/store/postPage';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const postStore = usePostsStore();
const postPageStore = usePostPageStore();
const { postData, isCommentsLoading, comments, totalComments } = storeToRefs(postPageStore);
const { fetchPost, fetchComments } = postPageStore;

onBeforeMount(() => {
    const route = useRoute();
    const id = parseInt(<string>route.params.id);

    const post = postStore.postsList.find(post => post.id === id);

    if(post)
        postData.value = post;
    else
        fetchPost(id);

    fetchComments(id);
});
</script>

<template>
    <div class="post-page" v-if="postData">
        <Post class="post-page__post" :data="postData" :show-link="false"/>

        <div class="post-page__wrapper">
            <h2 class="post-page__count">{{ totalComments}} {{ totalComments > 1 ? 'comments' : 'comment' }}</h2>
            
            <Loader v-if="isCommentsLoading"/> 
            <div class="post-page__comments" v-else>
                <Comment 
                    v-for="comment in comments"
                    :key="comment.id"
                    :comment="comment"
                />
            </div>            
        </div>
    </div>

    <Loader v-else/>    
</template>

<style scoped lang="scss">
@use '@styles/variables' as *;

.post-page {
    width: 100%;

    &__post {
        margin-bottom: 42px;
    }

    &__wrapper {
        width: 100%;
    }

    &__comments {
        display: flex;
        flex-direction: column;
        gap: $spacing-m;
    }

    &__count {        
        margin-bottom: $spacing-m;
    }
}
</style>