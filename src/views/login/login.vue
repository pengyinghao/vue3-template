<template>
    <div class="login flex items-center h-100vh" :style="{ background: `url(${loginBg})` }">
        <div class="login-form bg-white w-458px h-569px rounded-12px ml-80 p-40px pt-20px">
            <h2 class="text-size-32px text-center color-#232859 font-400">登录</h2>
            <el-form class="mt-40px" label-position="top">
                <el-form-item label="用户名">
                    <el-input v-model="formData.account" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input
                        v-model="formData.password"
                        :type="passwordIsVisible ? 'text' : 'password'"
                        placeholder="请输入密码"
                    >
                        <template #suffix>
                            <el-icon
                                v-show="!passwordIsVisible"
                                @click="passwordIsVisible = !passwordIsVisible"
                            >
                                <View />
                            </el-icon>
                            <el-icon
                                v-show="passwordIsVisible"
                                @click="passwordIsVisible = !passwordIsVisible"
                            >
                                <Hide />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="flex items-center mt-28px">
                    <el-input v-model="formData.code" placeholder="请输入验证码"></el-input>
                    <div
                        class="w-150px h-32px ml-34px border border-#DCDFE6 rounded-4px cursor-pointer"
                    >
                        <img :src="code" class="w-100% h-100%" alt="" />
                    </div>
                </div>
            </el-form>
            <div class="text-right color-#999 mt-18px cursor-pointer">
                <el-link type="info" :underline="false" class="font-400">忘记密码</el-link>
            </div>
            <el-button v-loading="loading" type="primary" class="w-100% mt-40px" @click="onLogin">
                登录
            </el-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Hide, View } from '@element-plus/icons-vue'
import loginBg from '@/assets/images/login-bg.png'
import code from '@/assets/images/code.gif'
const router = useRouter()
interface FormData {
    /** 账号 */
    account: string
    /** 密码 */
    password: string
    /** 验证码 */
    code: string
}

const formData = reactive<FormData>({
    account: 'admin',
    password: 'admin',
    code: 'FFT7'
})

/** 密码是否可见 */
const passwordIsVisible = ref(false)
const loading = ref(false)

const userStore = useUserStore()
/** 登录 */
const onLogin = async () => {
    if (!formData.account) {
        return window.$message.warning('请输入账号')
    }
    if (!formData.password) {
        return window.$message.warning('请输入密码')
    }
    loading.value = true
    userStore.info.userName = 'admin'
    router.push({ path: '/dashboard' })
}
</script>
<style lang="scss" scoped>
.login {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.login-form {
    box-shadow: 0 0 30px 1px rgba(62, 72, 160, 12%);

    .icon {
        user-select: none;
    }
}

:deep(.el-form-item .el-form-item__label) {
    color: #000;
}
</style>
