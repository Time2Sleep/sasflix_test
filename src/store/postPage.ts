import { getPost, getPostComments } from '@/services/api';
import { Comment, Post } from '@/types';
import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostPageStore = defineStore('post-page-store', () => {
    const comments = ref<Comment[]>([]);
    const totalComments = ref<number>(0);
    const isLoading = ref<boolean>(false);
    const postData = ref<Post>();
    const deletedComments = useStorage<number[]>('deleted-comments', []);

    const fetchComments = async (postId: number) => {
        isLoading.value = true;

        try {
            const { data } = await getPostComments(postId);

            comments.value = data.comments;
            totalComments.value = data.total;
        } catch (e) {
            console.log(e);
        }

        isLoading.value = false;
    };

    const fetchPost = async (postId: number) => {
        try {
            const { data } = await getPost(postId);

            postData.value = data;
        } catch (e) {
            console.log(e);
        }
    }

    return {
        fetchComments,
        fetchPost,
        isCommentsLoading: isLoading,
        postData,
        comments,
        totalComments,
        deletedComments
    }
});