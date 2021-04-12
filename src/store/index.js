import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    projets: [],
    projet: [],
    projetDefined: true,
  },
  mutations: {
    setProjet(state, args) {
      state.projets = args.reverse()
    },
    setProjetSelect(state, args) {
      state.projet = args[0]
      for (let index = 0; index < state.projet.Techno.length; index++) {
        state.projet.Techno = state.projet.Techno.replace(',',' |')
      }
    }
  },
  actions: {
    getProjets({commit}) {
      axios.get('https://strapi-martialescudero.herokuapp.com/projets?ShowIt_eq=true')
      .then( (res) => {
        commit('setProjet', res.data)
      })
      .catch( (err) => {
        console.log(err)
      })
    },
    getProjetSelect({state, commit}, item) {
      state.projet = []
      state.projetDefined = true
      axios.get('https://strapi-martialescudero.herokuapp.com/projets?id_eq='+item)
      .then( (res) => {
        commit('setProjetSelect', res.data)
      })
      .catch( (err) => {
        console.log(err)
        state.projetDefined = false
      })
    }
  },
  getters: {
    projets: state => state.projets,
    projet: state => state.projet,
    projetDefined: state => state.projetDefined
  }
})