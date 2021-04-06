<template>
  <div class="h-full mb-7">
    <div class="container mx-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-4 xl:mt-60 md:mt-44 sm:mt-32">
      <div class="xl:mr-10 sm:mr-4 sm:ml-4">
        <h1 class="xl:text-4xl sm:text-2xl">{{projet.Titre}}</h1>
        <h2 class="xl:text-xl font-bold  text-blue-300" v-for="type in projet" :key="type.item">{{type.Type}}</h2>
        <h3 class="xl:text-md mt-5">{{projet.Techno}}</h3>
        <p class="text-justify mt-5 mb-4">
          {{projet.Texte}}
        </p>
      </div>
      <div class="mx-auto xl:mt-0 sm:mt-10 sm:mr-4 sm:ml-4" v-for="img in projet.Image" :key="img.item">
        <img :src="img.url">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  metaInfo () {
    return {
      title : 'Martial Escudero | Site martialescudero.com',
    }
  },
  data: () => ({
    id: null,
  }),
  methods: {
    ...mapActions(['getProjetSelect']),
  },
  computed: {
    
    ...mapGetters(['projet']),
  },
  mounted() {
    this.id = this.$route.query.id
    this.getProjetSelect(this.$route.query.id)
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
a {
  color: #93C5FD;
}

a:hover {
  transition: .5s;
  background: #93C5FD;
  color: #0e0e0e;
}
</style>