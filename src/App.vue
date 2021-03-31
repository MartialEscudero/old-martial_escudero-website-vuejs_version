<template>
  <div>
    <div id="nav-left" class="hidden">
      <div class="flex h-screen">
        <div class="m-auto text-4xl font-bold">
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'home'"><router-link to="/">Home</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'about'"><router-link to="/">À Propos</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'service'"><router-link to="/about" v-on:mouseover="select = 'about'">Services</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'portfolio'"><router-link to="/">Portfolio</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'labo'"><router-link to="/">Le Labo</router-link></a>
          </div>
          <div class="title-nav">
            <a class="btn-nav" v-on:mouseover="select = 'contact'"><router-link to="/">Contact</router-link></a>
          </div>
        </div>
      </div>
    </div>
    <div id="nav-right" class="hidden" v-if="!isMobile()">
      <div class="bg-white flex h-screen">
        <div class="bg-white m-auto text-md">
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
        <router-link to="/">
          <img class="lg:w-20 md:w-20 w-12" src="./assets/img/icon.png">
        </router-link>
      </div>
      <div class="transparent flex items-stretch flex-no-shrink flex-grow">
        <div class="transparent flex items-stretch justify-end ml-auto">
          <div class="transparent hamburger" id="hamburger">
            <span id="line1" class="bg-white line"></span>
            <span class="bg-white line"></span>
            <span id="line2" class="bg-white line"></span>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
require("./assets/js/app.js")

export default {
  data: () => ({
    select: 'home',
    text: {
      home: 'texte home',
      service: 'texte service',
      about: 'texte à propos',
      portfolio: 'texte portfolio',
      contact: 'texte contact',
      labo: 'texte labo',
    }
  }),
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    console.log()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css?family=Red+Hat+Display:900&display=swap');

body {
  font-family: 'Red Hat Display';
  background-color: #0e0e0e;
  color: white;
  /* cursor: none; */
  -ms-overflow-style: none;
  scrollbar-width: none; 
}

body::-webkit-scrollbar {
  display: none;
}

.bg-0e0e0e {
  background: #0e0e0e;
}

.transparent {
  background: transparent;
}

#nav {
  position: fixed;
  top: 0;
  height: 150px;
  width: 100%;
}

#nav img {
  margin: 50px 0 0 50px;
  user-select: none; 
  z-index: 10; 
}

#hamburger {
  margin-right: 50px;
}

.hamburger .line{
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
  z-index: 0;
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
  z-index: 99;
}

.title-nav {
  margin: 1.5rem 0 1.5rem 0;
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

@media screen and (max-width: 640px) {
  #nav-left {
    color: #0e0e0e;
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .btn-nav {
    background-image: linear-gradient(transparent calc(65% - 5px), #D1D5DB 5px);
  }
}

</style>