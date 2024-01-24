import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "12e088059dc144d9bc8086eff6a4c26e",
    language: "pt-BR",
    page: 1,
  },
})

export default api
