<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const prop = defineProps(["articleId"]);
const comments = ref([]);
const display = ref(false);
onMounted(() => {
    refresh();
})

function refresh() {
    axios.post('/getComments', {params: {articleId: prop.articleId}})
        .then((res) => {
            comments.value = res.data;
            if (comments.value.length > 0) {
               display.value = true;
                for (const item of comments.value) {
                    let date = item.CREATED.slice(0,10).split("-").reverse().join("/");
                    item.CREATED = date; 
                }
            }
            else {
                display.value = false;
            }
        })
        .catch((err) => {
            console.log("Błąd pobierania komentarzy: " + err);
        });
}

function deny(commentId) {
    axios.get('/denyComment', {params: {commentId: commentId}}, {withCredentials: true})
        .then((res) => {
            console.log(res);
            refresh();
        })
        .catch((err) => {
            console.log("blad przenoszenia komentarza " + err);
        })
}
</script>

<template>
    <div v-if="display">
        <h3>Komentarze</h3>
        <template v-for="item in comments">
            <div class="comment">
                <span class="name">{{ item.NICKNAME }}</span>
                <span class="date">{{ item.CREATED }} </span><br>
                {{ item.CONTENT }}<br><br>
                <button @click="deny(item.ID)">Przenieś do kosza</button>
            </div>
            <br>
        </template>
    </div>
    <div v-else>
        <h3>Brak komentarzy</h3>
    </div>
</template>

<style scoped>
.name {
    font-weight: bold;
    float: left;
}
.date {
    float: right;
}
.comment {
    padding: 10px;
    text-align: justify;
    background-color: white;
}
button {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: darkred;
}
</style>