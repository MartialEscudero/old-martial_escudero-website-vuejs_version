<template>
  <div class="mt-32 h-screen">
    <div class="container mx-auto lg:text-left sm:text-center text-5xl mb-16">
      À Propos
    </div>
    <div class="container mx-auto grid xl:grid-cols-2 lg:grid-cols-1 gap-4 mt-32">
      <div class="mx-auto text-justify xl:m-0 sm:ml-5 sm:mr-5">
        <p class="text-3xl font-bold mt-10">Martial <span>Escudero</span></p>
        <p class="text-2xl ">{{age}} ans</p>
        <p class="mt-14">
          Actuellement en <a class="lien" target="_blank" href="https://www.sciences.unilim.fr/tic/deust-webmaster-metiers-internet/">DEUST Webmaster & Métiers de l'Internet</a> à l’Université de Limoges, je suis diplômé d'un <a class="lien" target="_blank" href="http://www.lyceecaraminot.fr/">Baccalauréat Scientifique option et spécialité Sciences de l'Ingénieur</a>.<br>
          Vous pouvez trouver certains de mes projets sous l'entité <a class="lien" target="_blank" href="https://www.behance.net/pureproduction/">"Pure. Production"</a>.
        </p>
        <p class="mt-14">
          Passionné et autodidacte depuis toujours, je saurais m'investir et vous accompagnez dans vos projets.
        </p>
        <div class="flex mt-14">
          <div class="xl:mr-7">
            <a class="flex-initial" href="https://www.linkedin.com/in/martial-escudero/" target="_blank"><img class="social" src="../../assets/img/linkedin.svg" /></a>
          </div>
          <div class="xl:mr-7">
            <a class="flex-initial" href="https://github.com/MartialEscudero" target="_blank"><img class="social" src="../../assets/img/github.svg" /></a>
          </div>
          <div class="xl:mr-7">
            <a class="flex-initial" href="https://www.behance.net/pureproduction/" target="_blank"><img class="social" src="../../assets/img/behance.svg" /></a>
          </div>
          <div class="xl:mr-7">
            <a class="flex-initial" href="https://www.youtube.com/channel/UC_d6_vk36G1fty7Xa-gvz_A" target="_blank"><img class="social" src="../../assets/img/youtube.svg" /></a>
          </div>
          <div class="xl:mr-7">
            <a class="flex-initial" href="https://www.instagram.com/pure.laprod/" target="_blank"><img class="social" src="../../assets/img/instagram.svg" /></a>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-24 xl:ml-72 xl:block lg:hidden md:hidden sm:hidden">
        <img class="lg:w-50" src="../../assets/img/icon.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    age: null,
  }),
  methods: {
    getAge(date) { 
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    }
  },
  mounted() {
    this.age = this.getAge(new Date(2000, 7, 21))
  }
}
</script>

<style scoped>
.lien {
  color: #93C5FD;
}

.lien:hover {
  transition: .5s;
  background: #93C5FD;
  color: #0e0e0e;
}
.social {
  width: 50px;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
}

.social:hover {
  transition: .5s;
  background-color: #3B82F6;
}
</style>