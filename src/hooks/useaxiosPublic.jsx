import axios from "axios";

export const axioPublic = axios.create({
    baseURL:'http://localhost:5001',

    // baseURL:'https://inventory-server-six.vercel.app'

})

const useAxiosPublic=()=>{

    
    return axioPublic
}

export default  useAxiosPublic