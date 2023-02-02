<template>
    <teleport to="body">
        <div
            v-show="contextMenuVisible"
            :style="{
                ...contextMenuStyle,
                backgroundColor: 'var(--el-color-white)'
            }"
            class="w-140px fixed z-1000 text-gray context-menu"
        >
            <template v-for="item in contentMenuOptions" :key="item.icon">
                <div v-show="!item.hide" class="menu-item" @click="onContextClick(item.operation)">
                    <Icon :name="item.icon" />
                    <span class="pl-8px">{{ item.label }}</span>
                </div>
            </template>
        </div>
    </teleport>
</template>
<script lang="ts" setup>
import { CSSProperties } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { Icon } from '@/components'
defineOptions({
    name: 'ContextMenu'
})
type Operation = 'refresh' | 'closeCurr' | 'closeLeft' | 'closeRight' | 'closeAll'
/** 右键菜单选项 */
interface ContentMenuOptions {
    /** 图标 */
    icon: string
    /** 文本 */
    label: string
    /** 是否隐藏 */
    hide?: boolean
    /** 操作 */
    operation: Operation
}
const appStore = useAppStore()
const tabStore = useTabStore()
const router = useRouter()
const { tabs } = toRefs(tabStore)
/** 选中tab */
const selectTab = ref<RouteRecordRaw>()
/** 右键菜单是否显示 */
const contextMenuVisible = ref(false)
/** 菜单宽度 */
const menuWidth = computed(() =>
    appStore.menuIsCollapse ? appStore.menuCollapseWidth : appStore.menuWidth
)

/** 右键菜单样式 */
const contextMenuStyle = computed<CSSProperties>(() => {
    return {
        left: '10px',
        top: '10px'
    }
})

/** 打开tab右键菜单  */
const openContextMenu = (
    tab: RouteRecordRaw,
    tabViewContainer: HTMLElement | undefined,
    event: MouseEvent
) => {
    const offsetLeft = tabViewContainer?.getBoundingClientRect().left || 0 // 相对于视口的位置距离左侧像素
    const offsetWidth = tabViewContainer?.offsetWidth ?? 0 // tab container的宽度
    const maxLeft = offsetWidth - 105 // 最大偏移量

    const left = menuWidth.value + event.clientX - offsetLeft + 15 // 菜单左移距离
    if (left > maxLeft) contextMenuStyle.value.left = `${maxLeft}px`
    else contextMenuStyle.value.left = `${left}px`

    contextMenuStyle.value.top = `${event.clientY + 5}px`
    contextMenuVisible.value = true
    selectTab.value = tab
}

/** 右键菜单选项 */
const contentMenuOptions = computed<ContentMenuOptions[]>(() => {
    const hide = tabStore.fixedTabs.includes(selectTab.value?.path as string)
    return [
        { icon: 'ep:refresh', label: '刷新当前', operation: 'refresh' },
        {
            icon: 'ep:close',
            label: '关闭当前',
            hide,
            operation: 'closeCurr'
        },
        {
            icon: 'mdi:arrow-expand-left',
            label: '关闭左侧',
            hide,
            operation: 'closeLeft'
        },
        { icon: 'mdi:arrow-expand-right', label: '关闭右侧', operation: 'closeRight' },
        { icon: 'mdi:arrow-expand-horizontal', label: '关闭全部', operation: 'closeAll' }
    ]
})

/** 隐藏右键菜单 */
const hideContextMenu = () => {
    contextMenuVisible.value = false
}

const tabCurrentIndex = computed(() => {
    return (selectTab.value && tabs.value.indexOf(selectTab.value)) || -1
})

/** 关闭左侧标签 */
const closeLeftTab = () => {
    if (tabCurrentIndex.value > tabStore.fixedTabs.length) {
        tabStore.removeLeftTabs(tabCurrentIndex.value)
    } else {
        window.$message.warning(`左侧没有标签`)
    }
}

/** 关闭右侧标签 */
const closeRightTab = () => {
    if (tabCurrentIndex.value < tabs.value.length - 1) {
        tabStore.removeRightTabs(tabCurrentIndex.value)
    } else {
        window.$message.warning('右侧没有标签')
    }
}

/** 关闭所有标签 */
const closeTabAll = () => {
    tabStore.removeAllTabs()
    router.push(tabs.value[0].path)
}

/** 关闭当前标签 */
const closeTabCurr = () => {
    tabStore.remove(selectTab.value as RouteRecordRaw)
}

/** 刷新tab */
const refreshTab = () => {
    router.replace({
        path: `/redirect${selectTab.value?.path}`
    })
}

const contextOperation: Record<Operation, () => void> = {
    closeLeft: closeLeftTab,
    closeRight: closeRightTab,
    closeAll: closeTabAll,
    closeCurr: closeTabCurr,
    refresh: refreshTab
}

/** 右键菜单单击事件 */
const onContextClick = (operation: Operation) => {
    contextOperation[operation]()
    if (operation !== 'refresh') {
        const { path } = tabs.value[tabs.value.length - 1]
        router.push(path)
    }
    hideContextMenu()
}

defineExpose({
    openContextMenu,
    hideContextMenu
})
</script>
<style lang="scss" scoped>
.context-menu {
    border-right: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 15%);

    @apply rounded-4px z-99999;

    .menu-item {
        transition: backgroundcolor var(--el-transition-duration);
        transition-timing-function: var(--el-transition-function-ease-in-out-bezier);

        @apply flex items-center  plr-15px h-35px cursor-pointer dark:bg-dark-3 dark:c-white;

        &.disabled {
            cursor: not-allowed;
        }

        &:hover {
            background-color: var(--el-color-primary-light-9);

            @apply dark:bg-dark-1;
        }
    }
}
</style>
