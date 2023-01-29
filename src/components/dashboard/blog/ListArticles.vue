<script setup>
import { useRouter } from 'vue-router';
import {ref, onMounted} from 'vue';
import axios from 'axios';

const router = useRouter();
const editArticle = ref(false);
const list = ref([]);
const prop = defineProps(["isAuth"]);

onMounted(() => {
  refresh();
})

function refresh() {
  axios.get("/getList", {withCredentials: true})
    .then((res) => {
      list.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    })
}

function openArticle(id) {
    editArticle.value = true;
    router.replace({path: '/admin/edit/' + id, params: {id}});
}

function deleteArticle(deleteId) {
  axios.post('/deleteArticle', {params: {id: deleteId}}, {withCredentials: true})
    .catch((err) => {
      console.log(err);
    });
  refresh();
}
</script>

<template>
  <div v-if="prop.isAuth">
    <div v-if="!editArticle">
        <h2>Lista artykułów</h2>
        <template v-for="item in list" :key="item.ID">
          <div class="item">
            <h3> {{item.TITLE}}</h3>
            <p> {{item.INTRO}}</p>
            <button @click.prevent="openArticle(item.ID)" class="editButton">Edytuj</button> <button @click.prevent="deleteArticle(item.ID)" class="deleteButton">Usuń</button>
          </div>
          <br><br>
        </template>
    </div>
    <RouterView v-else @submited="refresh" />
  </div>
  <div v-else>
    Lista artykułów - 401 Brak autentykacji.
  </div>
</template>

<style scoped>
.item {
  padding: 20px;
  background-color: aliceblue;
}
.editButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}
.deleteButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: darkred;
}
</style>