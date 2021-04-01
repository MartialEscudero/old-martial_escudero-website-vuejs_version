<template>
  <div>
    Projet test {{id}}
  </div>
</template>

<script>
export default {
  data: () => ({
    id: null,
  }),
  mounted() {
    this.id = this.$route.query.id
  }
}
</script>

<style>

</style>