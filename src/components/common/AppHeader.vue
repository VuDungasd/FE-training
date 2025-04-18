<template>
    <header class="header">
        <div class="left">
            <h1>Time Management System</h1>
        </div>
        <div class="right">
            <span>{{ user.fullName }}</span>
            <img :src="user.avatar || '/assets/avatar1.png'" alt="avatar" class="avatar" />
            <button @click="logout">Logout</button>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const user = authStore.currentUser

const logout = () => {
    authStore.logout()
    router.push('/login')
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #003366;
    color: white;
    padding: 1rem;
}

.avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: 0.5rem;
}

button {
    margin-left: 1rem;
    padding: 5px 10px;
    background-color: #ff4d4f;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}
</style>