<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';
import DashboardFooter from '@/components/dashboard/DashboardFooter.vue';

const reload = ref(0);
const prop = defineProps(["isAuth"]);
const emit = defineEmits(["closeDashboard"]);

function chosen() {
   reload.value++;
   console.log("submited");
}
function closePanel() {
    console.log("wylogowano layout");
    emit("closeDashboard");
}
</script>

<template>
    <div v-if="prop.isAuth">
        <DashboardHeader @loadComponent="chosen" @logout="closePanel" />
        <div class="wrapper">
            <div class="content">
                <RouterView @submited="chosen" :isAuth="true" :key="reload" />
            </div>
        </div>
        <DashboardFooter />
    </div>
    <div v-else >
        TODO: Dashboard layout: 401 BRAK UPRAWNIEń
    </div>
</template>

<style scoped>
.wrapper {
    width: 720px;
    margin: auto;
    min-height: 92vh;
    background-color: rgba(255, 255, 255, 0.7);
}
.content {
    padding: 30px;
}
</style>