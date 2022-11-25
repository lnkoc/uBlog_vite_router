<template>
  <div class="editContainer">
    <div>
        <h2>Edycja artykułu</h2>
    </div>
    <div class="formContainer">
        <form>
            <label for="title">Tytuł</label><br>
            <input v-model="title" class="generalSet" type="text" maxlength="255" id="titile"><br>
            <label for="intro">Wstęp</label><br>
            <textarea v-model="intro" class="generalSet" maxlength="300" id="intro" rows="4"></textarea><br>
            <label for="content">Treść</label><br>
            <textarea v-model="content" class="generalSet" maxlength="3000" id="content" rows="20"></textarea><br>
            <button @click.prevent="update" class="submitButton">Modyfikuj</button> <button @click.prevent="abort" class="abortButton">Anuluj</button>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "EditArticle",
    props: ['articleId'],
    emits: ['edited'],
    data() {
        return {
            title: "",
            intro: "",
            content: ""
        }
    },
    created() {
        console.log(this.$route.params.id);
        axios.post('/getArticle', {
            params: {
                id: this.articleId
                }
            }, {withCredentials: true})
            .then((res) => {
                this.title = res.data[0].TITLE;
                this.intro = res.data[0].INTRO;
                this.content = res.data[0].CONTENT;
            })
            .catch((err) => {
                console.log(err);
            })
    },
    methods: {
        abort() {
            this.$emit("edited");
        },
        update() {
            let data = {
                id: this.articleId,
                title: this.title,
                intro: this.intro,
                content: this.content
            }
            axios.post('/updateArticle', {
                params: data
                }, {withCredentials: true})
                .then((res) => {
                    console.log(res.data);
                    this.$emit("edited");
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }


}
</script>

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