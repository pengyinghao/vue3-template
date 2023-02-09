<template>
    <el-card>
        <template #header>
            <span class="font-bold">对象存储</span>
        </template>
        <div class="h-100px flex-y-center justify-around">
            <ObjectStorageItem
                icon-name="prime:cloud-upload"
                desc="存储总量"
                :counter="50"
                unit-value="(G)"
                :options="{ decimalPlaces: 2 }"
            />
            <ObjectStorageItem
                icon-name="material-symbols:folder"
                desc="文件数量"
                counter="200"
                unit-value="(个)"
            />
            <ObjectStorageItem
                icon-name="clarity:storage-solid"
                desc="数据资源总量"
                counter="1100"
                unit-value="(个)"
            />
        </div>
    </el-card>
</template>
<script lang="ts" setup>
import ObjectStorageItem from './ObjectStorageItem.vue'
</script>
