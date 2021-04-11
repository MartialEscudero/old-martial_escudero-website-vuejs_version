<template>
  <div class="xl:mt-44 md:mt-36 sm:mt-28 h-full sm:mb-7">
    <h1 class="container mx-auto lg:text-left sm:text-center text-5xl mb-2" data-aos="fade-right">
      Portfolio
    </h1>
    <div class="container mx-auto grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-x-0 gap-y-20 mt-32 xl:mb-10">
      <div class="mx-auto card" v-for="projet in projets" :key="projet.item" data-aos="fade-up">
        <router-link :to="'/projet?id='+projet.id">
          <img class="img-fluid" :src="projet.Image[0].url">
          <div class="p-5">
            <h2 class="xl:text-2xl sm:text-l mt-1">{{projet.Titre}}</h2>
            <h3 class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">{{projet.type.Type}}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  metaInfo () {
    return {
      title : 'Martial Escudero | Mon Portfolio',
    }
  },
  computed: {
    ...mapGetters(['projets']),
  }, 
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