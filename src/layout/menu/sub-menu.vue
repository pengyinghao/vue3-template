<template>
    <el-sub-menu v-if="!route.meta?.hidden" :index="(route.meta?.id as string)">
        <template #title>
            <i class="flex-center mr-5px">
                <Icon :name="(route.meta?.icon as string)"></Icon>
            </i>
            <span>{{ route.meta?.title }}</span>
        </template>
        <template v-for="sub in route.children" :key="sub.meta.id">
            <!-- 判断是否隐藏菜单 -->
            <template v-if="!sub.meta?.hidden">
                <!-- 二级菜单 -->
                <el-menu-item
                    v-if="sub.children && sub.children.length === 0"
                    :index="sub.meta?.id"
                >
                    {{ sub.meta?.title }}
                </el-menu-item>
                <!-- 三级菜单及n级菜单 -->
                <sub-menu v-else :route="sub" />
            </template>
        </template>
    </el-sub-menu>
</template>

<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router'
import { Icon } from '@/components'

defineOptions({
    name: 'SubMenu'
})
defineProps<{ route: RouteRecordRaw }>()
</script>
