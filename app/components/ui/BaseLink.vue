<template>
  <a
    :href="href"
    :class="[baseClass, variantClass]"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  href?: string
  variant?: 'normal' | 'bold'
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  variant: 'normal',
})

const baseClass = 'text-primary hover:underline'

const variantClass = computed(() =>
  props.variant === 'bold' ? 'font-bold' : 'font-medium'
)
</script>
