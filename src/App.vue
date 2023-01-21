<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import HomeLayout from '@/layouts/HomeLayout.vue';

const DashboardLayout = defineAsyncComponent(() => import('@/layouts/DashboardLayout.vue'));
const router = useRouter();
const showDashboard = ref(false);


function switchToDashboard() {
  showDashboard.value = true;
  console.log("App: otwieram dashboard");
  router.replace("/admin/dashboard");
}
function switchToApp() {
  showDashboard.value = false;
  console.log("wylogowano do app");
  router.replace("/");
}
</script>

<template>
  <HomeLayout v-if=!showDashboard @openDashboard="switchToDashboard" />
  <DashboardLayout v-else :isAuth="true" @closeDashboard="switchToApp" />
</template>

<style scoped>

</style>
