<template>
    <PageContainer>
        <template #header>
            <el-form inline @submit.prevent>
                <el-form-item label="资源名称：">
                    <el-input v-model="queryParams.name" class="w-250px" @change="onQuery" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.stop="onQuery">
                        <icon name="ep:search"> 查询 </icon>
                    </el-button>
                    <el-button>
                        <icon name="ep:brush">重置</icon>
                    </el-button>
                </el-form-item>
            </el-form>
        </template>
        <c-table
            v-model:reload="reload"
            :params="queryParams"
            url="/console/data_storage_resources"
        >
            <el-table-column label="资源名称" prop="name" sortable></el-table-column>
            <el-table-column label="资源类型" prop="category"></el-table-column>
            <el-table-column label="集群类型" prop="categoryName"></el-table-column>
            <el-table-column label="所有者" prop="ownerName"></el-table-column>
            <el-table-column label="数据大小" prop="storageUsage"></el-table-column>
            <el-table-column label="创建时间" prop="createdDt"></el-table-column>
            <el-table-column label="操作">
                <template #default>
                    <el-button link type="primary" size="small">Detail</el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </c-table>
    </PageContainer>
</template>
<script lang="ts" setup>
import { CTable, PageContainer, Icon } from '@/components'
const queryParams = reactive({
    name: undefined
})
const reload = ref(false)
const onQuery = () => {
    reload.value = true
}
</script>
