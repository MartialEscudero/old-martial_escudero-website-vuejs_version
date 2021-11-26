<template>
  <div data-aos="fade" id="top">
    <div id="nav-left" class="hidden">
      <div class="flex h-screen">
        <div class="m-auto text-4xl font-bold">
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'home'"><router-link to="/">Home</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'about'"><router-link to="/cv">À Propos</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'portfolio'"><router-link to="/portfolio">Portfolio</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'labo'"><router-link to="/labo">Le Labo</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'contact'"><router-link to="/contact">Contact</router-link></a>
          </div>
        </div>
      </div>
    </div>
    <div id="nav-right" class="hidden">
      <div class="flex h-screen">
        <div class="m-auto text-md">
          <p v-if="select == 'base'">Coucou.<br>Passez votre souris sur les différentes catégories du menu.</p>
          <p v-if="select == 'home'">{{text.home}}</p>
          <p v-if="select == 'service'">{{text.service}}</p>
          <p v-if="select == 'about'">{{text.about}}</p>
          <p v-if="select == 'portfolio'">{{text.portfolio}}</p>
          <p v-if="select == 'contact'">{{text.contact}}</p>
          <p v-if="select == 'labo'">{{text.labo}}</p>
        </div>
      </div>
    </div>
    <div id="nav" class="transparent">
      <div class="transparent flex flex-no-shrink items-stretch h-12">
        <a class="cursor-pointer" v-if="getUrl()" v-scroll-to="{el: '#top',duration: 1000}">
          <img class="logo lg:w-20 md:w-20 sm:w-14" src="./assets/img/icon.png">
        </a>
        <a v-else href="/">
          <img class="logo lg:w-20 md:w-20 sm:w-14" src="./assets/img/icon.png">
        </a>
      </div>
      <div class="transparent flex items-stretch flex-no-shrink flex-grow">
        <div class="transparent flex items-stretch justify-end ml-auto">
          <div class="transparent hamburger" id="hamburger">
            <span id="line1" class="line line-white"></span>
            <span class="bg-white line"></span>
            <span id="line2" class="line line-white"></span>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <div v-if="getUrl()" id="footer-scroll" v-scroll-to="{el: '#about',offset: -50,duration: 800}">
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </div>
    <footer v-if="getUrl()" class="mb-4">
      <div class="text-center text-xs">
        &copy; 2020 - {{date}} Martial Escudero. Tous droits réservés.
      </div>
    </footer>
  </div>
</template>

<script>
require("./assets/js/app.js")

import { mapActions } from 'vuex'

export default {
  metaInfo () {
    return {
      title : 'Martial Escudero | Étudiant - Développeur Web',
    }
  },
  data: () => ({
    date: null,
    select: 'base',
    text: {
      home: "Home, ici ça veut dire accueil en anglais. Du coup, c'est la page d'accueil.",
      about: "Si vous avez des questions sur mon profil ou mon parcours, vous trouverez ici toutes les réponses.",
      portfolio: "Sur mon Portfolio, vous retrouvez différents projets que j'ai pu réaliser dans le domaine du Développement Web, du Graphisme ou encore de l'Audiovisuel.",
      contact: "Si vous avez une question, un projet ou autre, vous pouvez compléter ce formulaire de contact (allez le voir il est tout beau) ou contactez moi à l'adresse suivante : contact@martialescudero.com",
      labo: "Le Labo est un espace de mon site où on y retrouve différents mini-projets de développement web et web design que je vous invite à découvrir.",
    }
  }),
  methods: {
    getDate() {
      return new Date().getFullYear()
    },
    getUrl(){
      return "Home" == this.$route.name
    },
    ...mapActions(['getProjets']),
  },
  mounted() {
    this.getProjets()
    this.date = this.getDate()
    window.scroll(0, 0)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css?family=Red+Hat+Display:900&display=swap');

@import './assets/css/style.css';

.hiddenMouse {
  opacity: 0;
  transition: height 0ms 400ms, opacity 400ms 0ms;
}

.activeMouse {
  opacity: 1;
  transition: height 0ms 0ms, opacity 600ms 0ms;
}

* {
  font-family: 'Poppins';
}

*::selection{
  background-color: #93C5FD;
  color: white;
}

body {
  background-color: #0e0e0e;
  color: white;
  /* cursor: none; */
  -ms-overflow-style: none;
  scrollbar-width: none; 
}

body::-webkit-scrollbar {
  display: none;
}

.transparent {
  background: transparent;
}

#nav {
  position: fixed;
  top: 0;
  height: 140px;
  width: 100%;
  z-index: 30;
}

#nav img {
  margin: 45px 0 0 50px;
  user-select: none; 
}

#hamburger {
  margin-right: 50px;
}

.line-black {
  background: #0e0e0e;
}

.line-white {
  background: white;
}

.hamburger .line {
  width: 40px;
  height: 2px;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger:hover{
  cursor: pointer;
}

#hamburger.is-active{
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transition-delay: 0.6s;
  -o-transition-delay: 0.6s;
  transition-delay: 0.6s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#hamburger.is-active .line:nth-child(2){
  width: 0px;
}

#hamburger.is-active .line:nth-child(1),
#hamburger.is-active .line:nth-child(3){
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

#hamburger.is-active .line:nth-child(1){
  -webkit-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
  transform: translateY(10px);
}

#hamburger.is-active .line:nth-child(3){
  -webkit-transform: translateY(-10px) rotate(90deg);
  -ms-transform: translateY(-10px) rotate(90deg);
  -o-transform: translateY(-10px) rotate(90deg);
  transform: translateY(-10px) rotate(90deg);
}

#nav-right {
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  color: #0e0e0e;
  width: 50%;
  height: 100%;
  z-index: 10;
}

#nav-right p {
  background: white;
  color: #0e0e0e;
  text-align: justify;
  margin: 0 10rem 0 10rem;
}

#nav-left {
  position: fixed;
  top: 0;
  background: #0e0e0e;
  width: 50%;
  height: 100%;
  z-index: 10;
}

.title-nav {
  margin: 2rem 0 2rem 0;
  max-width: 75vw;
}

.btn-nav {
  background-image: linear-gradient(transparent calc(65% - 5px), #525252 5px);
  background-size: 0;
  background-repeat: no-repeat;
  display: inline;
  transition: 0.5s ease;
}

.title-nav:hover .btn-nav {
  background-size: 100%;
}

#footer-scroll {
  position: absolute;
  bottom: 3rem;
  right: 50%;
}

.scroll-downs {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  
  width :34px;
  height: 55px;
}
.mousey {
  cursor: pointer;
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid white;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: white;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
}

@media screen and (max-width: 640px) {
  
  #nav-left {
    color: #0e0e0e;
    background-color: white;
    width: 100%;
    height: 100%;
  }

  #nav-right {
    visibility: hidden;
  }

  .btn-nav {
    background-image: linear-gradient(transparent calc(65% - 5px), #D1D5DB 5px);
  }

  #footer-scroll {
    display: none;
  }

  #nav img {
    margin: 30px 0 0 30px;
  }

  #hamburger {
    margin-right: 30px;
    margin-top: -20px;
  }

}
</style>