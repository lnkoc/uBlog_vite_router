<template>
  <div>
    <div class="article">
        <div class="title">{{title}}</div><br>
        {{createdDate}}<br><br>
        <span v-html="content"></span><br><br>
        <button @click="close" class="closeButton">Powrót do listy artykułów</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ShowArticle",
    props: ['articleId'],
    emits: ['close'],
    data() {
        return {
            title: "",
            createdDate: "",
            intro: "",
            content: ""
        }
    },
    created() {
            axios.get('/getEntireArticle', {params: {ID: this.articleId }})
            .then((res) => {
                let date = res.data[0].CREATED.slice(0,10).split("-").reverse().join("/");
                this.title = res.data[0].TITLE;
                this.createdDate = date;
                this.content = res.data[0].CONTENT;
            })
    },
    methods: {
        close() {
            this.$emit("close");
        }
    }  
}
</script>

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