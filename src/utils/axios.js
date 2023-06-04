import axios from 'axios';

// ----------------------------------------------------------------------

// Set config defaults when creating the instance
const axiosInstance = axios.create({
  baseURL: 'https://pitstop-api.danialarrifin.com/api/',
  // baseURL:'http://localhost:3000/api/',
}); 

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;