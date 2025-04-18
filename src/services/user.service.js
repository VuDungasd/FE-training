import api from './api.service'

const ENDPOINT = '/users'

export default {
  getAllUsers() {
    return api.get(ENDPOINT).then((res) => res.data)
  },

  getUserById(id) {
    return api.get(`${ENDPOINT}/${id}`).then((res) => res.data)
  },

  createUser(data) {
    return api.post(ENDPOINT, data).then((res) => res.data)
  },

  updateUser(id, data) {
    return api.put(`${ENDPOINT}/${id}`, data).then((res) => res.data)
  },

  deleteUser(id) {
    return api.delete(`${ENDPOINT}/${id}`).then((res) => res.data)
  },
}
