<script setup>
import { defineAsyncComponent } from 'vue';

const prop = defineProps(["isAuth"]);
const CommentsLoader = defineAsyncComponent(() => import('../CommentsLoader.vue'));

</script>

<template>
    <div v-if="prop.isAuth">
        <h2>Podsumowanie</h2>
        <h3>Komentarze do bloga</h3>
        <CommentsLoader />
        <!-- TODO dopisać zarządzanie komentarzami w koszu -->
    </div>
    <div v-else>
        Podsumowanie - Błąd 401: brak autentykacji 
    </div>
</template>