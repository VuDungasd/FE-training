<template>
    <DefaultLayout>
        <div class="p-4 max-w-3xl mx-auto">
            <h1 class="text-2xl font-bold mb-4">Chi tiết người dùng</h1>
            <div v-if="user" class="space-y-2">
                <p><strong>Tên:</strong> {{ user.name }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
                <p><strong>Vai trò:</strong> {{ user.role }}</p>
                <!-- thêm các trường khác nếu có -->
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user.store'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const userStore = useUserStore()
const route = useRoute()
const user = ref(null)

onMounted(async () => {
    user.value = await userStore.getUserById(route.params.id)
})
</script>