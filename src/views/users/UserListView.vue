<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user.store'
import UserTable from '@/components/users/UserTable.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const users = userStore.users

onMounted(async () => {
    await userStore.fetchUsers()
})

const editUser = (userId) => {
    router.push(`/users/${userId}/edit`)
}

const deleteUser = async (userId) => {
    if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
        await userStore.deleteUser(userId)
    }
}
</script>

<template>
    <DefaultLayout>
        <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">Danh sách người dùng</h1>
            <UserTable :users="users" @edit="editUser" @delete="deleteUser" />
        </div>
    </DefaultLayout>
</template>

