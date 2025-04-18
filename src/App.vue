<script setup>
import { useRoute } from 'vue-router'
import AuthLayout from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()
</script>

<template>
  <component :is="route.meta.layout || DefaultLayout">
    <router-view />
  </component>
</template>
