<template>
    <DefaultLayout>
        <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">Công cụ tính phạt</h1>
            <PenaltyCalculator />
        </div>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PenaltyCalculator from '@/components/penalties/PenaltyCalculator.vue'
</script>