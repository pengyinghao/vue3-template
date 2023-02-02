<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>共有10条消息</span>
                <el-button class="button" text>Operation button</el-button>
            </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
</template>
<script lang="ts" setup></script>
