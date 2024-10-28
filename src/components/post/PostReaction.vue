<script setup lang="ts">
import LikeIcon from '@/components/icons/LikeIcon.vue';
import DislikeIcon from '@/components/icons/DislikeIcon.vue';


</script>

<template>
    <div class="reaction">
        <button class="reaction__button reaction__like">
            <LikeIcon mode="dark"/>

            <span>Like</span>

            <span class="reaction__count text-caption">
                192
            </span>
        </button>

        <button class="reaction__button reaction__dislike active">
            <DislikeIcon/>

            <span>Trash</span>

            <span class="reaction__count text-caption">
                192
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