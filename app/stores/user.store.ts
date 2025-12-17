import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref<string | null>(null)

  const setAccessToken = (token: string | null) => {
    accessToken.value = token
  }

  return {
    accessToken,
    setAccessToken
  }
})