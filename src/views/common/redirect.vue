<template>
    <div></div>
</template>
<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const { params, query } = route
const { path } = params

onMounted(() => {
    router.push({
        path: `/${path}`,
        query
    })
})
</script>
