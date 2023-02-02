<template>
    <div class="flex items-center justify-between mt-5px">
        <span>{{ label }}</span>
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
defineProps<{ label: string }>()
</script>
