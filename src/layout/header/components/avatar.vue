<template>
    <el-dropdown @command="onCommand">
        <div class="flex flex-center">
            <el-avatar :size="26" :src="info.avatar" />
            <span class="pl-10px">{{ info.userName }}</span>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="personInformation">
                    <el-icon :size="16"><User /></el-icon>
                    <span class="ml-5px">个人信息</span>
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
const { info } = toRefs(userStore)
const onCommand = (value: 'preferenceSetting' | 'loginOut' | 'personInformation') => {
    if (value === 'preferenceSetting') {
        appStore.showPreferenceSetting = true
    } else if (value === 'personInformation') {
        router.push('/personInformation')
    } else if (value === 'loginOut') {
        router.push('/login')
        userStore.loginOut()
    }
}
</script>
