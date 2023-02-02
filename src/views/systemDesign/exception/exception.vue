<template>
    <div>异常信息 {{ random }}</div>
</template>
<script lang="ts" setup>
defineOptions({ name: 'Exception' })
const random = Math.random()
</script>
