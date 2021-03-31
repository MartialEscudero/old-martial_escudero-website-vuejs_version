<template>
  <div class="home">
    <Welcome />
    <About />
  </div>
</template>

<script>
import Welcome from '@/components/Home/Welcome.vue'
import About from '@/components/Home/About.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    About,
  }
}
</script>