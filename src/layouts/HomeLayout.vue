<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import PageHeader from '@/components/home/PageHeader.vue';
import PageFooter from '@/components/home/PageFooter.vue';
const emit = defineEmits("openDashboard");

const reload = ref(0);

function chosen() {
    reload.value++;
}

function openDashboard() {
    console.log("home layout: otwieram dashboard");
    emit("openDashboard");
}
</script>

<template>
    <PageHeader @loadComponent="chosen" />
    <div class="wrapper">
        <div class="content">
        <RouterView @authenticated="openDashboard" :key="reload" />
        </div>
    </div>
    <PageFooter />
</template>

<style scoped>
.wrapper {
    width: 720px;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.8);
    min-height: 92vh;
}
.content {
    padding: 30px;
}
</style>