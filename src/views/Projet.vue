<template>
  <div class="h-full mb-7">
    <div class="container mx-auto grid grid-cols-1 gap-4 sm:mt-32">
      <div class="xl:mr-10 sm:mr-4 sm:ml-4">
        <h1 class="text-center xl:text-4xl sm:text-2xl" data-aos="fade-down">{{projet.Titre}}</h1>
        <h2 class="text-center xl:text-xl text-blue-300" v-for="type in projet" :key="type.item" data-aos="fade-down">{{type.Type}}</h2>
        <h3 class="text-center text-sm mt-5 mb-10" data-aos="fade-down">{{projet.Techno}}</h3>
        <div v-for="type in projet" :key="type.item" class="mt-16" data-aos="fade-up">
          <div v-if="type.Type == 'Développement Web'">
            <figure class="effect-sadie">
              <img lt="Image illustration projet" :src="projet.Image[0].formats.small.url"/>
              <figcaption>
                <h2 class="mr-3 xl:text-2xl sm:text-xl">Cliquez ici <span class="pl-3">pour découvrir</span></h2>
                <a :href="projet.Url" rel="noopener" target="_blank"></a>
              </figcaption>			
            </figure>
          </div>
        </div>
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
      title : this.projet.Titre + ' | Martial Escudero',
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

.grid figure {
	position: relative;
  left: 50%;
  transform: translateX(-50%);
	overflow: hidden;
	min-width: 320px;
	max-width: 480px;
	max-height: 360px;
	width: 48%;
	background: #93C5FD;
	text-align: center;
	cursor: pointer;
}

.grid figure img {
	position: relative;
	display: block;
	min-height: 100%;
	max-width: 100%;
	opacity: 0.8;
}

.grid figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.grid figure h2 {
	font-weight: 300;
}

.grid figure h2 span {
	font-weight: 800;
}

figure.effect-sadie figcaption::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
	background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
	content: '';
	opacity: 0;
	-webkit-transform: translate3d(0,50%,0);
	transform: translate3d(0,50%,0);
}

figure.effect-sadie h2 {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	color: white;
	-webkit-transition: -webkit-transform 0.35s, color 0.35s;
	transition: transform 0.35s, color 0.35s;
	-webkit-transform: translate3d(0,-50%,0);
	transform: translate3d(0,-50%,0);
}


figure.effect-sadie figcaption::before ,
figure.effect-sadie p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure a:hover {
  background: none;
}

figure:hover span {
  transition: .5s;
  color: #93C5FD;
}
</style>