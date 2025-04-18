<template>
    <div v-if="isAuthenticated">
      <slot />
    </div>
    <div v-else>
      <p>Redirecting to login...</p>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from '@/stores/auth.store'
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const authStore = useAuthStore()
  const router = useRouter()
  
  const isAuthenticated = authStore.isAuthenticated
  
  onMounted(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  })
  </script>
  