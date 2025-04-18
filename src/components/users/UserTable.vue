        <script setup>
        import { useUserStore } from '@/stores/user.store'
        import { onMounted } from 'vue'
        import { useRouter } from 'vue-router'

        const userStore = useUserStore()
        const router = useRouter()

        const users = userStore.users

        onMounted(() => {
            userStore.fetchUsers()
        })

        const goToEdit = (id) => {
            router.push(`/users/${id}/edit`)
        }

        const goToCreate = () => {
            router.push('/users/create')
        }

        const deleteUser = (id) => {
            if (confirm('Bạn có chắc chắn muốn xóa?')) {
                userStore.deleteUser(id)
            }
        }
</script>
        
<template>
    <div class="user-table">
        <h2>Danh sách người dùng</h2>
        <button @click="goToCreate" class="add-btn">+ Thêm người dùng</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Vai trò</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.fullName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <button @click="goToEdit(user.id)">Sửa</button>
                        <button @click="deleteUser(user.id)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>
.user-table {
    padding: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    background-color: #f0f0f0;
}

th,
td {
    padding: 0.5rem;
    border: 1px solid #ddd;
}

.add-btn {
    margin-bottom: 1rem;
    padding: 6px 12px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
}

button {
    margin-right: 5px;
}
</style>