<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const prop = defineProps(["articleId"]);
const emit = defineEmits(["close"]);

const title = ref("");
const createdDate = ref("");
const content = ref("");

onMounted(() => {
    axios.get('/getEntireArticle', {params: { ID: prop.articleId}})
        .then((res) => {
            let date = res.data[0].CREATED.slice(0,10).split("-").reverse().join("/");
            title.value = res.data[0].TITLE;
            createdDate.value = date;
            content.value = res.data[0].CONTENT;
        })
})
function close() {
    emit("close");
}
</script>

<template>
  <div>
    <div class="article">
        <div class="title">{{title}}</div><br>
        {{createdDate}}<br><br>
        <span v-html="content"></span><br><br>
        <button @click="close()" class="closeButton">Powrót do listy artykułów</button>
    </div>
  </div>
</template>

<style>
.article {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.75);
}
.closeButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}
.title {
    font-size: 1.2em;
    font-weight: bold;
}
</style>