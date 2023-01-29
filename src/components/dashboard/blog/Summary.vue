<script setup>
import { ref } from 'vue';
import CommentsLoader from '../CommentsLoader.vue';
import CommentsBin from '../CommentsBin.vue';

const prop = defineProps(["isAuth"]);
const loadSecond = ref(false);

function firstLoaded() {
    loadSecond.value = true;
}
</script>

<template>
    <div v-if="prop.isAuth">
        <h2>Podsumowanie</h2>
        <h3>Nowe komentarze do wpisów na blogu</h3>
        <CommentsLoader />
        <!-- @loaded="firstLoaded" /> -->
        <h3>Komentarze w koszu</h3>
        <CommentsBin />
        <!-- v-if="loadSecond"/> -->
    </div>
    <div v-else>
        Podsumowanie - Błąd 401: brak autentykacji 
    </div>
</template>