import { defineStore } from 'pinia'
import { fetchPenaltiesAPI } from '@/services/penalty.service'

export const usePenaltyStore = defineStore('penalty', {
  state: () => ({
    penalties: [],
  }),
  actions: {
    async fetchPenalties() {
      try {
        this.penalties = await fetchPenaltiesAPI()
      } catch (err) {
        console.error('Lỗi khi lấy danh sách phạt:', err)
      }
    },
  },
})
