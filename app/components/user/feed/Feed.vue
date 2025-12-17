<template>
    <PostStory />
    <PostComposer />
    <PostList />
    <PostComments />
</template>

<script setup lang="ts">

import PostStory from './story/PostStory.vue';

import PostComposer from './composer/PostComposer.vue';
import PostList from './posts/PostList.vue';
import PostComments from './comments/PostComments.vue';

</script>
