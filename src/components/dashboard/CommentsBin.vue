<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const comments = ref([]);

onMounted(() => {
    console.log("ładuję komentarze w koszu");
    refresh();
})

function refresh() {
    console.log("refresh bin");
    axios.post('/getBinComments', {withCredentials: true})
        .then((res) => {
            comments.value = res.data;
            if (comments.value.length > 0) {
                for (const item of comments.value) {
                    let date = item.CREATED.slice(0, 10).split("-").reverse().join("/");
                    item.CREATED = date;
                }
            }
        })
        .catch((err) => {
            console.log("Błąd podczas pobierania komentarzy z kosza " + err);
        })
}
function restoreComment(commentId) {
    axios.get('/restoreComment', {params: { commentId: commentId}}, {withCredentials:true})
        .then((res) => {
            console.log("przywrócono " + commentId);
            console.log(res.data);
            refresh();            
        })
        .catch((err) => {
            console.log(err);
        })
}
function deleteComment(commentId) {
    axios.get('/deleteComment', {params: {commentId: commentId}}, {withCredentials: true})
        .then((res) => {
            console.log(res.status + " , " + res.data);
            refresh();
        })
        .catch ((err)=> {
            console.log(err);
        })
}
</script>

<template>
    <template v-for="item in comments">
        <div class="articleComment">
            <span class="title">{{ item.TITLE }}</span><br><br>
            {{ item.INTRO }}<br><br>
            <div class="comment">
                <span class="nickname">{{ item.NICKNAME }}</span>
                <span class="date">{{ item.CREATED }}</span><br><br>
                {{ item.CONTENT }}<br><br>
            </div>
            <!-- <button @click.prevent="approve(item.ID)">Zatwierdź</button>  -->
            <button @click.prvent="restoreComment(item.ID)">Przywróć</button> <button @click.prevent="deleteComment(item.ID)">Usuń</button>
        </div><br>
    </template>
</template>

<style scoped>
.articleComment {
    background-color: rgba(255, 255, 255, 0.75);
    padding: 20px;
}
.title {
    font-weight: bold;
}
.comment {
    color: rgb(69, 127, 236);
}
.nickname {
    float: left;
}
.date {
    float: right;
}
button {
    padding: 10px;
    border: 0px;
    color: aliceblue;
    background-color: darkred;
}
</style>