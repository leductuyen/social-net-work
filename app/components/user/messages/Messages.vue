<template>
  <div class="bg-white dark:bg-card-dark p-4 rounded-lg shadow-sm">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-lg">Messages</h3>
      <button>
        <span class="material-symbols-outlined">edit_square</span>
      </button>
    </div>
    <div class="relative mt-4">
     <MessageSearchInput />
    </div>
    
    <MessagesList />
  
  </div>
</template>

<script setup lang="ts">
import MessageSearchInput from './MessageSearchInput.vue';
import MessagesList from './MessagesList.vue';

</script>
