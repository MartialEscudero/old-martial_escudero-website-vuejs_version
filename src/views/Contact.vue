<template>
  <div class="flex h-screen">
    <div class="m-auto text-md xl:mx-auto">
      <form v-show="displayForm == true" id="contact-form" name="contact-form" @submit.prevent="sendEmail">
        <p class="xl:text-lg sm:text-xs msgerror"></p>
        <div v-show="displayName == true">
          <input v-model="name" class="input xl:text-4xl sm:text-lg" placeholder="Nom" type="text" name="user_name">
          <div class="flex mt-10">
            <a @click="setName()" class="m-auto xl:text-2xl">Suivant</a>
          </div>
          <div class="text-gray-400">
            <p class="contact text-center xl:text-sm sm:text-xs">ou via <a class="font-bold" href="mailto:contact@martialescudero.com">contact@martialescudero.com</a></p>
          </div>
        </div>
        <div v-show="displayEmail == true">
          <input placeholder="E-mail" class="input xl:text-4xl sm:text-lg" v-model="email" type="text" name="user_email">
          <div class="flex mt-10">
            <a @click="setEmail()" class="m-auto xl:text-2xl">Suivant</a>
          </div>
        </div>
        <div v-show="displaySubject == true">
          <input placeholder="Sujet" class="input xl:text-4xl sm:text-lg" v-model="subject" name="user_subject">
          <div class="flex mt-10">
            <a @click="setSubject()" class="m-auto xl:text-2xl">Suivant</a>
          </div>
        </div>
        <div v-show="displayMessage == true">
          <textarea placeholder="Message" class="textarea xl:text-xl sm:text-lg" v-model="message" type="text" name="message" rows="2"></textarea>
          <div class="flex mt-10">
            <a @click="setMessage()" class="m-auto xl:text-2xl">Suivant</a>
          </div>
        </div>
        <div class="recap sm:mt-24 sm:mb-10" v-show="displayRecap == true">
          <h1 class="text-center text-4xl mb-20">Récapitulatif</h1>
          <div class="bg-gray xl:p-4 sm:p-2 container mx-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-0 mb-10">
            <div class="mx-auto">
              {{name}}
            </div>
            <div class="mx-auto">
              {{email}}
            </div>
          </div>
          <div class="bg-gray xl:p-4 sm:p-2 container grid grid-cols-1 text-center mb-10">
            <div class="mx-auto">
              {{subject}}
            </div>
          </div>
          <div class="bg-gray xl:p-4 sm:p-2 container grid grid-cols-1 text-justify mb-10">
            <div>
              {{message}}
            </div>
          </div>
          <div v-show="displayLoading == false" class="xl:p-4 sm:p-2 grid grid-cols-2 mb-10">
            <div>
              <a @click="cancel();" class="text-2xl">Annuler</a>
            </div>
            <div>
              <input type="submit" value="Envoyer" class="send text-2xl float-right">
            </div>
          </div>
          <div v-show="displayLoading == true"  class="xl:p-4 sm:p-2 grid grid-cols-1 mb-10">
            <div>
              <p class="text-center text-2xl">Envoi en cours ...</p>
            </div>
          </div>
        </div>
      </form>
      <div v-show="displaySend == true" class="container mx-auto grid grid-cols-1 gap-0">
        <p class="text-center xl:text-4xl sm:text-lg"><span class="text-5xl">🎉🎉🎉</span><br><br>Mail envoyé avec <span class="font-bold text-blue-400">succès</span> !<br>Vous allez être redirigé dans <span class="font-bold text-blue-400">{{time}}</span></p>
      </div>
    </div>
  </div>
</template>


<script>
var $ = require('jquery');
window.$ = $;

import emailjs from 'emailjs-com';

