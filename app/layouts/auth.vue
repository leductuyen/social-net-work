<script setup lang="ts">
import AuthLeft from "~/components/ui/AuthLeft.vue";
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark font-display">
    <div class="relative flex min-h-screen w-full flex-col group/design-root">
      <div class="flex-grow">
        <div class="flex min-h-screen">
          <AuthLeft />

          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
