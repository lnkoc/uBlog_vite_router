<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const emit = defineEmits(["editArticle"]);
const list = ref([]);

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
  emit("editArticle", id);
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
  <div class="listContainer">
    <div>
      <div> 
        <h2>Lista artykułów</h2>
      </div>
      <div>
        <template v-for="item in list" :key="item.ID">
          <div class="item">
            <h3> {{item.TITLE}}</h3>
            <p> {{item.INTRO}}</p>
            <button @click.prevent="openArticle(item.ID)" class="editButton">Edytuj</button> <button @click.prevent="deleteArticle(item.ID)" class="deleteButton">Usuń</button>
          </div>
          <br><br>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.listContainer {
  padding: 35px;
  min-height: 83vh;
}
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