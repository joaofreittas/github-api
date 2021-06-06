import api from './api'

const getUser = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}`)
    return data
  }catch(error) {
    if(error.status === 404) return null
  } 
}

export default {
  getUser
}