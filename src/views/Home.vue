<template>
  <div class="home">
    <Welcome />
    <About />
    <Projects />
  </div>
</template>

<script>
import Welcome from '@/components/Home/Welcome.vue'
import About from '@/components/Home/About.vue'
import Projects from '@/components/Home/Projects.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    About,
    Projects,
  }
}
</script>