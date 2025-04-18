<template>
    <DefaultLayout>
        <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">Lịch sử điểm danh</h1>
            <AttendanceChart :attendanceData="attendances" />
            <table class="table-auto w-full mt-6 border">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2">Ngày</th>
                        <th class="px-4 py-2">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="record in attendances" :key="record.id" class="text-center border-t">
                        <td class="px-4 py-2">{{ record.date }}</td>
                        <td class="px-4 py-2">{{ record.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DefaultLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAttendanceStore } from '@/stores/attendance.store'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AttendanceChart from '@/components/attendance/AttendanceChart.vue'

const attendanceStore = useAttendanceStore()
const attendances = attendanceStore.attendances

onMounted(async () => {
    await attendanceStore.fetchAttendance()
})
</script>