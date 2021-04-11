<template>
  <div class="home">
    <Welcome />
    <About />
    <Projects />
    <Contactme />
  </div>
</template>

<script>
import Welcome from '@/components/Home/Welcome.vue'
import About from '@/components/Home/About.vue'
import Projects from '@/components/Home/Projects.vue'
import Contactme from '@/components/Home/Contactme.vue'

export default {
  metaInfo () {
    return {
      title : 'Martial Escudero | Étudiant - Développeur Web',
    }
  },
  name: 'Home',
  components: {
    Welcome,
    About,
    Projects,
    Contactme,
  }
}
</script>