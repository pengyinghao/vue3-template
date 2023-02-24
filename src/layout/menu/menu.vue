<template>
    <div>
        <logo />
        <el-scrollbar style="height: calc(100% - 56px)">
            <el-menu
                :default-active="route.meta?.id"
                :collapse="appStore.menuIsCollapse"
                class="aside-menu"
                @select="onSelect"
            >
                <template v-for="(routeItem, index) in userStore.elementMenus" :key="index">
                    <el-menu-item
                        v-if="routeItem.children?.length === 0 && !routeItem.meta?.hidden"
                        class="aside-sub-menu"
                        :index="routeItem.meta?.id"
                    >
                        <Icon :name="(routeItem.meta?.icon as string)" size="20" class="mr-5px" />
                        <template #title>{{ routeItem.meta?.title }}</template>
                    </el-menu-item>
                    <sub-menu v-else :route="routeItem"></sub-menu>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@/components'
import subMenu from './sub-menu.vue'
import Logo from './logo.vue'
import { useAppStore, useUserStore } from '@/store'
import { useLayout } from '@/composables/useLayout'

defineOptions({
    name: 'Menu'
})
const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
const { isMobile } = useLayout()

watchEffect(() => {
    if (isMobile.value) {
        appStore.menuIsCollapse = true
    }
})

const onSelect = (menuId: string) => {
    const menu = userStore.originMenus.find((item) => `${item.id}` === menuId)
    if (menu) {
        const { openType, url, outPageUrl } = menu
        if (openType === 0) {
            router.push(url)
        } else if (openType === 1) {
            window.open(outPageUrl, '_black')
        }
    }
}
</script>
<style lang="scss" scoped>
:deep(.el-menu) {
    border-right: none;
}
</style>
<style lang="scss">
.dark {
    .aside-sub-menu:hover,
    .el-sub-menu__title:hover {
        background-color: var(--dark1) !important;
    }
}
</style>
