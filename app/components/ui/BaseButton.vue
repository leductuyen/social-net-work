<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      baseClass,
      disabled || loading ? 'opacity-60 cursor-not-allowed' : '',
      block ? 'w-full' : '',
    ]"
  >
    <span v-if="loading" class="animate-pulse">Đang xử lý...</span>
    <span v-else class="truncate">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

withDefaults(defineProps<Props>(), {
  type: "button",
  disabled: false,
  loading: false,
  block: true,
});

const baseClass =
  "flex min-w-[84px] h-14 items-center justify-center overflow-hidden rounded-xl px-5 " +
  "bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] " +
  "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 " +
  "focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-colors duration-200";
</script>
