<script setup lang="ts">
const props = defineProps({
    id: {
        type: String
    },
    count: {
        type: Number
    }
})
const basePath = `/illustrations/${props.id}`

</script>

<template>
    <div class="carousel">
        <img :src="`${basePath}/1.jpg`" alt="" class="carousel__main">
        <img :src="`${basePath}/2.jpg`" alt="" class="carousel__preview">
    </div>
</template>

<style scoped>

</style>