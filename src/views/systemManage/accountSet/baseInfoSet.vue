<!--
 * @Author: PengYH
 * @Date: 2023-02-01
 * @Description: 基本信息设置
-->
<template>
    <div class="text-16px">{{ name }}</div>
    <el-form
        ref="ruleForm"
        :model="formData.data"
        label-position="top"
        label-width="100px"
        class="max-w-460px mt-20px"
    >
        <el-form-item
            label="姓名："
            prop="name"
            :rules="[{ required: true, message: '姓名不能为空' }]"
        >
            <el-input v-model="formData.data.name" />
        </el-form-item>
        <el-form-item label="性别：">
            <el-radio-group v-model="formData.data.sex">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="0">女</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="地址：">
            <el-input v-model="formData.data.address" />
        </el-form-item>
        <el-form-item label="其他信息：">
            <el-input v-model="formData.data.other" type="textarea" :rows="3" />
        </el-form-item>
        <el-button type="primary" @click="onSaveUser">更新基本信息</el-button>
    </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'

defineProps<{ name: string }>()
const ruleForm = ref<FormInstance>()

const formData = reactive({
    data: {
        name: '',
        sex: '',
        address: '',
        other: ''
    }
})

/** 保存用户信息 */
function onSaveUser() {
    ruleForm.value?.validate((valid) => {
        if (valid) {
            window.$message.success('保存成功')
        }
    })
}
</script>
