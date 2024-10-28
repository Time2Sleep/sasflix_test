<script setup lang="ts">
import PostReaction from './PostReaction.vue';
import PostTags from './PostTags.vue';
</script>

<template>
    <div class="post">
        <h2 class="post__title">
            His mother had always taught him
        </h2>

        <div class="post__content">
            His mother had always taught him not to ever think of himself as better than others.
        </div>

        <div class="post__actions text-caption">
            <PostReaction/>

            <RouterLink to="#">Open comments</RouterLink>

            <div class="post__date">Today</div>

            <PostTags/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '@styles/variables' as *;

.post {
    &__title {
        margin-bottom: $spacing-s;
    }

    &__content {
        margin-bottom: $spacing-m;
    }

    &__actions {
        display: flex;
        align-items: center;
        gap: $spacing-xs;
    }

    &__date {
        color: $c-border;
    }
}
</style>