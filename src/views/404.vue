<template>
  <div class="flex h-screen">
    <div class="m-auto text-center">
      <h1 class="font-bold text-6xl mb-10">404</h1>
      <p>
        Désolé mais cette page n'existe pas.
        <br><a class="font-bold" href="/">Retour à la page d'accueil.</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title : 'Error 404 !',
    }
  },
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
p a {
  color: #93C5FD;
}

p a:hover {
  transition: .5s;
  background: #93C5FD;
  color: #0e0e0e;
}
</style>