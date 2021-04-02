<template>
  <div class="flex mt-52">
    <div class="m-auto grid grid-cols-1">
      <h1 class="text-center xl:text-4xl sm:text-2xl sm:ml-5 sm:mr-5 font-bold">
        Vous avez une question ? Un projet ? Ou autre ?
      </h1>
      <div class="mx-auto mt-16 mb-20">
        <router-link class="btn text-white font-bold text-2xl py-2 px-5 rounded-full" tag="button" to="/contact">Me contacter</router-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.btn:hover {
  background: #202020;
  color: #93C5FD;
}

.btn:focus {
  outline: unset;
}

.btn {
  transition: .5s;
  color: #202020;
  background: #93C5FD;
}
</style>