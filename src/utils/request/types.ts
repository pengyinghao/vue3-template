import { AxiosRequestConfig } from 'axios'
/** * http请求扩展 */
export interface requestConfig extends AxiosRequestConfig {
    /** 是否需要处理message提示 */
    handleMessage?: boolean
}

/** http自定义状态码枚举 */
export enum ResponseEnum {
    /** 请求成功 */
    success = 1,
    /** 请求失败 */
    error = 1000,
    /** 未授权 */
    unauthorized = 401
}

export interface ResponseData {
    /** 业务响应码 */
    code: number
    /** 返回的数据 */
    data: any
    /** 错误消息 */
    message: string
    /** 返回状态 */
    success: boolean
}

/** 请求不成功各种状态的错误 */
export const ERROR_STATUS = {
    400: '400: 错误请求',
    401: '401: 未授权',
    403: '403: 服务器拒绝反问',
    404: '404: 请求资源不存在',
    405: '405: 请求方法未允许',
    408: '408: 网络请求超时',
    500: '500: 服务器内部错误',
    501: '501: 服务器未实现请求功能',
    502: '502: 错误网关',
    503: '503: 服务不可用',
    504: '504: 网关超时',
    505: '505: http版本不支持该请求'
}
