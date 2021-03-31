<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div class="lg:text-6xl sm:text-4xl font-bold">
        Hello,
      </div>
      <div class="lg:text-5xl sm:text-xl mt-4">
        My name is <span class="name font-bold text-blue-400 mt-4">Martial Escudero.</span>
      </div>
      <div class="container">
        <div
          class="txt-rotate lg:text-l sm:text-md mt-4" 
          data-period="1000" 
          data-rotate='[ 
            "Web Developer", 
            "Web Designer", 
            "Front-End Developer",
            "Video Maker", 
            "Graphic Designer",
            "Tout est en anglais juste pour le style"
          ]'>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("../../assets/js/letter.js")

export default {
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
</style>