<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const prop = defineProps(["id"]);
const emit = defineEmits(["submited"]);
const article = reactive({
    title: "",
    intro: "",
    content: ""
});

onMounted(() => {
    axios.post('/getArticle', {params: {id: prop.id}}, {withCredentials: true})
        .then((res) => {
            article.title = res.data[0].TITLE;
            article.intro = res.data[0].INTRO;
            article.content = res.data[0].CONTENT;
        })
        .catch((err) => {
            console.log(err)
        });
}) 
function abort() {
    emit("submited");
}
function update() {
    axios.post('/updateArticle', {
        params: {
            id: prop.id,
            title: article.title,
            intro: article.intro,
            content: article.content
        }},
        {withCredentials: true}
    )
    .then((res) => {
        console.log(res);
        emit("submited");
    })
    .catch((err) => {
        console.log(err);
    })
}
</script>

<template>
  <div class="editContainer">
    <div>
        <h2>Edycja artykułu</h2>
    </div>
    <div class="formContainer">
        <form>
            <label for="title">Tytuł</label><br>
            <input v-model="article.title" class="generalSet" type="text" maxlength="255" id="titile"><br>
            <label for="intro">Wstęp</label><br>
            <textarea v-model="article.intro" class="generalSet" maxlength="300" id="intro" rows="4"></textarea><br>
            <label for="content">Treść</label><br>
            <textarea v-model="article.content" class="generalSet" maxlength="3000" id="content" rows="20"></textarea><br>
            <button @click.prevent="update" class="submitButton">Modyfikuj</button> <button @click.prevent="abort" class="abortButton">Anuluj</button>
        </form>
    </div>
  </div>
</template>

<style scoped>
.editContainer {
    padding: 35px;
    min-height: 80vh;
    /* position: relative; */
}
.generalSet {
    width: 650px;
    padding: 10px;
    box-sizing: border-box;
}
 .formContainer label {
    font-size: 0.8em;
}    
.formContainer textarea {
    resize: none;
}
.submitButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}
.abortButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: darkred;
}
</style>