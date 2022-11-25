<template>
  <div class="wrapper">
    <div class="content">
      <h2>Moje hobby</h2>
      <p>Poza informatyką lubię spojrzeć nieco w inną stronę. Gdy wychodzę na zewnątrz odruchowo spoglądam na niebo.
        Najczęściej nocą moją pierwszą uwagę przyciągają gwiazdozbiory które aktualnie są widoczne. W dalszej kolejności sprawdzam fazę w
        jakiej znajduje się Księżyc. Czasem szukam planet naszego Układu Słonecznego. Gdy światła uliczne gasną lub gdy znajduję się
        poza miastem spoglądam na Drogę Mleczną. 
      </p>
      <p>Innym razem poszukuję zjawisk, których nie można obserwować rok do roku. Niebo się zmienia. Raz są to obserwacje Marsa, kiedy był 
        bardzo blisko Ziemii i mogąc na niego spojrzeć przez uzbrojone w teleskop oko dostrzegając już tarczę zamiast malutkiego punktu,
        który można podziwiać przy użyciu tego samego sprzętu obecnie. A jeszcze innnym może to być zaćmienie Słońca, tak jak miało 
        to miejsce w 2006 roku w miejscowości Side w Turcji. Trzy minuty osiem sekund, jedne z najdłużych jakie mogłem sobie wyobrazić. 
      </p>
      <MyGallery />
      <h3>Słów kilka do pewnym doświadczeniu...</h3>
      <p><b>...które zmieniło moje spojrzenie na świat.</b> Czyli o grafice trójwymiarowej. Nie będę ukrywał - będąc dzieckiem 
        zastanawiałem się jak to jest możliwe, że zwyczajny komputer, na przykład posiadana ówcześnie Amiga 500 potrafi stworzyć 
        na ekranie obraz trójwymiarowy? W jaki sposób to się dzieje? A przede wszystkim czy i jak mogę zrobić coś podobnego samemu? 
        Na odpowiedź było mi dane poczekać. Dosyć długo poczekać. Gdy poznawałem czym jest rzut izometryczny, mogłem zrozumieć, 
        że na pewne moje pytania padła odpowiedź, choć być może nie bezpośrednia. W chwili, gdy mogłem napisać i nieco zrozumieć 
        jak działa kamera w OpenGL świat grafiki 3D stał się bardziej otwarty. 
      </p>
      <p>Dzisiaj raczej stronię od czystego OpenGL, bardziej bliższa stała się mi technologia WebGL, a w szczególności framework 
        THREE.js. Gdy zacząłem zaznajamiać się z podstawami udało mi się stworzyć ponad dwadzieścia mikroprojektów, z których wybrane 
        są dostępne na tej stronie. Już nie tylko istotne stały się dla mnie metody poruszania kamerą czy generowanie prostych obiektów, 
        co raczej tworzenie przestrzeni, które wyglądają możliwie naturalnie, o tyle, o ile pozwala czas na dany projekt i wyobraźnia.
      </p>
      <WebGLGallery />
    </div>
  </div>
</template>

<script>
import MyGallery from './MyGallery.vue'
import WebGLGallery from './WebGLGallery.vue'

export default {
  name: 'MyHobby',
  components: {
    MyGallery,
    WebGLGallery
  }
}
</script>

<style scoped>
.wrapper {
  width: 720px;
  margin: auto;
  min-height: 92vh;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.7);
}
.content {
  padding: 30px;
}
</style>