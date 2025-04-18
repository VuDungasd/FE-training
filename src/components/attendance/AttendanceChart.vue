<template>
    <div>
        <h2 class="text-lg font-semibold mb-2">Thống kê điểm danh</h2>
        <canvas ref="chartRef"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
    attendanceData: Array
})

const chartRef = ref(null)
let chartInstance = null

const createChart = () => {
    if (chartInstance) chartInstance.destroy()

    const labels = props.attendanceData.map(item => item.date)
    const data = props.attendanceData.map(item => item.status === 'present' ? 1 : 0)

    chartInstance = new Chart(chartRef.value, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Điểm danh (1 = có mặt, 0 = vắng)',
                data,
                backgroundColor: data.map(status => status === 1 ? 'green' : 'red')
            }]
        }
    })
}

onMounted(createChart)
watch(() => props.attendanceData, createChart)
</script>