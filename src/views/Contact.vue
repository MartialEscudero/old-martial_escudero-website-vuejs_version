<template>
<div>
  <div class="flex h-screen">
    <div class="m-auto text-md">
      <form id="contact-form" name="contact-form" action="mail.php" method="POST"  onsubmit="return validateForm()">
        <div class="name" v-if="displayName == true">
          <input v-model="name" class="xl:text-4xl sm:text-lg" placeholder="Nom" type="text" id="name" name="name">
          <div class="flex mt-10">
            <a @click="setName()" class="m-auto text-2xl">Suivant</a>
          </div>
        </div>
        <div v-if="displayEmail == true">
          <input placeholder="E-mail" class="xl:text-4xl sm:text-lg" v-model="email" type="text" id="email" name="email">
          <div class="flex mt-10">
            <a @click="setEmail()" class="m-auto text-2xl">Suivant</a>
          </div>
        </div>
        <div v-if="displaySubject == true">
          <input :placeholder="'Sujet - '+uuid" class="xl:text-4xl sm:text-lg" v-model="subject" type="text" id="subject" name="subject">
          <div class="flex mt-10">
            <a @click="setSubject()" class="m-auto text-2xl">Suivant</a>
          </div>
        </div>
        <div v-if="displayMessage == true">
          <textarea placeholder="Message" class="xl:text-xl sm:text-lg" v-model="message" type="text" id="message" name="message" rows="2"></textarea>
          <div class="flex mt-10">
            <a @click="setMessage()" class="m-auto text-2xl">Suivant</a>
          </div>
        </div>
      </form>
      <div v-if="displayRecap == true">
        <h1 class="text-center text-4xl mb-20">Récapitulatif</h1>
        <div class="container mx-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-0 mb-10">
          <div class="mx-auto">
            {{name}}
          </div>
          <div class="mx-auto">
            {{email}}
          </div>
        </div>
        <div class="container text-center mb-10">
          {{subject}} - {{uuid}}
        </div>
        <div class="container text-justify mb-10">
          {{message}}
        </div>
        <a class="m-auto text-2xl">Envoyer</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    uuid: null,
    displayName: true,
    displayEmail: false,
    displaySubject: false,
    displayMessage: false,
    displayRecap: false,
    name: null,
    email: null,
    subject: null,
    message: null,
    state: 0,
  }),
  methods: {
    setUuid() {
      return Math.random().toString(36).slice(2);
    },
    setName() {
      if (this.name != null || this.name == "") {
        this.displayName = false
        this.displayEmail = true
      }
    },
    setEmail() {
      if (this.email != null || this.email == "") {
        this.displayEmail = false
        this.displaySubject = true
      }
    },
    setSubject() {
      if (this.subject != null || this.subject == "") {
        this.displaySubject = false
        this.displayMessage = true
      }
    },
    setMessage() {
      if (this.message != null || this.message == "") {
        this.displayMessage = false
        this.displayRecap = true
      }
    }
  },
  mounted() {
    this.uuid = "#" + this.setUuid()
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
textarea {
  width: 1000px;
  height: 300px;
  background-color: transparent;
  border: solid 2px white;
  border-radius: 50px;
  outline: none;
  padding: 2rem 3rem;
  overflow: hidden;
}

input {
  width: 1000px;
  height: 100px;
  background-color: transparent;
  border: solid 2px white;
  border-radius: 50px;
  outline: none;
  padding-left: 3rem;
}

a:hover {
  transition: .5s;
  color: #93C5FD;
  cursor: pointer;
  user-select: none;
}

@media screen and (max-width: 640px) {
  
  input {
    width: 300px;
    height: 50px;
    padding-left: 1rem;
  }

  textarea {
    width: 300px;
    height: 150px;
    padding: 1rem 2rem;
  }

}
</style>