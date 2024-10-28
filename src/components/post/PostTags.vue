<script setup lang="ts">
import TagTailIcon from '@/components/icons/TagTailIcon.vue';
</script>

<template>
    <div class="tags text-caption">
        <TagTailIcon class="tags__tail"/>
    
        <div class="tags__item">history</div>
        <div class="tags__item">american</div>
        <div class="tags__item">crime</div>
    </div>
</template>

<style scoped lang="scss">
@use '@styles/variables' as *;

.tags {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;

    &__tail {
        transform: translateX(4px);
    }

    &__item {
        background-color: $c-tag;
        padding: 2px 4px;
        border-radius: 3px;

        &:first-of-type {
            padding-left: 0;
            border-radius: 0 3px 3px 0;
        }
    }
}
</style>