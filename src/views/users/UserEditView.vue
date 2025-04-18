<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.store'
import UserForm from '@/components/users/UserForm.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const user = ref(null)

onMounted(async () => {
    const id = route.params.id
    user.value = await userStore.getUserById(id)
})

const updateUser = async (formData) => {
    const id = route.params.id
    await userStore.updateUser(id, formData)
    router.push('/users')
}
</script>

<template>
    <DefaultLayout>
        <div class="p-4 max-w-3xl mx-auto">
            <h1 class="text-2xl font-bold mb-4">Chỉnh sửa người dùng</h1>
            <UserForm :user="user" @submit="updateUser" />
        </div>
    </DefaultLayout>
</template>

