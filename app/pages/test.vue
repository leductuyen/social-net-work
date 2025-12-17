<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { ref } from 'vue'
import { sendRequest } from '~/services/api';


const email = ref('root@social.com')
const password = ref('root123')

const login = async () => {
  const { data, error } = await sendRequest('/auth/sign-in', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    }
  })

  if (error.value) {
    console.error('Login failed:', error.value)
    return
  }

  console.log('Login success:', data.value)


}

</script>

<template>
  <div>
    <button @click="login">Login</button>
  </div>
</template>
