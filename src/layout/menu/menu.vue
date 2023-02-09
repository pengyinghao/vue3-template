<template>
    <div>
        <logo />
        <el-menu
            :default-active="route.meta?.id"
            :collapse="appStore.menuIsCollapse"
            class="aside-menu"
            @select="onSelect"
        >
            <template v-for="(routeItem, index) in userStore.elementMenus" :key="index">
                <el-menu-item
                    v-if="routeItem.children?.length === 0 && !routeItem.meta?.hidden"
                    :index="routeItem.meta?.id"
                >
                    <Icon :name="(routeItem.meta?.icon as string)" size="20" class="mr-5px" />
                    <template #title>{{ routeItem.meta?.title }}</template>
                </el-menu-item>
                <sub-menu v-else :route="routeItem"></sub-menu>
            </template>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@/components'
import subMenu from './sub-menu.vue'
import Logo from './logo.vue'

defineOptions({
    name: 'Menu'
})
const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()

const onSelect = (menuId: string) => {
    const menu = userStore.originMenus.find((item) => `${item.id}` === menuId)
    if (menu && menu.url) {
        router.push(menu.url)
    } else {
        router.push('/dashboard')
    }
}
</script>
<style lang="scss" scoped>
:deep(.el-menu) {
    border-right: none;
}
</style>
<style lang="scss">
.dark .aside-menu {
    .el-menu-item:hover,
    .el-sub-menu__title:hover {
        background-color: var(--dark1) !important;
    }
}
</style>
