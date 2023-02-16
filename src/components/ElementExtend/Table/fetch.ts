import { requestGet } from '@/utils/request'

interface TableResponse {
    list: any[]
    pageNo: number
    pageSize: number
    total: number
    totalPages: number
}

/**
 * 获取table数据
 * @param url 后台请求地址
 * @param params 请求参数
 */
export const fetchTableData = (url: string, params: Record<string, any>) => {
    return requestGet<TableResponse>(url, {
        params
    })
}
