import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    status: 'out'
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getUserToken: state => {
      return state.token
    },
    getUserState: state => {
      return state.status
    }
  },
  mutations: {
    setUser: state => {
      state.user = auth.currentUser
    },
    setUserToken: (state, token) => {
      state.token = token
    },
    setUserStatus: (state, status) => {
      state.status = status
    }
  },
  actions: {
    setUser: context => {
      context.commit('setUser')
    },
    setUserToken: (context, token) => {
      context.commit('setToken', token)
    },
    setUserStatus: (context, status) => {
      context.commit('setUserStatus', status)
    }
  }
})
