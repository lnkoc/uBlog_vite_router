<script setup>
import { reactive } from "vue";
import { useRouter } from 'vue-router';
import axios from "axios";

const emit = defineEmits(["submited"]);
const prop = defineProps(["isAuth"]);
const router = useRouter();

const article = reactive({
    title: "",
    intro: "",
    content: ""
})

function submit() {
    axios.post('/saveArticle', {params: article}, {withCredentials:true})
        .then((res) => {
            console.log("to jest odp " + res.status + " " + res.data);
            emit('submited');
            })
        .catch((err) => {
            console.log(err);
            if (err == 401) {
                router.replace('/login');
            }
        }); 
}
</script>

<template>
    <div v-if="prop.isAuth">
        <h2>Utwórz artykuł</h2>
        <form>
            <label for="title">Tytuł</label><br>
            <input v-model="article.title" class="generalSet" type="text" maxlength="255" id="title"><br>
            <label for="intro">Wstęp</label><br>
            <textarea v-model="article.intro" class="generalSet" maxlength="300" id="intro" rows="4"></textarea><br>
            <label for="content">Treść</label><br>
            <textarea v-model="article.content" class="generalSet" maxlength="3000" id="content" rows="20"></textarea><br>
                
            <button @click.prevent="submit" class="createButton">Wyślij</button>
        </form>
    </div>
    <div v-else>
        Create Article: Błąd 401 brak autentykacji.
    </div>
</template>

<style>
.generalSet {
    width: 660px;
    padding: 10px;
    box-sizing: border-box;
}
form label {
    font-size: 0.8em;
}    
form textarea {
    resize: none;
}
.createButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}

</style>