<template>
    <PageContainer>
        <c-table :data="tableData" :pagination="false" style="width: 100%">
            <template #table-header>
                <el-button type="primary">
                    <icon name="ep:plus">新增</icon>
                </el-button>
            </template>
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </c-table>
    </PageContainer>
</template>
<script lang="ts" setup>
import { PageContainer, CTable, Icon } from '@/components'
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    }
]
</script>
