<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const isAuthenticated = ref(false);
const router = useRouter();

function openDashboard() {
  isAuthenticated.value = true; 
  router.replace("/dashboard");
}

function closeDashboard() {
  isAuthenticated.value = false;
  router.replace('/');
}
</script>

<template>
  <header v-if="!isAuthenticated">
    <div class="wrapper">
      <div class="logo">
        <div class="column">
          <RouterLink to="/login">
            <img alt="Mylogo" src="./assets/ln.png">
          </RouterLink>
        </div>
        <div class="column">
          <img alt="MyType" src="./assets/koc.png">
        </div>
      </div>
      <nav>
        <RouterLink to="/"><div>uBlog</div></RouterLink>
        <RouterLink to="/about"><div>O mnie</div></RouterLink>
        <RouterLink to="/hobby"><div>Hobby</div></RouterLink>
        <RouterLink to="/projects"><div>Projekty</div></RouterLink>
        <RouterLink to="/contact"><div>Kontakt</div></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView @authenticated='openDashboard()' @logout='closeDashboard()' />

  <footer>
    <div>© lnkoc 2022
    </div>
  </footer>
</template>

<style scoped>
header {
  top: 0px;
  position: sticky;
  width: 100%;
  background-color: cornflowerblue;
  z-index: 1;
}
footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    text-align: right;
    padding-top: 4px;
    background-color: cornflowerblue;
    color: aliceblue;
}
.wrapper {
  width: 720px;
  height: 60px;
  margin: auto;
  overflow: hidden;
  background-color: rgb(69, 127, 236);
}
.logo {
    float:left;
    width: 180px;
}
.column {
    float: left;
}
nav {
  height: 60px;
  float: right;
  text-align: right;
  overflow: hidden;
}
nav div {
    float: left;
    padding: 22px 12px 21px 12px;
    margin: auto;
    background-color: rgb(69, 127, 236);
    color: aliceblue;
    border: 0px;
    border-left: 1px solid cornflowerblue;
    transition-duration: 0.4s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
nav div:hover {
    background-color: aliceblue;
    color: rgb(69, 127, 236);
}

</style>
