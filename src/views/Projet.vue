<template>
  <div class="h-full mb-7">
    <div class="container mx-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-4 xl:mt-60 sm:mt-32">
      <div class="xl:mr-10 sm:mr-4 sm:ml-4">
        <h1 class="xl:text-4xl sm:text-2xl">Site martialescudero.com</h1>
        <p class="xl:text-xl font-bold  text-blue-300">Développement Site Web</p>
        <p class="xl:text-md mt-5">Vue.JS | JS | CSS</p>
        <p class="text-justify mt-5 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida tristique pretium. Vestibulum in arcu a nunc porta sollicitudin. Proin congue eros eu arcu mollis tempor. Integer et lobortis lectus. Fusce ut magna et tellus fermentum pellentesque. Proin luctus interdum ullamcorper. Mauris tristique vitae tortor non posuere. Quisque eget elit nunc. Aliquam tincidunt elit metus, quis convallis lorem fringilla non. Mauris mauris risus, malesuada nec dignissim vitae, ultrices id ligula. Donec at ullamcorper velit, ac ultrices ex. Cras sed justo blandit, viverra justo sed, mattis leo. Pellentesque ac lobortis augue.
          <br><br>
           Sed tincidunt commodo urna sit amet sodales. Duis fringilla ipsum ac efficitur cursus. Proin sit amet lectus a ex pulvinar auctor at vitae velit. Vivamus nec auctor libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et venenatis turpis. Duis in enim et augue laoreet molestie vulputate in justo. Praesent facilisis velit eu malesuada pellentesque. Vivamus maximus odio neque, a fermentum mi lacinia non. Quisque vulputate tortor ac finibus malesuada. Nam sapien nibh, elementum sit amet ipsum sed, laoreet blandit magna. Nunc sollicitudin pellentesque mi vel congue.
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida tristique pretium. Vestibulum in arcu a nunc porta sollicitudin. Proin congue eros eu arcu mollis tempor. Integer et lobortis lectus. Fusce ut magna et tellus fermentum pellentesque. Proin luctus interdum ullamcorper. Mauris tristique vitae tortor non posuere. Quisque eget elit nunc. Aliquam tincidunt elit metus, quis convallis lorem fringilla non. Mauris mauris risus, malesuada nec dignissim vitae, ultrices id ligula. Donec at ullamcorper velit, ac ultrices ex. Cras sed justo blandit, viverra justo sed, mattis leo. Pellentesque ac lobortis augue.
          <br><br>
           Sed tincidunt commodo urna sit amet sodales. Duis fringilla ipsum ac efficitur cursus. Proin sit amet lectus a ex pulvinar auctor at vitae velit. Vivamus nec auctor libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et venenatis turpis. Duis in enim et augue laoreet molestie vulputate in justo. Praesent facilisis velit eu malesuada pellentesque. Vivamus maximus odio neque, a fermentum mi lacinia non. Quisque vulputate tortor ac finibus malesuada. Nam sapien nibh, elementum sit amet ipsum sed, laoreet blandit magna. Nunc sollicitudin pellentesque mi vel congue.
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida tristique pretium. Vestibulum in arcu a nunc porta sollicitudin. Proin congue eros eu arcu mollis tempor. Integer et lobortis lectus. Fusce ut magna et tellus fermentum pellentesque. Proin luctus interdum ullamcorper. Mauris tristique vitae tortor non posuere. Quisque eget elit nunc. Aliquam tincidunt elit metus, quis convallis lorem fringilla non. Mauris mauris risus, malesuada nec dignissim vitae, ultrices id ligula. Donec at ullamcorper velit, ac ultrices ex. Cras sed justo blandit, viverra justo sed, mattis leo. Pellentesque ac lobortis augue.
          <br><br>
           Sed tincidunt commodo urna sit amet sodales. Duis fringilla ipsum ac efficitur cursus. Proin sit amet lectus a ex pulvinar auctor at vitae velit. Vivamus nec auctor libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et venenatis turpis. Duis in enim et augue laoreet molestie vulputate in justo. Praesent facilisis velit eu malesuada pellentesque. Vivamus maximus odio neque, a fermentum mi lacinia non. Quisque vulputate tortor ac finibus malesuada. Nam sapien nibh, elementum sit amet ipsum sed, laoreet blandit magna. Nunc sollicitudin pellentesque mi vel congue.
          <br>   
        </p>
      </div>
      <div class="mx-auto xl:mt-0 sm:mt-10 sm:mr-4 sm:ml-4">
        <img src="../assets/img/siteme.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: null,
  }),
  mounted() {
    this.id = this.$route.query.id
    window.scroll(0, 0)
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
</style>