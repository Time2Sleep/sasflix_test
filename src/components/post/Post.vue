<script setup lang="ts">
import { Post } from '@/types';
import PostReaction from './PostReaction.vue';
import PostTags from './PostTags.vue';

interface Props {
    data: Post
    showLink?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    showLink: true
});
</script>

<template>
    <div class="post">
        <h2 class="post__title">
            {{ props.data.title }}
        </h2>

        <div class="post__content">
            {{ props.data.body }}
        </div>

        <div class="post__actions text-caption">
            <PostReaction :reactions="props.data.reactions" :post-id="props.data.id"/>

            <RouterLink :to="props.data.id.toString()" v-if="props.showLink">Open comments</RouterLink>

            <div class="post__date">Today</div>

            <PostTags :tags="props.data.tags"/>
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