export default {
  data: () => ({
    uuid: null,
    displayForm: true,
    displaySend: false,
    displayLoading: false,
    displayError: false,
    displayName: true,
    displayEmail: false,
    displaySubject: false,
    displayMessage: false,
    displayRecap: false,
    name: null,
    email: null,
    subject: null,
    message: null,
    time: 5
  }),
  methods: {
    sendEmail(e) {
      this.displayLoading = true
      emailjs.sendForm('service_0ypnj9p', 'template_ddhecpn', e.target, 'user_PFnEAgnCIgPitvseq0QYE')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.displayForm = false
            this.displaySend = true
            this.displayLoading = false
            setTimeout(() => {this.time = 4}, 1000)
            setTimeout(() => {this.time = 3}, 2000)
            setTimeout(() => {this.time = 2}, 3000)
            setTimeout(() => {this.time = 1}, 4000)
            setTimeout(() => {this.time = "ZÉ PARTI 🚀 !"}, 5000)
            setTimeout(() => {this.$router.push({path: '/'})}, 6000)
        }, (error) => {
            console.log('FAILED...', error);
            this.$router.push({path: '/contact'})
        });
    },
    setUuid() {
      return Math.random().toString(36).slice(2);
    },
    cancel() {
      this.displayName = true
      this.displayRecap = false
      this.name = null
      this.email = null
      this.subject = null
      this.message = null
    },
    setName() {
      const nameRegex = /^[a-z ,.'-]+$/i
      if (isNaN(this.name) && this.name.length >= 3 && nameRegex.test(this.name)) {
        this.displayName = false
        this.displayEmail = true
        $(".input").removeClass("errorinput")
        $(".msgerror").text("")
      } else {
        $(".input").addClass("errorinput")
        $(".msgerror").text("Une erreur apparait dans l'écriture de votre Nom.")
      }
    },
    setEmail() {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(this.email)) {
        this.displayEmail = false
        this.displaySubject = true
        $(".input").removeClass("errorinput")
        $(".msgerror").text("")
      } else {
        $(".input").addClass("errorinput")
        $(".msgerror").text("Une erreur apparait dans l'écriture de votre e-mail.")
      }
    },
    setSubject() {
      if (isNaN(this.subject) && this.subject.length >= 3 && this.subject.length <= 60) {
        this.displaySubject = false
        this.displayMessage = true
        $(".input").removeClass("errorinput")
        $(".msgerror").text("")
      } else {
        $(".input").addClass("errorinput")
        $(".msgerror").text("Une erreur apparait dans l'écriture du Sujet.")
      }
    },
    setMessage() {
      if (this.message != null) {
        this.displayMessage = false
        this.displayRecap = true
        $(".textarea").removeClass("textareaerror")
        $(".msgerror").text("")
      } else {
        $(".textarea").addClass("textareaerror")
        $(".msgerror").text("Vore message est vide ou trop court.")
      }
    }
  },
  mounted() {
    this.uuid = this.setUuid()
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
.send {
 background: none;
 outline: none;
}

.bg-gray {
  background: #181818;
}

.recap {
  width: 1000px;
}

.contact {
  position: absolute;
  margin-left: auto;
  margin-right: auto; 
  margin-top: 5rem;
  left: 0;
  right: 0;
  text-align: center;
}

.textarea {
  width: 1000px;
  height: 300px;
  background-color: transparent;
  border: solid 2px white;
  border-radius: 50px;
  outline: none;
  padding: 2rem 3rem;
  overflow: hidden;
}

.textareaerror {
  width: 1000px;
  height: 300px;
  background-color: transparent;
  border: solid 2px red;
  border-radius: 50px;
  outline: none;
  padding: 2rem 3rem;
  overflow: hidden;
}


.input {
  width: 1000px;
  height: 100px;
  background-color: transparent;
  border: solid 2px white;
  border-radius: 50px;
  outline: none;
  padding-left: 3rem;
}

.errorinput {
  width: 1000px;
  height: 100px;
  background-color: transparent;
  border: solid 2px red;
  border-radius: 50px;
  outline: none;
  padding-left: 3rem;
}

.msgerror {
  color: red;
  position: absolute;
  margin-top: -1.5rem;
  margin-left: 3.1rem;
  user-select: none;
}

a:hover, .send:hover {
  transition: .5s;
  color: #93C5FD;
  cursor: pointer;
  user-select: none;
}

@media screen and (max-width: 640px) {

  .recap {
    width: 350px;
  }
  
  .input {
    width: 300px;
    height: 50px;
    padding-left: 1rem;
  }

  .textarea {
    width: 300px;
    height: 150px;
    padding: 1rem 2rem;
  }

  .msgerror {
    color: red;
    position: absolute;
    margin-left: auto;
    margin-right: auto; 
    left: 0;
    right: 0;
    text-align: center;
    user-select: none;
  }

}
</style>