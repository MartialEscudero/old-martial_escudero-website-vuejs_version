<template>
  <div class="xl:mt-32 sm:mt-60">
    <div class="container mx-auto lg:text-left sm:text-center text-5xl mb-20">
      Derniers projets
    </div>
    <div class="container mx-auto grid xl:grid-cols-2 lg:grid-cols-1 gap-x-0 gap-y-24 mt-32">
      <div class="mx-auto card">
        <router-link to="/projet?id=123456789">
          <img class="img-fluid" src="../../assets/img/RFC.png">
          <div class="p-5">
            <p class="xl:text-2xl sm:text-l mt-1">Site martialescudero.com</p>
            <p class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Développement Site Web</p>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../../assets/img/RFC.png">
          <div class="p-5">
            <p class="xl:text-2xl sm:text-l mt-1">Rocketown Football Club</p>
            <p class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Graphisme</p>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../../assets/img/siteperso.png">
          <div class="p-5">
            <p class="xl:text-2xl sm:text-l mt-1">Site martialescudero.com V1</p>
            <p class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Développement Site Web</p>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../../assets/img/lim.png">
          <div class="p-5">
            <p class="xl:text-2xl sm:text-l mt-1">Lim'Raideurs</p>
            <p class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Graphisme</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="grid grid-cols-1 mt-28">
      <div class="mx-auto">
        <p class="text-center text-sm mb-4 opacity-50">et plus ...</p>
        <router-link class="btn text-white font-bold py-2 px-4 rounded-full" tag="button" to="/portfolio">Découvrir tous mes projets</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>

<style scoped>
.card {
  background: #202020;
  border-radius: 20px;
  width: 70%;
  height: 100%;
}

.card img {
  margin: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* border-radius: 20px; */
}

.btn:hover {
  background: #202020;
  color: #93C5FD;
}

.btn:focus {
  outline: unset;
}

.btn {
  transition: .5s;
  color: #202020;
  background: #93C5FD;
}

@media screen and (max-width: 640px) {
  .card {
    width: 90%;
  }
}
</style>