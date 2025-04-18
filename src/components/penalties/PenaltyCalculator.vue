<template>
    <div class="p-4 border rounded bg-white shadow">
        <h2 class="text-lg font-semibold mb-4">Tính tiền phạt</h2>
        <div class="mb-4">
            <label class="block mb-1">Chọn lỗi vi phạm:</label>
            <select v-model="selectedReason" class="border rounded px-3 py-2 w-full">
                <option disabled value="">-- Chọn lỗi --</option>
                <option v-for="reason in reasons" :key="reason.reason" :value="reason">
                    {{ reason.reason }}
                </option>
            </select>
        </div>

        <div class="mb-4">
            <label class="block mb-1">Số lần vi phạm:</label>
            <input type="number" v-model.number="times" min="1" class="border rounded px-3 py-2 w-full" />
        </div>

        <div class="mb-4">
            <button @click="calculate" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Tính tiền phạt
            </button>
        </div>

        <div v-if="total !== null" class="text-green-700 font-semibold">
            Tổng tiền phạt: {{ total }} VNĐ
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const reasons = [
    { reason: 'Đi trễ', amount: 50000 },
    { reason: 'Vắng không phép', amount: 100000 },
    { reason: 'Không đeo thẻ', amount: 30000 }
]

const selectedReason = ref('')
const times = ref(1)
const total = ref(null)

const calculate = () => {
    if (selectedReason.value && times.value > 0) {
        total.value = selectedReason.value.amount * times.value
    }
}
</script>