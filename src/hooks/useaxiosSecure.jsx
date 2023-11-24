import axios from 'axios';


 export const instance= axios.create({
    baseURL:'http://localhost:5000',
    cred:true
})
const useaxiosSecure = () => {
   return instance
};

export default useaxiosSecure;