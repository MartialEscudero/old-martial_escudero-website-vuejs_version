<template>
  <div>
    <div id="nav-left" class="hidden">
      <div id="btn-nav">
        <div class="flex h-screen">
          <div class="m-auto text-4xl">
            <div class="title-nav">
              <router-link to="/">Home</router-link>
            </div>
            <div class="title-nav">
              <router-link to="/about">Services</router-link>
            </div>
            <div class="title-nav">
              <router-link to="/">À Propos</router-link>
            </div>
            <div class="title-nav">
              <router-link to="/">Portfolio</router-link>
            </div>
            <div class="title-nav">
              <router-link to="/">Contact</router-link>
            </div>
            <div class="title-nav">
              <router-link to="/">Le Labo</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="nav-right" class="hidden">
      <div class="bg-white flex h-screen">
        <div class="bg-white m-auto text-md">
          <p>{{text.bio}}</p>
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
    text: {
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  background-color: #0e0e0e;
  color: white;
  /* cursor: none; */
  -ms-overflow-style: none;
  scrollbar-width: none; 
}

*::-webkit-scrollbar {
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
  margin: 1rem 0 1rem 0;
}

.title-nav:hover {
  transition: .5s;
  color: gray;
}
</style>