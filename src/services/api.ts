import axios from 'axios'

const api = axios.create({
    baseURL: 'https://asleeplevi-happy.herokuapp.com'
})

export default api