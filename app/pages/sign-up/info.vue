<template>
  <div
    class="flex w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6 lg:w-1/2"
  >
    <div class="w-full max-w-md space-y-8">
      <div class="flex flex-col gap-3 text-center lg:text-left">
        <p
          class="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]"
        >
          Nhập Thông tin Cá nhân
        </p>
        <p
          class="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal"
        >
          Tạo hồ sơ của bạn và bắt đầu kết nối.
        </p>
      </div>
      <form class="space-y-6">
        <div class="flex items-center gap-6">
          <div class="relative">
            <div
              class="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
            >
              <span
                class="material-symbols-outlined text-5xl text-gray-400 dark:text-gray-500"
                >person</span
              >
            </div>
            <label
              class="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white ring-2 ring-white dark:ring-background-dark hover:bg-primary/90"
              for="avatar-upload"
            >
              <span class="material-symbols-outlined text-xl"
                >photo_camera</span
              >
              <input
                class="sr-only"
                id="avatar-upload"
                name="avatar"
                type="file"
              />
            </label>
          </div>
          <div class="flex flex-col">
            <p
              class="text-gray-900 dark:text-white text-base font-medium leading-normal"
            >
              Ảnh đại diện
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              Tải lên ảnh của bạn (tùy chọn).
            </p>
          </div>
        </div>
        <div>
          <label class="flex flex-col min-w-40 flex-1">
            <p
              class="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2"
            >
              Tên hiển thị / Tên người dùng
            </p>
            <div class="relative flex w-full items-center">
              <span
                class="material-symbols-outlined absolute left-4 text-gray-500 dark:text-gray-400"
                >person</span
              >
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white dark:bg-background-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder-gray-400 pl-12 pr-4 text-base font-normal leading-normal"
                placeholder="Nhập tên bạn muốn hiển thị"
                type="text"
                value=""
              />
            </div>
          </label>
        </div>
        <div>
          <label class="flex flex-col min-w-40 flex-1">
            <p
              class="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2"
            >
              Mật khẩu (tùy chọn)
            </p>
            <div class="relative flex w-full items-center">
              <span
                class="material-symbols-outlined absolute left-4 text-gray-500 dark:text-gray-400"
                >lock</span
              >
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white dark:bg-background-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder-gray-400 pl-12 pr-12 text-base font-normal leading-normal"
                placeholder="Tạo mật khẩu để đăng nhập sau"
                type="password"
                value=""
              />
              <button
                class="absolute right-4 text-gray-500 dark:text-gray-400 focus:outline-none"
                type="button"
              >
                <span class="material-symbols-outlined">visibility_off</span>
              </button>
            </div>
          </label>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2"
              >
                Ngày sinh
              </p>
              <div class="relative flex w-full items-center">
                <span
                  class="material-symbols-outlined absolute left-4 text-gray-500 dark:text-gray-400"
                  >cake</span
                >
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white dark:bg-background-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder-gray-400 pl-12 pr-4 text-base font-normal leading-normal"
                  type="date"
                  value=""
                />
              </div>
            </label>
          </div>
          <div>
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2"
              >
                Giới tính
              </p>
              <div class="relative flex w-full items-center">
                <span
                  class="material-symbols-outlined absolute left-4 text-gray-500 dark:text-gray-400"
                  >wc</span
                >
                <select
                  class="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white dark:bg-background-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder-gray-400 pl-12 pr-10 text-base font-normal leading-normal"
                >
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
                <span
                  class="material-symbols-outlined pointer-events-none absolute right-4 text-gray-500 dark:text-gray-400"
                  >expand_more</span
                >
              </div>
            </label>
          </div>
        </div>
        <div>
          <BaseButton> Hoàn tất đăng ký </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';

definePageMeta({
  layout: "auth",
});
</script>

<style scoped></style>
