<template>
  <div class="home">
    <Hello />
    <About />
    <Projects />
    <Contactme />
  </div>
</template>

<script>
import Hello from '@/components/Home/Hello.vue'
import About from '@/components/Home/About.vue'
import Projects from '@/components/Home/Projects.vue'
import Contactme from '@/components/Home/Contactme.vue'

export default {
  metaInfo () {
    return {
      title : 'testMartial Escudero | Étudiant - Développeur Web',
      meta: [
        { name: 'description', content: 'Martial Escudero 21 ans – Étudiant & Développeur Web – Site Portofolio de Martial Escudero' },
        // { property: 'keywords', content: "Martial Escudero,Escudero Martial,Étudiant,Université de Limoges,Limoges,LPMI,DEUST,Webmaster & Métiers de l'Internet,Développeur Front-End,Développeur,Vidéaste,Graphisme" },

        // { property: 'og:type', content: 'website' },
        // { property: 'og:url', content: 'https://www.martialescudero.com' },
        // { property: 'og:title', content: 'Martial Escudero | Étudiant - Développeur Web'},
        // { property: 'og:description', content: 'Martial Escudero 21 ans – Étudiant & Développeur Web – Site Portofolio de Martial Escudero' },
        // { property: 'og:image', content: 'https://martialescudero.com/assets/img/martialescudero.jpg' },

        // { property: 'twitter:card', content: 'summary_large_image' },
        // { property: 'twitter:url', content: 'https://www.martialescudero.com' },
        // { property: 'twitter:title', content: 'Martial Escudero | Étudiant - Développeur Web'},
        // { property: 'twitter:description', content: 'Martial Escudero 21 ans – Étudiant & Développeur Web – Site Portofolio de Martial Escudero' },
        // { property: 'twitter:image', content: 'https://martialescudero.com/assets/img/martialescudero.jpg' },
      ]
    }
  },
  name: 'Home',
  components: {
    Hello,
    About,
    Projects,
    Contactme,
  }
}
</script>