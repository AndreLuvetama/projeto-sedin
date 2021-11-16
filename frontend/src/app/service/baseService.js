import axios from 'axios'

const baseService = axios.create({
    baseURL: 'http://localhost:8080',
     
    headers: {
        "Content-type": "application/json"
      }
})

export default baseService