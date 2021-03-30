<template>
  <div>
    <div id="nav">
      <router-link to="/">
        <img src="./assets/img/icon.png">
      </router-link>
        <div class="hamburger" id="hamburger-6">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  background-color: #0e0e0e;
  color: white;
}

#nav {
  position: fixed;
  top: 0;
  height: 150px;
  width: 100%;
  background: transparent;
}

#nav img {
  margin: 50px 0 0 50px;
  width: 80px;
  user-select: none;  
}
.hamburger .line{
  width: 50px;
  height: 5px;
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

#hamburger-6.is-active{
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

#hamburger-6.is-active .line:nth-child(2){
  width: 0px;
}

#hamburger-6.is-active .line:nth-child(1),
#hamburger-6.is-active .line:nth-child(3){
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

#hamburger-6.is-active .line:nth-child(1){
  -webkit-transform: translateY(13px);
  -ms-transform: translateY(13px);
  -o-transform: translateY(13px);
  transform: translateY(13px);
}

#hamburger-6.is-active .line:nth-child(3){
  -webkit-transform: translateY(-13px) rotate(90deg);
  -ms-transform: translateY(-13px) rotate(90deg);
  -o-transform: translateY(-13px) rotate(90deg);
  transform: translateY(-13px) rotate(90deg);
}
</style>

<script src="./assets/js/app.js" ></script>