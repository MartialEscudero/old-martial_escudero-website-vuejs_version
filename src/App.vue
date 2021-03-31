<template>
  <div>
    <div id="nav" class="transparent">
      <div class="transparent flex flex-no-shrink items-stretch h-12">
        <router-link to="/">
          <img class="lg:w-20 md:w-20 w-12" src="./assets/img/icon.png">
        </router-link>
      </div>
      <div class="transparent flex items-stretch flex-no-shrink flex-grow">
        <div class="transparent flex items-stretch justify-end ml-auto">
          <div class="transparent hamburger" id="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script src="./assets/js/app.js" ></script>

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
}

#hamburger {
  margin-right: 50px;
}

.hamburger .line{
  width: 40px;
  height: 2px;
  background-color: #ecf0f1;
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
</style>