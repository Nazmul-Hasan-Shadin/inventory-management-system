import axios from 'axios';
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

 const instance= axios.create({
    baseURL:'http://localhost:5001',
    // baseURL:'https://inventory-server-six.vercel.app'
   
})
const useaxiosSecure = () => {
 const {handleLogOut}=useAuth()
   instance.interceptors.request.use(function (config) {
      // Do something before request is sent
      const token= localStorage.getItem('access-token')
     
      config.headers.authorization=`Bearer ${token}`
      // console.log('final config',config);
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    })



    instance.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    }, function (error) {

      const status= error?.response?.status
      if (status === 401 || status=== 403) {
        handleLogOut()
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });








   return instance
};

export default useaxiosSecure;