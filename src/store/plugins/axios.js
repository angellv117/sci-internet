import axios from 'axios'
axios.defaults.baseURL = ''
axios.defaults.baseURL = process.env.VUE_APP_API_URL


export default axios