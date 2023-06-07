<template>
    <PageContainer>
        <template #header>
            <el-form inline class="search-form" label-width="75px" @submit.prevent>
                <el-form-item label="姓名：">
                    <el-input v-model="queryParams.name" @change="onQuery" />
                </el-form-item>
                <el-form-item label="性别：">
                    <el-select v-model="queryParams.sex">
                        <el-option label="男" value="男" />
                        <el-option label="女" value="女" />
                    </el-select>
                </el-form-item>
                <el-form-item label="是否已婚：">
                    <el-select v-model="queryParams.married">
                        <el-option label="是" value="是" />
                        <el-option label="否" value="否" />
                    </el-select>
                </el-form-item>
                <el-form-item label="生日：">
                    <el-date-picker v-model="queryParams.birth" type="date" />
                </el-form-item>
                <el-form-item label="地址：">
                    <el-input v-model="queryParams.addr" @change="onQuery" />
                </el-form-item>
                <el-form-item label="邮箱：">
                    <el-input v-model="queryParams.email" @change="onQuery" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.stop="onQuery">
                        <icon name="ep:search"> 查询 </icon>
                    </el-button>
                    <el-button>
                        <icon name="ep:brush">重置</icon>
                    </el-button>
                    <el-button @click="onClick">全选/反选</el-button>
                </el-form-item>
            </el-form>
        </template>
        <c-table ref="refTable" v-model:reload="reload" url="/user" :params="queryParams">
            <template #table-header>
                <el-button type="primary">
                    <icon name="ep:plus">新增用户</icon>
                </el-button>
            </template>
            <el-table-column type="selection" width="55" />
            <el-table-column type="index" width="50" />
            <el-table-column label="id" prop="id" sortable show-overflow-tooltip></el-table-column>
            <el-table-column label="姓名" prop="name" sortable></el-table-column>
            <el-table-column label="年龄" prop="age"></el-table-column>
            <el-table-column label="财产" prop="asset"></el-table-column>
            <el-table-column label="是否已婚" prop="married"></el-table-column>
            <el-table-column label="生日" prop="birth" show-overflow-tooltip></el-table-column>
            <el-table-column label="地址" prop="addr" show-overflow-tooltip></el-table-column>
            <el-table-column label="邮箱" prop="email" show-overflow-tooltip></el-table-column>
            <el-table-column label="操作" type="operation">
                <el-button link type="primary" size="small">修改</el-button>
                <el-button link type="danger" size="small">删除</el-button>
            </el-table-column>
        </c-table>
    </PageContainer>
</template>
<script lang="ts" setup>
import Icon from '@/components/Icon/Icon.vue'
import PageContainer from '@/components/common/PageContainer.vue'
import CTable from '@/components/ElementExtend/Table'
defineOptions({ name: 'Workbench' })
const queryParams = reactive({
    name: undefined,
    birth: undefined,
    sex: undefined,
    married: undefined,
    addr: '',
    email: ''
})
const reload = ref(false)
const onQuery = () => {
    reload.value = true
}

const refTable = ref()
const onClick = () => {
    refTable.value.toggleAllSelection()
}
</script>
