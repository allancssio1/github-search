import { api } from './config'

export default  {
  userName: element => api.get(element),
  repositories: element => api.get(`${element}/repos`),
  save: (element, data) => api.post(element, data)
}
