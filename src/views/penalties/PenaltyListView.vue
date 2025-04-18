<template>
    <DefaultLayout>
        <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">Danh sách tiền phạt</h1>
            <table class="table-auto w-full border">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2">Người bị phạt</th>
                        <th class="px-4 py-2">Lý do</th>
                        <th class="px-4 py-2">Số tiền</th>
                        <th class="px-4 py-2">Ngày</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="penalty in penalties" :key="penalty.id" class="text-center border-t">
                        <td class="px-4 py-2">{{ penalty.user }}</td>
                        <td class="px-4 py-2">{{ penalty.reason }}</td>
                        <td class="px-4 py-2">{{ penalty.amount }} VNĐ</td>
                        <td class="px-4 py-2">{{ penalty.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DefaultLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePenaltyStore } from '@/stores/penalty.store'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const store = usePenaltyStore()
const penalties = store.penalties

onMounted(() => {
    store.fetchPenalties()
})
</script>