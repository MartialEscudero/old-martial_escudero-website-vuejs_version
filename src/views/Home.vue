<template>
  <div class="home">
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Home/welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>