<template>
  <div class="h-full mb-7">
    <div class="container mx-auto grid grid-cols-1 gap-4 sm:mt-32">
      <div class="xl:mr-10 sm:mr-4 sm:ml-4">
        <h1 class="text-center xl:text-4xl sm:text-2xl" data-aos="fade-down">{{projet.Titre}}</h1>
        <h2 class="text-center  xl:text-xl font-bold text-blue-300" v-for="type in projet" :key="type.item" data-aos="fade-down">{{type.Type}}</h2>
        <h3 class="text-center text-sm mt-5 mb-10" data-aos="fade-down">{{projet.Techno}}</h3>
        <vue-markdown id="markdown" class="text-justify xl:mt-24 sm:mt-14" :source="projet.Texte" data-aos="fade-up"></vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  metaInfo () {
    return {
      title : 'Martial Escudero | ' + this.projet.Titre,
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
    window.scroll(0, 0)
    this.id = this.$route.query.id
    this.getProjetSelect(this.$route.params.slug)
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