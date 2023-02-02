<!--
 * @Author: PengYH
 * @Date: 2023-02-02
 * @Description: 颜色选择容器
-->
<template>
    <div class="color-list">
        <slot></slot>
    </div>
</template>
<style scoped>
.color-list {
    grid-template-columns: repeat(8, minmax(0, 1fr));
    gap: 12px 8px;

    @apply grid;
}
</style>
