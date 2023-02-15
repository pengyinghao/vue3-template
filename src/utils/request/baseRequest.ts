import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'
import { BASE_URL, TIME_OUT } from '@/core/constant'
import { requestConfig } from './types'
import { handleResponse, handleResponseError } from './handleAxiosResponse'

const baseRequest = (opts: requestConfig) => {
    return axios.create({
        baseURL: BASE_URL,
        timeout: TIME_OUT,
        method: 'GET',
        ...opts
    })
}

/** 初始化请求拦截器 */
const requestInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        config.headers = config.headers || {}
        const token = localStorage.token
        if (token) {
            config.headers.authorization = `Bearer ${token}`
        }
        return config
    })
}

/** 初始化响应拦截器 */
const responseInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.response.use(
        (resp: any) => {
            if (resp.config.responseType === 'blob') return resp
            return handleResponse(resp)
        },
        (error: AxiosError) => {
            return handleResponseError(error)
        }
    )
}

const request = (opts: requestConfig) => {
    const service = baseRequest(opts)
    requestInterceptor(service)
    responseInterceptor(service)
    return service(opts)
}

export { baseRequest, request }
