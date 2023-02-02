<template>
    <el-dropdown @command="onCommand">
        <div class="flex flex-center">
            <el-avatar
                :size="26"
                src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            />
            <span class="pl-10px">超级管理员</span>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>
                    <el-icon :size="16"><User /></el-icon>
                    <span class="ml-5px">用户中心</span>
                </el-dropdown-item>
                <el-dropdown-item command="preferenceSetting">
                    <el-icon :size="16"><Setting /></el-icon>
                    <span class="ml-5px">偏好设置</span>
                </el-dropdown-item>
                <el-dropdown-item command="loginOut">
                    <el-icon :size="16"><SwitchButton /></el-icon>
                    <span class="ml-5px">退出登录</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { User, Setting, SwitchButton } from '@element-plus/icons-vue'
defineOptions({
    name: 'Avatar'
})

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
const onCommand = (value: 'preferenceSetting' | 'loginOut') => {
    if (value === 'preferenceSetting') {
        appStore.showPreferenceSetting = true
    } else if (value === 'loginOut') {
        router.push('/login')
        userStore.loginOut()
    }
}
</script>
