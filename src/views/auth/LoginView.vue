<template>
    <div class="login-page">
        <form @submit.prevent="handleLogin" class="login-form">
            <h2>🔐 Đăng nhập</h2>
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="email" required />
            </div>

            <div class="form-group">
                <label>Mật khẩu</label>
                <input type="password" v-model="password" required />
            </div>

            <button type="submit" :disabled="loading">Đăng nhập</button>

            <p class="error" v-if="error">{{ error }}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const router = useRouter()

async function handleLogin() {
    loading.value = true
    error.value = ''
    try {
        const response = await axios.post('/api/auth/login', {
            email: email.value,
            password: password.value
        })

        const token = response.data.token
        localStorage.setItem('token', token)
        router.push('/')
    } catch (error) {
        error.value = 'Tài khoản hoặc mật khẩu không đúng!'
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #ecf0f1;
}

.login-form {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.login-form h2 {
    margin-bottom: 1rem;
}

.form-group {
    margin-bottom: 1rem;
}

input {
    width: 100%;
    padding: 0.5rem;
}

button {
    width: 100%;
    padding: 0.7rem;
    background-color: #3498db;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
}

.error {
    color: red;
    margin-top: 1rem;
    text-align: center;
}
</style>