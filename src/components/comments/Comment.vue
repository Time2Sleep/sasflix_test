<script setup lang="ts">
import { Comment } from '@/types';
import NoAvatarIcon from '@/components/icons/NoAvatarIcon.vue';
import { usePostPageStore } from '@/store/postPage';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

interface Props {
    comment: Comment
}

const props = defineProps<Props>();

const postPageStore = usePostPageStore();
const { deletedComments } = storeToRefs(postPageStore);

const isDeleted = computed<boolean>(() => deletedComments.value.includes(props.comment.id));

const handleDelete = () => {
    deletedComments.value.push(props.comment.id);
};

const handleRestore = () => {
    const index = deletedComments.value.indexOf(props.comment.id);
    deletedComments.value.splice(index, 1);
};
</script>

<template>
    <div class="comment">
        <div class="comment__avatar">
            <NoAvatarIcon/>
        </div>

        <div class="comment__content">
            <div class="comment__name">{{ props.comment.user.fullName }}</div>

            <template v-if="!isDeleted">
                <div class="comment__text">{{ props.comment.body }}</div>

                <div class="comment__actions text-caption">
                    <div class="comment__date">Today</div>

                    <button class="comment__delete link" @click="handleDelete">Delete</button>
                </div>
            </template>

            <div v-else>This comment has been deleted. <button class="link" @click="handleRestore">Return</button></div>
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