<template>
    <div class="wrapper">
        <div class="content">
            <h1>Słów kilka o mnie</h1>
            <p>Mam na imię Łukasz. Odkąd pamiętam intersuję się szerokorozumianą informatyką. Moje pierwsze 
                kontakty zaczynałem poznając Workbencha na Amidze 500 z 1MB pamięci i programem do 
                kopiowania dyskietek. Z czasem kiedy dostałem pierwszy komputer klasy PC zaznajomiłem się z
                linuksem. Pierwszą dystrybucją, jaką zainstalowałem był Mandrake 2. Miało to miejsce pod koniec 
                lat '90-tych ubiegłego stulecia. Od tego momentu systemy z tej rodziny zadomowiły się u mnie na 
                stałe. 
            </p>
            <p>Poza linuksem jedną z moich pasji jest programowanie. Rozpoczynałem, jak wiele osób od Pascala. Z 
                czasem nauczyłem się C i sięgnąłem po C++. Podstawy Javy również nie są mi obce. Zanim jednak poznałem Pascala, 
                w niewielkim stopniu coś pisałem w HTML. Moją pierwszą stronę umieściłem w sieci po 
                powrocie z wyprawy na zaćmienie Słońca w 2006 roku. Więcej o moich pasjach jest w zakładce hobby.
            </p>
            <p>Kilka lat temu skupiłem się na Javasript. W połączeniu z HTML i CSS powstawały zwykle mniejsze projekty
                statycznych stron www. Sięgając głębiej otworzyłem się na technologię WebGL w której przy użyciu
                frameworka THREE.js i wiedzy z zakresu matematyki przeniosłem kilka niewielkich, napisanych 
                wcześniej przeze mnie projektów w OpenGL. Więcej o tym również w zakładce hobby.
            </p>
            <h2>Czasy obecne</h2>
            <p>Na początku wakacji 2022 roku postanowiłem rozszeszyć swoje umiejętności w oparciu 
                wybrany framework i definitywnie skupić się na frontendzie. Wybór padł na VUE.js, w którym 
                pisana jest ta strona. Jest to na chwilę tworzenia tego tekstu drugi projekt z tym narzędziem. 
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>
.wrapper {
    width: 720px;
    margin: auto;
    min-height: 92vh;
    background-color: rgba(255, 255, 255, 0.7);
    overflow-y: auto;
}
.content {
    padding: 30px;
}
</style>