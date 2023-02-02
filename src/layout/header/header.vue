<template>
    <header>
        <header-left-content />
        <header-right-content />
    </header>
</template>
<script lang="ts" setup>
import headerLeftContent from './header-left-content.vue'
import headerRightContent from './header-right-content.vue'
</script>

<style lang="scss" scoped>
:deep(.header-item) {
    @apply w-40px h-full flex items-center plr-10px cursor-pointer;
}

:deep(.header-item:hover) {
    @apply bg-#eee dark:bg-dark-1;
}
</style>
