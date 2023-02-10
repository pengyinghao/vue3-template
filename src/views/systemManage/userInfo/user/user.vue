<!--
 * @Author: PengYH
 * @Date: 2022-03-21
 * @Description: 用户信息
-->

<template>
    <PageContainer>
        <template #header>
            <el-form inline>
                <el-form-item label="用户姓名：">
                    <el-input class="w-250px"></el-input>
                </el-form-item>
                <el-form-item label="用户编号：">
                    <el-input class="w-250px"></el-input>
                </el-form-item>
                <el-form-item label="用户状态：">
                    <el-select class="w-250px"></el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">
                        <icon name="ep:search"> 查询 </icon>
                    </el-button>
                    <el-button>
                        <icon name="ep:brush">重置</icon>
                    </el-button>
                </el-form-item>
            </el-form>
        </template>
        <c-table :data="tableData" style="width: 100%">
            <template #table-header>
                <el-button type="primary">
                    <icon name="ep:plus">新增用户</icon>
                </el-button>
            </template>
            <el-table-column label="状态" prop="status" width="80"></el-table-column>
            <el-table-column label="编号" prop="no" width="140"></el-table-column>
            <el-table-column label="姓名" prop="name" width="100"></el-table-column>
            <el-table-column label="拼音码" prop="pyNo" width="80"></el-table-column>
            <el-table-column label="登录账户" prop="account"></el-table-column>
            <el-table-column label="邮箱" prop="email" width="160"></el-table-column>
            <el-table-column label="手机号" prop="phone" width="110"></el-table-column>
            <el-table-column label="地址" prop="address" width="200"></el-table-column>
            <el-table-column label="备注" prop="remark"></el-table-column>
            <el-table-column label="其他信息" prop="other"></el-table-column>
            <el-table-column label="操作">
                <template #default>
                    <el-button link type="primary" size="small">编辑</el-button>
                    <el-button link type="primary" size="small">复制</el-button>
                    <el-button link type="primary" size="small">删除</el-button>
                </template>
            </el-table-column>
        </c-table>
    </PageContainer>
</template>
<script lang="ts" setup>
import { PageContainer, CTable, Icon } from '@/components'
const tableData = ref<any>([])
for (let i = 0; i < 15; i++) {
    tableData.value.push({
        status: `${i % 3 === 0 ? '禁用' : '启用'}`,
        no: `sp20230208${i.toString().padStart(3, '0')}`,
        name: `姓名${i + 1}`,
        pyNo: `xm${i + 1}`,
        account: `account${i}`,
        email: '729220650@qq.com',
        phone: '13212341253',
        address: '重庆市九龙坡区石桥铺街道',
        remark: '',
        other: ''
    })
}
</script>
