import { AxiosError, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { ERROR_STATUS, requestConfig, ResponseData, ResponseEnum } from './types'
import router from '@/router'

/**
 * 处理 axios 返回信息
 * @param response 相应对象
 */
export const handleResponse = (response: AxiosResponse) => {
    return new Promise((resolve, reject) => {
        const { code, message, data, success } = response.data as ResponseData

        // 是否处理消息提示
        const handleMessage = (response.config as requestConfig).handleMessage ?? true

        if (code === ResponseEnum.success && success) {
            if (response.config.method !== 'get' && handleMessage) {
                ElMessage({ type: 'error', message })
            }
            resolve(data)
        } else {
            if (handleMessage) {
                ElMessage({ type: 'error', message })
            }
            reject(new Error(message))
        }
    })
}

/**
 * 处理 axios 错误请求处理
 * @param error  axios错误对象
 */
export const handleResponseError = (error: AxiosError) => {
    const { response } = error
    if (response?.status) {
        const status = response.status

        // 会话过期
        if (status === ResponseEnum.unauthorized) {
            router.push({ path: '/login' })
            useUserStore().loginOut()
        }
        ElMessage({
            type: 'error',
            message: ERROR_STATUS[status as keyof typeof ERROR_STATUS]
        })
    }
    throw new Error(error.message)
}
