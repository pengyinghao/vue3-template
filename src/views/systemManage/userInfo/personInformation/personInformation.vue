<template>
    <PageContainer>
        <div class="flex-y-center">
            <el-avatar :size="60" :src="info.avatar" />
            <div class="ml-25px">
                <div>用户名：{{ info.account }}</div>
                <div class="mt-10px flex-y-center">
                    <icon name="mingcute:safe-shield-2-fill"></icon>
                    <span class="ml-2px">可使用用户名加密码的方式进行登录</span>
                </div>
            </div>
        </div>
        <!-- 登录密码 -->
        <Item icon="ep:lock" title="登录密码">
            安全性高的密码可以使账号更安全，建议您定期更换密码，设置一个长度为8~12位，必须包含大小写字母、数字、特殊字符
            (~!@#$%^&*?),不能与用户名相同
        </Item>
        <!-- 手机绑定 -->
        <Item icon="ep:iphone" title="手机绑定">
            <span>你已经绑定了手机：132****1253</span>
            <span class="ml-10px">您的手机为安全手机，可以找回密码</span>
        </Item>
        <!-- 绑定邮箱 -->
        <Item icon="ic:outline-email" title="绑定邮箱">
            <span>你已经绑定了邮箱，181*******@qq.com</span>
            <span class="ml-10px">将方便您获取系统消息、重置密码等</span>
        </Item>
    </PageContainer>
</template>
<script lang="ts" setup>
import Icon from '@/components/Icon/Icon.vue'
import PageContainer from '@/components/common/PageContainer.vue'
import { useUserStore } from '@/store'
import Item from './item.vue'
defineOptions({ name: 'PersonInformation' })
const userStore = useUserStore()
const { info } = toRefs(userStore)
</script>
