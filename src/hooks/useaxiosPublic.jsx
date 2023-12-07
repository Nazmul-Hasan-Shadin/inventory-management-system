import axios from "axios";

export const axioPublic = axios.create({
    baseURL:'http://localhost:5000',

    // baseURL:'https://inventory-server-six.vercel.app'

})

const useAxiosPublic=()=>{

    
    return axioPublic
}

export default  useAxiosPublic