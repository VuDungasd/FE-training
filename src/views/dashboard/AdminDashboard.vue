<template>
    <div class="dashboard">
        <h1>📊 Dashboard Quản trị</h1>

        <div class="cards">
            <div class="card">
                <h2>👤 Người dùng</h2>
                <p>{{ totalUsers }}</p>
            </div>

            <div class="card">
                <h2>🕒 Chấm công</h2>
                <p>{{ totalAttendance }}</p>
            </div>

            <div class="card">
                <h2>⚠️ Hình phạt</h2>
                <p>{{ totalPenalties }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const totalUsers = ref(0)
const totalAttendance = ref(0)
const totalPenalties = ref(0)

onMounted(async () => {
    try {
        const token = localStorage.getItem('token')

        const headers = { Authorization: `Bearer ${token}` }

        const [userRes, attendanceRes, penaltyRes] = await Promise.all([
            axios.get('/api/users/count', { headers }),
            axios.get('/api/attendance/count', { headers }),
            axios.get('/api/penalties/count', { headers }),
        ])

        totalUsers.value = userRes.data.count
        totalAttendance.value = attendanceRes.data.count
        totalPenalties.value = penaltyRes.data.count
    } catch (err) {
        console.error('Lỗi khi lấy dữ liệu dashboard:', err)
    }
})
</script>

<style scoped>
.dashboard {
    padding: 1rem;
}

.cards {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.card {
    background: #f5f6fa;
    border: 1px solid #dcdde1;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    flex: 1;
    min-width: 200px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
}

.card h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #2c3e50;
}

.card p {
    font-size: 2rem;
    margin-top: 0.5rem;
    font-weight: bold;
    color: #27ae60;
}
</style>