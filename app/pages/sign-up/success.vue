<template>
  <div
    class="flex w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6 lg:w-1/2"
  >
    <div class="w-full max-w-md space-y-8 text-center">
      <div class="flex justify-center">
        <div
          class="flex h-20 w-20 items-center justify-center rounded-full bg-success/10"
        >
          <span
            class="material-symbols-outlined text-5xl text-success"
            style="font-variation-settings: 'FILL' 1, 'wght' 500"
            >check_circle</span
          >
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <p
          class="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]"
        >
          Đăng ký Thành công!
        </p>
        <p
          class="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal"
        >
          Chào mừng bạn đến với Connectify! Tài khoản của bạn đã được tạo thành
          công.
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <BaseButton> Đến trang chính </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";

definePageMeta({
  layout: "auth",
});
</script>
