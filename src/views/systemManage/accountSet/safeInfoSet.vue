<!--
 * @Author: PengYH
 * @Date: 2023-02-01
 * @Description: 安全信息设置
-->
<template>
    <div class="text-16px">{{ name }}</div>
    <div class="mt-20px pb-15px border-b-gray flex justify-between">
        <div>
            <div class="text-16px">账户密码</div>
            <div class="mt-10px text-gray">绑定手机和邮箱，并设置密码，帐号更安全</div>
        </div>
        <el-link type="primary" :underline="false">修改</el-link>
    </div>
    <div class="mt-20px pb-15px border-b-gray flex justify-between">
        <div>
            <div class="text-16px">绑定手机</div>
            <div class="mt-10px text-gray">已绑定手机号：+86189****4877</div>
        </div>
        <el-link type="primary" :underline="false">修改</el-link>
    </div>
    <div class="mt-20px pb-15px border-b-gray flex justify-between">
        <div>
            <div class="text-16px">绑定邮箱</div>
            <div class="mt-10px text-gray">已绑定手机号：7292****@qq.com</div>
        </div>
        <el-link type="primary" :underline="false">修改</el-link>
    </div>
</template>
<script lang="ts" setup>
defineProps<{ name: string }>()
</script>
<script lang="ts">
export default { name: 'SafeInfoSet' }
</script>
