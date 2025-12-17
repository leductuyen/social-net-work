<template>
  <div
    class="flex w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6 lg:w-1/2"
  >
    <div class="w-full max-w-md space-y-8">
      <div class="flex flex-col gap-3 text-center lg:text-left">
        <p
          class="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white"
        >
          Nhập mã OTP
        </p>
        <p class="text-base text-gray-500 dark:text-gray-400">
          Một mã xác thực gồm 6 chữ số đã được gửi đến email của bạn.
        </p>
      </div>

      <form class="space-y-6">
        <div>
          <label
            for="otp"
            class="block pb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Mã xác thực
          </label>

          <div class="flex justify-between gap-2 sm:gap-4">
            <input
              v-for="i in 6"
              :key="i"
              maxlength="1"
              type="text"
              class="otp-input"
            />
          </div>
        </div>

        <BaseButton :disabled="true"> Xác nhận </BaseButton>
      </form>

      <!-- Resend -->
      <div class="text-center">
        <p class="text-base text-gray-500 dark:text-gray-400">
          Chưa nhận được mã?
          <BaseLink variant="bold"> Gửi lại OTP </BaseLink>
          <span class="text-gray-500 dark:text-gray-400">(còn 0:59)</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import BaseLink from "~/components/ui/BaseLink.vue";

definePageMeta({
  layout: "auth",
});
</script>

<style scoped>
.otp-input {
  @apply aspect-square h-14 w-full rounded-xl border border-gray-300 bg-white text-center text-2xl font-bold text-gray-900 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-background-dark/50 dark:text-white;
}
</style>
