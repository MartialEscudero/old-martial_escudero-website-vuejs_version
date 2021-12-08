<template>
  <div class="fxl:mt-44 md:mt-36 sm:mt-28 sm:mb-7 tablet">
    <h1 class="container mx-auto lg:text-left sm:text-center text-5xl mb-2" data-aos="fade-right">
      CV
    </h1>
    <div class="container mx-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-x-0 gap-y-20 mt-32 xl:mb-10">
      <h1 class="text-center text-4xl font-bold" data-aos="fade-right">Moi.</h1>
      <div class="text-justify" data-aos="fade-left">
        <p>
          Actuellement en <a rel="noopener" target="_blank" href="https://www.sciences.unilim.fr/tic/metiers-de-linformatique-conduite-de-projet-technologie-du-developpement-web/">Licence Professionnelle - Métiers de l'informatique : Conduite de projet - Technologie du développement web</a> à l’Université de Limoges, je suis diplômé d'un <a rel="noopener" target="_blank" href="https://www.sciences.unilim.fr/tic/deust-webmaster-metiers-internet/">DEUST Webmaster & Métiers de l'Internet</a>.<br>
          <br>
          Vous pouvez trouver certains de mes projets <b>actuels</b> sous l'entité <a rel="noopener" target="_blank" href="https://www.instagram.com/le4cent4/">"4cent4"</a>.<br>
          Mes anciens projets audiovisuels sous l'entité <a rel="noopener" target="_blank" href="https://www.behance.net/pureproduction">"Pure. Production"</a>.        
        </p>
        <br>
        <p class="mb-10">
          Étudiant investie et dynamique, je possède une très bonne connaissance du monde du web et des nouvelles technologies.
        </p>
        <div id="wrapper">
          <a class="rounded-full" rel="noopener" target="_blank" :href="cvpdf.link">
            <button class="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Télécharger mon CV</span>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="container mx-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-x-0 gap-y-20 mt-32 xl:mb-10">
      <h1 class="text-center text-4xl font-bold" data-aos="fade-right">Diplôme.</h1>
      <div class="text-justify" data-aos="fade-left">
        <article>
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">Université de Limoges, Faculté Sciences Et Techniques</span> | Licence Pro</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">SEPTEMBRE 2021 - LIMOGES</span></div>
          <p class="text-sm">
            Licence Professionnelle – Métiers de l'informatique : Conduite de Projet - Développement Web.
          </p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">MOOC Gestion de projet</span></p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">OCTOBRE 2021</span></div>
          <p class="text-sm">
            MOOC Gestion de projet - Spécialisation Management d'Équipe Projet & Spécialisation Outils et Applications Web pour la gestion de projet.<br><br>
            <b>Dans le cadre de ma Licence Professionnelle.</b>
          </p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">Université de Limoges, Faculté Sciences Et Techniques</span> | DEUST</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">SEPTEMBRE 2019 / JUILLET 2021 - LIMOGES</span></div>
          <p class="text-sm">
            DEUST – Webmaster & Métiers de l’Internet : Parcours Développement Web et Plateformes Mobiles.<br><br>
            <b>Mention Bien.</b>
          </p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">Lycée Pierre Caraminot</span> | Baccalauréat</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">JUILLET 2019 • ÉGLETONS</span></div>
          <p class="text-sm">Baccalauréat Scientifique spécialité et option Sciences de l’Ingénieur.</p>
        </article>
      </div>
    </div>
    <div class="container mx-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-x-0 gap-y-20 mt-32 xl:mb-10">
      <h1 class="text-center text-4xl font-bold" data-aos="fade-right">Expériences.</h1>
      <div class="text-justify" data-aos="fade-left">
        <article>
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">Site Web Personnel V2</span> | Cadre Personnel</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">AVRIL 2021</span></div>
          <p class="text-sm">Refonte totale de mon site www.martialescudero.com, développement en utilisant : Vue.js, VueX, Node.js, Strapi et Tailwind CSS.</p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">HortusBox</span> | Stage</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">JANVIER 2021</span></div>
          <p class="text-sm">Stage de 2 mois dans le cadre de mon DEUST Webmaster & Métiers de l’Internet. 
            <br><br>Missions :
            <br>- Intégration de maquettes
            <br>- Amélioration du parcours client
            <br>- Rajout de nouveaux designs du site
            <br>- Développement des nouvelles features
            <br>- Développement d'un outil d'édition et de génération d'un book en PDF
            <br><br>Techno : Vue.js / Vuex / Vuetify / Nuxt.js / Strapi / Node.js / Puppeteer
          </p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">Office de Tourisme Ventadour-Egletons-Monédières</span> | Stage</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">MARS 2020 - ÉGLETONS</span></div>
          <p class="text-sm">Stage de 4 semaines dans le cadre de mon DEUST Webmaster & Métiers de l’Internet. 
            <br><br>Missions :
            <br>- Développement web et préconisations pour le site
            <br>- Audit, analyse du site web
            <br>- Community management
            <br>- Réalisation de photos et vidéos à destination des réseaux sociaux
          </p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">Site Web Personnel V1</span> | Cadre Personnel</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">MARS 2020</span></div>
          <p class="text-sm">Développement de mon site internet www.martialescudero.com.</p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">COM COM Service Ordures Ménagères</span> | Adjoint Technique</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">JUILLET 2018 à JANVIER 2021 (par période) - ÉGLETONS</span></div>
          <p>Emploi saisonnier durant chaque période de vacances scolaires.</p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">PROMAN</span> | Intérimaire</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">AOÛT 2019 à JUIN 2020 (par période) - ÉGLETONS</span></div>
          <p class="text-sm">Emploi saisonnier durant chaque période de vacances scolaires.</p>
        </article>
        <article class="mt-10">
          <p class="xl:text-xl sm:text-lg text-left"><span class="font-bold">Réalisations</span> | Cadre personnel</p>
          <div class="italic mt-2 mb-5 text-xs"><span class="date">2019</span></div>
          <p class="text-sm">Sous l’entité « Pure. Production » du Graphisme et des Vidéo-Clips.</p>
        </article>
      </div>
    </div>
    <div class="container mx-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-x-0 gap-y-20 mt-32 xl:mb-10">
      <h1 class="text-center text-4xl font-bold" data-aos="fade-right">Compétences.</h1>
        <div data-aos="fade-left">
          <article class="text-justify" v-for="type in cv" :key="type.item">
            <h2 class="text-left font-bold text-2xl">{{type.type}}</h2>
            <hr class="my-6">
            <section v-for="cv in type.cvs" :key="cv.item">
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 rounded-full">
                      {{cv.name}}
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block">
                      {{cv.percent}}%
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                  <div :style="'width:'+cv.percent+'%'" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                </div>
              </div>
            </section>
          </article>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(['cvpdf']),
    ...mapGetters(['cv']),
  }, 
  metaInfo () {
    return {
      title : 'Mon CV | Martial Escudero',
    }
  },
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
article {
  background: #202020;
  padding: 1rem;
}

.date {
  background: #474747;
  padding: .2rem .5rem;
}

p a {
  color: #93C5FD;
}

p a:hover {
  transition: .5s;
  background: #93C5FD;
  color: #0e0e0e;
}

button {
  background: transparent;
  border: none;
}

button:hover {
  background: transparent;
  border: none;
}

button:focus {
  outline: unset;
}

.btn:hover {
  transition: .5s;
  background: #202020;
  color: #93C5FD;
}

.btn:focus {
  outline: unset;
}

.btn {
  margin: 0 auto;
  color: #202020;
  background: #93C5FD;
}

#wrapper {
  display: flex;
  justify-content: center;
}
</style>