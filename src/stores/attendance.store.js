import { defineStore } from 'pinia'
import { getAttendance } from '@/services/attendance.service'

export const useAttendanceStore = defineStore('attendance', {
  state: () => ({
    attendances: [],
  }),
  actions: {
    async fetchAttendance() {
      try {
        this.attendances = await getAttendance()
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu điểm danh:', error)
      }
    },
  },
})
