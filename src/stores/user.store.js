import { defineStore } from 'pinia'
import userService from '@/services/user.service'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    currentUser: null,
  }),

  actions: {
    async fetchUsers() {
      try {
        const response = await userService.getAllUsers()
        this.users = response
      } catch (error) {
        console.error('Lỗi khi lấy danh sách người dùng:', error)
      }
    },

    async getUserById(id) {
      try {
        const user = await userService.getUserById(id)
        this.currentUser = user
        return user
      } catch (error) {
        console.error(`Lỗi khi lấy người dùng ID ${id}:`, error)
      }
    },

    async createUser(data) {
      try {
        const newUser = await userService.createUser(data)
        this.users.push(newUser)
      } catch (error) {
        console.error('Lỗi khi tạo người dùng:', error)
      }
    },

    async updateUser(id, data) {
      try {
        const updatedUser = await userService.updateUser(id, data)
        const index = this.users.findIndex((u) => u.id === id)
        if (index !== -1) this.users[index] = updatedUser
      } catch (error) {
        console.error('Lỗi khi cập nhật người dùng:', error)
      }
    },

    async deleteUser(id) {
      try {
        await userService.deleteUser(id)
        this.users = this.users.filter((u) => u.id !== id)
      } catch (error) {
        console.error('Lỗi khi xóa người dùng:', error)
      }
    },
  },
})
