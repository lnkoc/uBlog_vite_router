<template>
    <div class="wrapper">
        <div>
            <h2>Utwórz artykuł</h2>
        </div>
        <div class="formContainer">
            <form>
                <label for="title">Tytuł</label><br>
                <input v-model="title" class="generalSet" type="text" maxlength="255" id="title"><br>
                <label for="intro">Wstęp</label><br>
                <textarea v-model="intro" class="generalSet" maxlength="300" id="intro" rows="4"></textarea><br>
                <label for="content">Treść</label><br>
                <textarea v-model="content" class="generalSet" maxlength="3000" id="content" rows="20"></textarea><br>
                
                <button @click.prevent="submit" class="createButton">Wyślij</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "CreateArticle",
    emits: ["submited"],
    data() {
        return {
            title: "",
            intro: "",
            content: "",
        }
    },
    methods: {
        submit() {
            let data = {
                title: this.title,
                intro: this.intro,
                content: this.content
              }
            axios.post('/saveArticle', {
                params: data
                }, {withCredentials:true})
                .then((res) => {
                    console.log(res.data);
                    this.$emit('submited');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>

.wrapper {
    padding: 35px;
    min-height: 83vh;
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
.createButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}

</style>