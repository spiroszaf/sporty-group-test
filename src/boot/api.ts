import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

const apiClient = axios.create({ baseURL: `${process.env.API_BASE_URL}/${process.env.API_KEY}` })

export default defineBoot(() => {

})

export { apiClient }
