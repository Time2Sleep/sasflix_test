import { useStorage } from '@vueuse/core'

export const useReactions = () => {
    const likedPosts = useStorage<number[]>('liked-posts', []);
    const dislikedPosts = useStorage<number[]>('disliked-posts', []);

    const removeReaction = (postId: number): { wasLiked: boolean, wasDisliked: boolean } => {
        const indexLiked = likedPosts.value.indexOf(postId);
        if (indexLiked > -1)
            likedPosts.value.splice(indexLiked, 1);

        const indexDisliked = dislikedPosts.value.indexOf(postId);
        if (indexDisliked > -1)
            dislikedPosts.value.splice(indexDisliked, 1); 

        return {
            wasLiked: indexLiked > -1,
            wasDisliked: indexDisliked > -1
        }
    }

    const like = (postId: number) => {
        if( !removeReaction(postId).wasLiked )
            likedPosts.value.push(postId);
    }

    const dislike = (postId: number) => {
        if( !removeReaction(postId).wasDisliked )
            dislikedPosts.value.push(postId);
    }

    const isLiked = (postId: number) => likedPosts.value.includes(postId);
    const isDisliked = (postId: number) => dislikedPosts.value.includes(postId);

    return {
        like,
        dislike,
        isLiked,
        isDisliked
    }
}