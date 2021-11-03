<template>
  <div class="mt-32 h-screen tablet" id="element">
    <h1 class="container mx-auto lg:text-left sm:text-center text-5xl mb-16" data-aos="fade-right">
      À Propos
    </h1>
    <div class="container mx-auto grid xl:grid-cols-2 lg:grid-cols-1 gap-4 lg:mt-32 sm:-mt-10">
      <div class="mx-auto text-justify xl:m-0 sm:ml-5 sm:mr-5">
        <h2 class="text-3xl font-bold mt-10" data-aos="fade-up">Martial Escudero</h2>
        <h3 class="text-2xl" data-aos="fade-up">{{age}} ans</h3>
        <div data-aos="fade-up">
          <router-link class="btn text-white font-bold py-2 px-4 rounded-full mt-14" tag="button" to="/cv">Voir mon CV</router-link>
        </div>
        <p class="mt-14" data-aos="fade-up">
          Actuellement en <a target="_blank" href="https://www.sciences.unilim.fr/tic/metiers-de-linformatique-conduite-de-projet-technologie-du-developpement-web/">Licence Professionnelle - Métiers de l'informatique : Conduite de projet - Technologie du développement web</a> à l’Université de Limoges, je suis diplômé d'un <a target="_blank" href="https://www.sciences.unilim.fr/tic/deust-webmaster-metiers-internet/">DEUST Webmaster & Métiers de l'Internet</a>.<br>
          <br>
          Vous pouvez trouver certains de mes projets <b>actuels</b> sous l'entité <a target="_blank" href="https://www.instagram.com/le4cent4/">"4cent4"</a>.<br>
          Mes anciens projets audiovisuels sous l'entité <a target="_blank" href="https://www.behance.net/pureproduction">"Pure. Production"</a>.
        </p>
        <p class="mt-14" data-aos="fade-up">
          Passionné et autodidacte depuis toujours, je saurais m'investir et vous accompagnez dans vos projets.
        </p>
        <div id="social" class="flex mt-16 md:ml-0 sm:ml-14" data-aos="fade-up">
          <div class="xl:mr-7">
            <a class="flex-auto" href="https://www.linkedin.com/in/martial-escudero/" target="_blank">
                <svg class="svg-icon" viewBox="0 0 23.273 23.273">
                  <path d="M11.637,0A11.637,11.637,0,1,0,23.273,11.637,11.638,11.638,0,0,0,11.637,0ZM8.255,17.591H5.421V9.065H8.255ZM6.838,7.9H6.82a1.477,1.477,0,1,1,.037-2.946A1.478,1.478,0,1,1,6.838,7.9Zm11.636,9.691H15.641V13.03c0-1.146-.41-1.928-1.436-1.928a1.551,1.551,0,0,0-1.454,1.036,1.941,1.941,0,0,0-.093.692v4.762H9.824s.037-7.726,0-8.526h2.834v1.207a2.814,2.814,0,0,1,2.554-1.407c1.865,0,3.263,1.219,3.263,3.837Zm0,0" />
                </svg>
            </a>
          </div>
          <div class="xl:mr-7">
            <a class="flex-auto" href="https://github.com/MartialEscudero" target="_blank">
              <svg class="svg-icon" viewBox="0 0 24 23">
                <path d="M12,.5A11.9,11.9,0,0,0,0,12.292,11.812,11.812,0,0,0,8.2,23.48c.6.111.82-.254.82-.567,0-.28-.01-1.022-.015-2-3.338.711-4.042-1.582-4.042-1.582A3.143,3.143,0,0,0,3.633,17.6c-1.087-.731.084-.716.084-.716A2.51,2.51,0,0,1,5.555,18.1a2.584,2.584,0,0,0,3.495.981A2.5,2.5,0,0,1,9.81,17.5c-2.665-.3-5.466-1.309-5.466-5.827A4.505,4.505,0,0,1,5.579,8.513a4.126,4.126,0,0,1,.105-3.121s1.005-.316,3.3,1.209a11.506,11.506,0,0,1,6,0c2.28-1.525,3.285-1.209,3.285-1.209a4.24,4.24,0,0,1,.12,3.121,4.523,4.523,0,0,1,1.23,3.164c0,4.53-2.805,5.527-5.475,5.817a2.8,2.8,0,0,1,.81,2.182c0,1.578-.015,2.846-.015,3.229,0,.309.21.678.825.56A11.776,11.776,0,0,0,24,12.292,11.9,11.9,0,0,0,12,.5Z" />
              </svg>
            </a>
          </div>
          <div class="xl:mr-7">
            <a class="flex-auto" href="https://www.instagram.com/le4cent4/" target="_blank">
              <svg class="svg-icon" viewBox="0 0 24 24">
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </a>
          </div>
          <div class="xl:mr-7">
            <a class="flex-auto" href="https://www.link.martialescudero.com/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-32 xl:ml-72 xl:block lg:hidden md:hidden sm:hidden tablet-logo" data-aos="fade-up">
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
    getAge(dtn) {
      var today = new Date();
      var an = dtn.substr(6,4);
      var mois = dtn.substr(3,2);
      var day = dtn.substr(0,2);
      var dateNaissance = new Date(an + "-" + mois + "-" + day);
      var age = today.getFullYear() - dateNaissance.getFullYear();
      var m = today.getMonth() - dateNaissance.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
        age = age - 1;
      }
      return Math.abs(age)
    }
  },
  mounted() {
    this.age = this.getAge("21/07/2000")
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

#social svg {
  transition: .5s;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  fill: white;
}
#social svg:hover {
  transition: .5s;
  fill: #3B82F6;
}

.btn:hover {
  transition: .5s;
  background: #202020;
  color: #93C5FD;
}

.btn:focus {
  outline: unset;
}

.btn {
  color: #202020;
  background: #93C5FD;
}
</style>