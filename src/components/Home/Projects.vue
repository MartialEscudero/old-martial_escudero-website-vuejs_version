<template>
  <div class="xl:mt-32 sm:mt-60">
    <h1 class="container mx-auto lg:text-left sm:text-center text-5xl mb-20">
      Derniers projets
    </h1>
    <div class="container mx-auto grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-0 gap-y-24 mt-32">
      <div class="mx-auto card">
        <router-link to="/projet?id=123456789">
          <img class="img-fluid" src="../../assets/img/siteme.png">
          <div class="p-5">
            <h2 class="xl:text-2xl sm:text-l mt-1">Site martialescudero.com</h2>
            <h3 class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Développement Site Web</h3>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../../assets/img/RFC.png">
          <div class="p-5">
            <h2 class="xl:text-2xl sm:text-l mt-1">Rocketown Football Club</h2>
            <h3 class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Graphisme</h3>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../../assets/img/siteperso.png">
          <div class="p-5">
            <h2 class="xl:text-2xl sm:text-l mt-1">Site martialescudero.com V1</h2>
            <h3 class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Développement Site Web</h3>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../../assets/img/lim.png">
          <div class="p-5">
            <h2 class="xl:text-2xl sm:text-l mt-1">Lim'Raideurs</h2>
            <h3 class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Graphisme</h3>
          </div>
        </router-link>
      </div>
    </div>
    <div class="grid grid-cols-1 mt-28">
      <div class="mx-auto">
        <p class="text-center text-sm mb-4 text-gray-500">et plus ...</p>
        <router-link class="btn text-white font-bold py-2 px-4 rounded-full" tag="button" to="/portfolio">Découvrir tous mes projets</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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