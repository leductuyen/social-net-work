<template>
  <header
    class="fixed top-0 left-0 right-0 z-10 bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark"
  >
    <div class="mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <span
              class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-white"
                >all_inclusive</span
              >
            </span>
            <span class="font-bold text-xl">WeShare</span>
          </div>
        </div>
        <div class="flex-1 max-w-xl">
          <div class="relative">
            <span
              class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-text-dark-secondary"
              >search</span
            >
            <input
              class="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border border-transparent rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span
              class="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary"
              >notifications</span
            >
          </button>
          <button
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span
              class="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary"
              >bookmark</span
            >
          </button>
          <div class="flex items-center space-x-2">
            <img
              alt="User avatar"
              class="w-10 h-10 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgvEsjemrupbB2K6z1TQ3NMlDQ_lZ_tKlQPJNLDjvBmJh2Q9VE4MfOX8cRRHoBQ4CaP4XVMx5TUZbjpR_ls5dwetmhXpwgSWJJ3pdiVc0Zj8p-9ngocMGG9vTgyfzzRziY6DkBvwy7dVn-DNpf0QVCwURDIUE2DdNtkn5qfBbpz5WhDiJS9IlC9y0XMYYaqy2M94RaTFvR3SmB24hRaAKrQPrOp1Yuprwl71s0BnMhXVbeggrC67K1QqnGaw9SbRK2T-CdQUrNpA4"
            />
            <div class="hidden md:block">
              <p class="font-semibold text-sm">Jakob Botosh</p>
            </div>
            <button>
              <span
                class="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary"
                >expand_more</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// props
// const props = defineProps<{}>()

// emits
// const emit = defineEmits([])

// state
const state = ref(null);

// lifecycle
// onMounted(() => {})
</script>

<style scoped></style>
