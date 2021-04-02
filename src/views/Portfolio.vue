<template>
  <div class="xl:mt-44 sm:mt-28 h-full sm:mb-7">
    <div class="container mx-auto lg:text-left sm:text-center text-5xl mb-2">
      Portfolio
    </div>
    <div class="container mx-auto grid xl:grid-cols-3 lg:grid-cols-1 gap-x-0 gap-y-20 mt-32 xl:mb-10">
      <div class="mx-auto card">
        <router-link to="/projet?id=123456789">
          <img class="img-fluid" src="../assets/img/siteme.png">
          <div class="p-5">
            <p class="xl:text-2xl sm:text-l mt-1">Site martialescudero.com</p>
            <p class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Développement Site Web</p>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../assets/img/RFC.png">
          <div class="p-5">
            <p class="xl:text-2xl sm:text-l mt-1">Rocketown Football Club</p>
            <p class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Graphisme</p>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../assets/img/siteperso.png">
          <div class="p-5">
            <p class="xl:text-2xl sm:text-l mt-1">Site martialescudero.com V1</p>
            <p class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Développement Site Web</p>
          </div>
        </router-link>
      </div>
      <div class="mx-auto card">
        <router-link to="/">
          <img class="img-fluid" src="../assets/img/lim.png">
          <div class="p-5">
            <p class="xl:text-2xl sm:text-l mt-1">Lim'Raideurs</p>
            <p class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">Graphisme</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
.card {
  background: #202020;
  border-radius: 20px;
  width: 90%;
  height: 100%;
}

.card img {
  margin: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

@media screen and (max-width: 640px) {
  .card {
    width: 90%;
  }
}
</style>