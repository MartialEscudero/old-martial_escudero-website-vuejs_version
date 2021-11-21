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
      title : 'Martial Escudero | Étudiant - Développeur Web',
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