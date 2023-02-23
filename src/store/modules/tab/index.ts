import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'

interface TabStore {
    /** 固定的tab集合 */
    fixedTabs: string[]
    tabs: RouteRecordRaw[]
}

export const useTabStore = defineStore({
    id: 'tab',
    state: (): TabStore => {
        return {
            tabs: [],
            fixedTabs: ['/dashboard/analysis']
        }
    },
    actions: {
        /** 添加标签到集合 */
        add(tag: RouteRecordRaw, type?: string) {
            if (tag.name === 'dashboard' || this.tabs.some((r) => r.path === tag.path)) return
            if (type === 'unshift') this.tabs.unshift(tag)
            else this.tabs.push(tag)
        },
        /** 移除tab */
        remove(tab: RouteRecordRaw) {
            this.tabs = this.tabs.filter((item) => item.path !== tab.path)
        },
        /** 关闭左侧标签 */
        removeLeftTabs(currentIndex: number) {
            this.tabs = this.tabs.filter((item, index) => {
                if (!this.fixedTabs.includes(item.path)) {
                    return index >= currentIndex
                }
                return true
            })
        },
        /** 移除右侧标签 */
        removeRightTabs(currentIndex: number) {
            this.tabs = this.tabs.filter((item, index) => index <= currentIndex)
        },
        /** 移除所有标签 */
        removeAllTabs() {
            this.tabs = this.tabs.filter((item) => {
                return this.fixedTabs.includes(item.path)
            })
        }
    }
})
