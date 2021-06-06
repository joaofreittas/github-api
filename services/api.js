import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  
});

export default api;