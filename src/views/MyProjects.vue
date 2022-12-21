<script setup>

</script>

<template>
  <div class="wrapper">
    <div class="content">
        <h2>Projekty</h2>
        <ul>
            <li>Niniejsza strona jest drugim projektem napisanym przeze mnie w VUE. Tym razem używałem rówież Options API, aby docelowo przejść 
              na Composition API. Backend zapewnia Node.js w połączeniu z bazą MariaDB. Można tutaj znaleźć również kilka przykładowych projektów
              napisanych we frameworku THREE.js. 
            </li><br>
            <li>Pierwszym projektem przy którym zapoznawałem się z VUE jest 'local' - prosty system rejestracji wydarzeń i uczestników na 
              powstałe wydarzenia. Projekt ten na chwilę pisania tego tekstu jest w wersji 0.0.9. Działa w przeglądarce Chrome, nie jest 
              jeszcze dopasowany do innych przeglądarek oraz nie jest ukończone jego zarządanie od strony bazy danych. Służył głownie do
              zapoznania się z językiem PHP i komunikacją z bazą danych MariaDB. A od frontendu z możliwościami VUE przy pierwszym podejściu,
              gdzie korzystałem z Options API.
            </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
    width: 720px;
    margin: auto;
    min-height: 92vh;
    background-color: rgba(255, 255, 255, 0.7);
}
.content {
    padding: 30px;
}
</style>