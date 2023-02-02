<template>
    <el-breadcrumb v-show="appStore.showBreadcrumb" separator="/">
        <el-breadcrumb-item v-for="(item, index) in routes" :key="index" :to="{ path: item.path }">
            <div class="h-16px flex items-center">
                <Icon v-if="item.meta?.icon" :name="item.meta.icon" />
                <span class="ml-5px">{{ item.meta?.title }}</span>
            </div>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script lang="ts" setup>
import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import { Icon } from '@/components'
defineOptions({ name: 'Breadcrumb' })
const route = useRoute()
const appStore = useAppStore()

const routes = ref<RouteRecordRaw[]>([])
/** 设置面包屑数据 */
const setBreadCrumbData = (routeLocationMatched: RouteLocationNormalizedLoaded) => {
    if (routeLocationMatched.path !== '/dashboard') {
        routes.value = routeLocationMatched.matched
    } else {
        routes.value = []
    }
}
watch(route, (newValue) => setBreadCrumbData(newValue))
onMounted(() => setBreadCrumbData(route))
</script>
