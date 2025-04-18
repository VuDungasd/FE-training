
<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.store'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const form = reactive({
    fullName: '',
    email: '',
    role: 'USER',
    password: ''
})

const isEdit = route.params.id !== undefined

onMounted(async () => {
    if (isEdit) {
        const user = await userStore.getUserById(route.params.id)
        Object.assign(form, user)
    }
})

const submitForm = async () => {
    if (isEdit) {
        await userStore.updateUser(route.params.id, form)
    } else {
        await userStore.createUser(form)
    }
    router.push('/users')
}
</script>

<template>
    <div class="user-form">
        <h2>{{ isEdit ? 'Cập nhật người dùng' : 'Tạo người dùng mới' }}</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label>Họ tên:</label>
                <input v-model="form.fullName" required />
            </div>
            <div>
                <label>Email:</label>
                <input v-model="form.email" required />
            </div>
            <div>
                <label>Vai trò:</label>
                <select v-model="form.role" required>
                    <option value="ADMIN">ADMIN</option>
                    <option value="USER">USER</option>
                </select>
            </div>
            <div v-if="!isEdit">
                <label>Mật khẩu:</label>
                <input v-model="form.password" type="password" required />
            </div>
            <button type="submit">{{ isEdit ? 'Lưu thay đổi' : 'Tạo mới' }}</button>
        </form>
    </div>
</template>


<style scoped>
.user-form {
    padding: 1rem;
    max-width: 500px;
}

form div {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 4px;
}

input,
select {
    width: 100%;
    padding: 6px;
    box-sizing: border-box;
}

button {
    padding: 8px 16px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
}
</style>