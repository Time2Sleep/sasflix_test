import { getPosts } from "@/services/api";
import { Post } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostsStore = defineStore('posts-store', () => {
    const postsList = ref<Post[]>([]);
    const isLoading = ref<boolean>(false);

    const fetchPosts = async () => {
        isLoading.value = true;

        try {
            const { data } = await getPosts();

            postsList.value = data.posts;
        } catch (e) {
            console.error(e);
        }

        isLoading.value = false;
    };

    return {
        postsList,
        isLoading,
        fetchPosts
    }
});