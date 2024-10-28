<script setup lang="ts">
import LikeIcon from '@/components/icons/LikeIcon.vue';
import DislikeIcon from '@/components/icons/DislikeIcon.vue';
import { Reactions } from '@/types';
import { useReactions } from '../../composables/useReactions';
import { computed } from 'vue';

interface Props {
    reactions: Reactions,
    postId: number
}

const props = defineProps<Props>();

const { like, dislike, isLiked, isDisliked } = useReactions();

const isPostLiked = computed<boolean>(() => isLiked(props.postId));
const isPostDisliked = computed<boolean>(() => isDisliked(props.postId));

const likesCount = computed<number>(() => {
    return isPostLiked.value ? props.reactions.likes + 1 : props.reactions.likes;
});

const dislikesCount = computed<number>(() => {
    return isPostDisliked.value ? props.reactions.dislikes + 1 : props.reactions.dislikes;
});
</script>

<template>
    <div class="reaction">
        <button class="reaction__button reaction__like" :class="{active: isPostLiked}" @click="like(props.postId)">
            <LikeIcon :mode="isPostLiked ? 'light' : 'dark'"/>

            <span>Like</span>

            <span class="reaction__count text-caption">
                {{ likesCount }}
            </span>
        </button>

        <button class="reaction__button reaction__dislike" :class="{active: isPostDisliked}" @click="dislike(props.postId)">
            <DislikeIcon :mode="isPostDisliked ? 'light' : 'dark'"/>

            <span>Trash</span>

            <span class="reaction__count text-caption">
                {{ dislikesCount }}
            </span>
        </button>
    </div>
</template>

<style scoped lang="scss">
@use '@styles/variables' as *;

.reaction {
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    gap: 1px;

    &__count {
        letter-spacing: -0.5px;
        opacity: 0.3;
    }

    &__button {
        display: flex;
        align-items: center;
        gap: 6px;
        background-color: $c-overlay;
        padding: $spacing-xs $spacing-xs $spacing-xs 12px;

        &.active {
            color: $c-overlay-white;

            & .reaction__count {
                opacity: 1;
            }
        }
    }

    &__like {
        &.active {
            background-color: $c-red;
        }
    }

    &__dislike {
        &.active {
            background-color: $c-black;
        }
    }
}
</style>