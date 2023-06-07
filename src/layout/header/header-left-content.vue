<template>
    <div class="flex-1 flex h-full items-center">
        <div class="header-item" @click="onMenuCollapse">
            <icon v-show="appStore.menuIsCollapse" name="ep:expand" size="20" />
            <icon v-show="!appStore.menuIsCollapse" name="ep:fold" size="20" />
        </div>
        <div class="ml-10px">
            <Breadcrumb v-if="!isMobile && appStore.showBreadcrumb" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '@/components'
import { useLayout } from '@/composables/useLayout'
import { useAppStore } from '@/store'
import Breadcrumb from './components/breadcrumb.vue'
const { isMobile } = useLayout()
defineOptions({ name: 'HeaderLeftContent' })

const appStore = useAppStore()
const onMenuCollapse = () => {
    appStore.menuIsCollapse = !appStore.menuIsCollapse
}
</script>
