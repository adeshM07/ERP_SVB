import axios from 'axios';

const axiosInstance = axios.create({
  // This points to your backend. You can change this in your .env file later.
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 15000, 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosInstance;