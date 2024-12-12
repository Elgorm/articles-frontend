import axios from 'axios'


const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 5000,
});

export const useGet = async (url: string, params?: object) => {
  return await instance.get(url, { params })
}

export const usePost = async (url: string, data?: object) => {
  return await instance.post(url, data)
}

export const usePut = async (url: string, data?: object) => {
  return await instance.put(url, data)
}

export const useDelete = async (url: string) => {
  return await instance.delete(url)
}
