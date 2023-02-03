<template>
    <PageContainer header>
        <template #title>测试</template>
        <Search :options="conditions" default="date" @search="onSearch" />
        <el-table :data="tableData" style="width: 100%" class="mt-10px">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </PageContainer>
</template>
<script lang="ts" setup>
import PageContainer from '@/components/common/PageContainer.vue'
import { SearchOptions } from '@/components/ElementExtend/Search/Control/CotrolType'
import Search from '@/components/ElementExtend/Search/Search.vue'
defineOptions({ name: 'Exception' })

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
const onSearch = (conditions: Record<string, any>) => {
    // eslint-disable-next-line no-console
    console.log(conditions)
    window.$message({
        type: 'success',
        message: JSON.stringify(conditions)
    })
}

const conditions: SearchOptions[] = [
    {
        type: 'input',
        label: '资源名称',
        field: 'name'
    },
    {
        type: 'input',
        label: '资源类型',
        field: 'type',
        value: '资源类型value'
    },
    {
        type: 'date-range',
        mode: 'daterange',
        label: '日期',
        field: 'date',
        startField: 'startDate',
        endField: 'endDate',
        value: ['2021-01-01', '2021-02-02']
    }
]
</script>

<style scoped>
:deep(.el-table__header th) {
    background-color: #e9ebf3;
}
</style>
