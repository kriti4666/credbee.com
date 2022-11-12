
import axios from "axios"

//server URL
const URL = 'http://localhost:8080'

export const authenticateSignup = async (data) => {
    try {
        //server url and data for post 
        return await axios.post(`${URL}/signup`, data)
    } catch (e) {
        console.log(e.message);
    }
}

export const authenticateLogin = async (data) => {
    try {
        //server url and data for post 
        return await axios.post(`${URL}/login`, data)
    } catch (e) {
        console.log(e.message);
    }
}
