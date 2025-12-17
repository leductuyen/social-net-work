<template>
  <div
    class="flex w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6 lg:w-1/2"
  >
    <div class="w-full max-w-md space-y-8">
      <div class="flex flex-col gap-3 text-center lg:text-left">
        <p
          class="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]"
        >
          Đăng ký
        </p>
        <p
          class="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal"
        >
          Bắt đầu bằng cách nhập số điện thoại hoặc email của bạn.
        </p>
      </div>
      <form class="space-y-6">
        <div>
          <label class="flex flex-col min-w-40 flex-1">
            <p
              class="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2"
            >
              Số điện thoại hoặc Email
            </p>
            <div class="relative flex w-full items-center">
              <span
                class="material-symbols-outlined absolute left-4 text-gray-500 dark:text-gray-400"
                >alternate_email</span
              >
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white dark:bg-background-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder-gray-400 pl-12 pr-4 text-base font-normal leading-normal"
                placeholder="Nhập SĐT hoặc email của bạn"
                type="text"
                value=""
              />
            </div>
          </label>
        </div>

        <BaseButton> Gửi mã OTP </BaseButton>
      </form>
      <div class="text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Bằng việc tiếp tục, bạn đồng ý với

          <BaseLink>Điều khoản Dịch vụ </BaseLink>
          và

          <BaseLink>Chính sách Bảo mật</BaseLink>
          của chúng tôi.
        </p>
      </div>
      <div class="text-center">
        <p class="text-base text-gray-500 dark:text-gray-400">
          Đã có tài khoản?
          <BaseLink variant="bold"> Đăng nhập </BaseLink>
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
