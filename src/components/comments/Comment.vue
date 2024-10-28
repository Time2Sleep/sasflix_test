<script setup lang="ts">
import NoAvatarIcon from '@/components/icons/NoAvatarIcon.vue';
</script>

<template>
    <div class="comment">
        <div class="comment__avatar">
            <NoAvatarIcon/>
        </div>

        <div class="comment__content">
            <div class="comment__name">Stas</div>

            <div class="comment__text">His mother had always taught him</div>

            <div class="comment__actions text-caption">
                <div class="comment__date">Today</div>

                <button class="comment__delete link">Delete</button>
            </div>
        </div> 
    </div>
</template>

<style scoped lang="scss">
@use '@styles/variables' as *;

.comment {
    display: flex;
    gap: $spacing-xs;

    &__name {
        font-weight: 600;
        margin-bottom: 12px;
    }

    &__text {
        margin-bottom: $spacing-s;
    }

    &__actions {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__date {
        color: $c-border;
    }

    &__delete {
        color: $c-red;
    }
}
</style>