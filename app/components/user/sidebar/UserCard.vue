<template>
  <div class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm">
    <div class="flex flex-col items-center">
    
      <img
        :alt="user.name + ' avatar'"
        class="w-16 h-16 rounded-full"
        :src="user.avatar"
      />
     
      <div class="flex items-center mt-2">
        <h3 class="font-bold">{{ user.name }}</h3>
        <span
          v-if="user.verified"
          class="material-symbols-outlined text-primary text-lg ml-1 filled"
        >
          verified
        </span>
      </div>
    
      <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">
        {{ user.username }}
      </p>
    
      <div class="flex justify-around w-full mt-4 text-center">
        <div v-for="item in stats" :key="item.label">
          <p class="font-bold">{{ item.value }}</p>
          <p class="text-xs text-text-light-secondary dark:text-text-dark-secondary">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
}


const user: User = {
  name: "Jakob Botosh",
  username: "@jakobbtsh",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAEcesy5F-0fJowMQzx67wn7izYuWtxsQtYxxHCBok-V64Gp5D1nODaFlKpwkX4goQoj0KuPLF3USuwfp3g1VEUkatfjtJZK9LIMl1SBOtbYanG1qEOisF0rwAtdt8Tq9uV0O8U-umKlWf-Ryofnwh46lKygtHO4Oz-LS3Wifxfom-JrqWigccn-aGXJ6mY5aL693rqWiDC6OKh92XGp3vbv6KrmQ4Nk-eUYfynnwUXFHMsahZUlbcU4mOKsmDFcawz4asgydlwHPg",
  verified: true
};


const stats = [
  { label: "Follower", value: "2.3K" },
  { label: "Following", value: 235 },
  { label: "Post", value: 80 }
];
</script>

<style scoped></style>
