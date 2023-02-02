<template>
    <el-dropdown
        trigger="click"
        placement="bottom-start"
        :style="{ width: messageCounter > 0 ? '55px' : '40px' }"
    >
        <div>
            <el-badge :value="messageCounter">
                <icon name="ep:bell" size="20" class="pt-2px" />
            </el-badge>
        </div>
        <template #dropdown>
            <el-card class="w-360px">
                <template #header>
                    <div class="flex items-center justify-between">
                        <span>共有{{ messageCounter }}条消息</span>
                        <div>
                            <el-button type="primary" link>全部忽略</el-button>
                            <el-button type="primary" link>查看更多</el-button>
                        </div>
                    </div>
                </template>
                <el-scrollbar height="300px">
                    <div
                        v-for="(item, index) in messagesData"
                        :key="index"
                        class="h-50px flex-y-center plr-10px cursor-pointer light:hover:bg-[#f5f5f5] dark:hover:bg-[rgba(255,255,255,0.08)]"
                    >
                        <Icon name="ic:baseline-album" class="c-orange"></Icon>
                        <div class="ml-10px">
                            <div>{{ item.title }}</div>
                            <div class="c-[#bbb]">{{ item.createdDt }}</div>
                        </div>
                    </div>
                </el-scrollbar>
            </el-card>
        </template>
    </el-dropdown>
</template>
<script lang="ts" setup>
import { Icon } from '@/components'
defineOptions({ name: 'Message' })
const messageCounter = ref(10)
const messagesData = ref<any>([])

for (let i = 1; i <= 20; i++) {
    messagesData.value.push({
        title: `测试${i}`,
        createdDt: '2023-02-02 16:06:55'
    })
}
</script>

<style scoped>
:deep(.el-card__header) {
    padding: 10px;
}

:deep(.el-card__body) {
    padding: 0;
}
</style>
