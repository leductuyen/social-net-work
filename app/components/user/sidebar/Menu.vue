<template>
  <div class="bg-card-light dark:bg-card-dark p-4 mt-4 rounded-lg">
    <nav class="space-y-1">

      <a
        v-for="(item, i) in menuItems"
        :key="i"
        href="#"
        :class="[
          'flex items-center px-4 py-3 rounded-lg',
          item.badge ? 'justify-between' : '',
          item.active
            ? 'bg-primary/20 dark:bg-primary/30 text-primary'
            : 'text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-100 dark:hover:bg-gray-700'
        ]"
      >
        <div class="flex items-center">
          <span
            class="material-symbols-outlined"
            :class="item.active ? 'filled' : ''"
          >
            {{ item.icon }}
          </span>

          <span class="ml-3 font-semibold">
            {{ item.label }}
          </span>
        </div>

        <!-- Badge -->
        <span
          v-if="item.badge"
          :class="[
            'text-white text-xs font-bold px-2 py-0.5 rounded-full',
            item.badgeColor
          ]"
        >
          {{ item.badge }}
        </span>
      </a>

    </nav>
  </div>
</template>
<script setup lang="ts">
const menuItems = [
  { label: "Feed", icon: "home", active: true, badge: null },
  { label: "Friends", icon: "group", active: false, badge: null },
  { label: "Event", icon: "event", active: false, badge: 4, badgeColor: "bg-red-500" },
  { label: "Watch Videos", icon: "smart_display", active: false, badge: null },
  { label: "Photos", icon: "photo_library", active: false, badge: null },
  { label: "Marketplace", icon: "storefront", active: false, badge: null },
  { label: "Files", icon: "draft", active: false, badge: 7, badgeColor: "bg-primary" },
];
</script>
