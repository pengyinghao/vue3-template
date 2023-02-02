<!--
 * @Author: PengYH
 * @Date: 2022-03-21
 * @Description: 用户信息
-->

<template>
    <div class="page-container">
        <div class="page-container-condition">
            <el-form inline>
                <el-form-item label="姓名：">
                    <el-input v-model="whereParams.name"></el-input>
                </el-form-item>
                <el-form-item label="编号：">
                    <el-input v-model="whereParams.no"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="page-container-content">
            <div class="page-container-table">
                <el-table
                    v-loading="table.loading"
                    :data="table.data"
                    :height="table.height"
                    highlight-current-row
                    stripe
                >
                    <el-table-column label="状态" prop="state"></el-table-column>
                    <el-table-column label="编号" prop="no"></el-table-column>
                    <el-table-column label="姓名" prop="name"></el-table-column>
                    <el-table-column label="拼音码" prop="pyNo"></el-table-column>
                    <el-table-column label="登录账户" prop="account"></el-table-column>
                    <el-table-column label="邮箱" prop="email"></el-table-column>
                    <el-table-column label="手机号" prop="phone"></el-table-column>
                    <el-table-column label="地址" prop="address"></el-table-column>
                    <el-table-column label="备注" prop="remark"></el-table-column>
                    <el-table-column label="其他信息" prop="other"></el-table-column>
                </el-table>
            </div>
            <div class="page-container-pager">
                <el-pagination
                    v-model:currentPage="table.page"
                    v-model:page-size="table.pageSize"
                    :page-sizes="[100, 200, 300, 400]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="table.total"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const whereParams = reactive({
    name: '',
    no: ''
})

const table = reactive({
    page: 1,
    pageSize: 20,
    total: 0,
    height: undefined as undefined | number,
    loading: true,
    data: [] as any
})

onMounted(() => {
    nextTick(() => {
        const dom = document.querySelector('.page-container-table')
        if (dom) {
            table.height = dom.scrollHeight
        }
    })

    setTimeout(() => {
        table.data = [
            { state: '启用', no: '001', name: '张三', phone: '13212341253' },
            { state: '启用', no: '001', name: '张三', phone: '13212341253' }
        ]
        table.total = 200
        table.loading = false
    }, 1000)
})
</script>
<script lang="ts">
export default {
    name: 'User'
}
</script>
