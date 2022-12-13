import axios from "axios"
import { API_URL } from "./const"

const instance=axios.create({
    baseURL:API_URL,
    params:{
        api_key:process.env.REACT_APP_API,
    },
});


export default instance;

