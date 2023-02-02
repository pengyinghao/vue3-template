<!--
 * @Author: PengYH
 * @Date: 2023-02-01
 * @Description: 账号设置
-->
<template>
    <div class="page-container flex-row">
        <div class="flex">
            <div class="w-2/7">
                <div class="bg-white pt-20px pb-20px rounded-5px">
                    <div
                        v-for="tab in tabs"
                        :key="tab.name"
                        class="pt-26px pb-26px pr-16px pl-16px cursor-pointer hover:bg-primary-light-9 hover:text-primary"
                        :class="{ active: activeTab.componentName === tab.componentName }"
                        @click="activeTab = tab"
                    >
                        <div class="pb-10px text-size-16px">{{ tab.name }}</div>
                        <div class="text-gray">{{ tab.description }}</div>
                    </div>
                </div>
            </div>
            <div class="w-5/7 ml-20px bg-white flex-auto rounded-5px p-20px">
                <keep-alive>
                    <component :is="dynamicComponent" :name="activeTab.name"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import BaseInfoSet from './baseInfoSet.vue'
import SafeInfoSet from './safeInfoSet.vue'

interface Tab {
    /** tab名称 */
    name: string
    /** 描述 */
    description: string
    /** 组件名称 */
    componentName: string
}

const tabs: Tab[] = [
    {
        name: '基本设置',
        description: '个人账户信息设置',
        componentName: 'BaseInfoSet'
    },
    {
        name: '安全设置',
        description: '密码，登录账户等设置',
        componentName: 'SafeInfoSet'
    }
]

const components: Record<string, any> = { BaseInfoSet, SafeInfoSet }

/** 选中 tab */
const activeTab = ref<Tab>(tabs[0])
/** 动态组件 */
const dynamicComponent = computed(() => {
    return components[activeTab.value.componentName]
})
</script>
<script lang="ts">
export default { name: 'AccountSet' }
</script>

<style lang="scss" scoped>
.active {
    color: var(--el-color-primary);
    background-color: var(--el-color-primary-light-9);
    transition: all 0.5s ease-in-out;
}
</style>
