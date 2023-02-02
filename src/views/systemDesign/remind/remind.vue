<template>
    <div>提醒设置{{ random }}</div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'Remind' })
const random = Math.random()
</script>
