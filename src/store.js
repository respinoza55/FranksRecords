import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const baseURL = "http://localhost:3000/franks/"

export const store = new Vuex.Store({
  state: {
    customers: []
  },
  getters: {
    allCustomers: state => state.customers,

    user: state => id => {
      return state.customers.find(customer => customer.id === id);
    }
  },
  actions: {
    async loadCustomers ({ commit }) {
      await axios.get(baseURL).then(data => {
        let customers = data.data
        commit('SET_CUSTOMERS', customers)
      })
      .catch(error => {
        console.log(error)
      })
    },
    async addCustomer({ commit }, customer ) {
      const response = await axios.post(baseURL, {
        full_name: customer.full_name,
        phone: customer.phone,
        ballWeight: customer.ballWeight,
        notes: customer.notes,
        leftHand: customer.leftHand,
        righHand: false,
        pitch1: customer.pitch1,
        pitch2: customer.pitch2,
        pitch3: customer.pitch3,
        pitch4: customer.pitch4,
        pitch5: customer.pitch5,
        pitch6: customer.pitch6,
        cut1: customer.cut1,
        cut2: customer.cut2,
        drillBit1: customer.drillBit1,
        drillBit2: customer.drillBit2,
        span1: customer.span1,
        span2: customer.span2,
        bPitch1: customer.bPitch1,
        bPitch2: customer.bPitch2,
        bPitch3: customer.bPitch3,
        drillBit3: customer.drillBit3
      })
      commit('NEW_CUSTOMER', response.data)
    },
    async updateCustomer({ commit }, customer) {
      const response = await axios.put(baseURL + customer.id, customer )
      commit('UPDATE_CUSTOMER', response.data)
    },
    async removeCustomer({ commit }, id ) {
      await axios.delete(baseURL + id)
      commit('DELETE_CUSTOMER', id)
    }
  },
  mutations: {
    SET_CUSTOMERS(state, customers) {
      state.customers = customers
    },
    NEW_CUSTOMER(state, customer) {
      state.customers.unshift(customer)
    },
    DELETE_CUSTOMER(state, id) {
      state.customers = state.customers.filter(customer => customer.id !== id)
    },
    UPDATE_CUSTOMER(state, updatedCustomer) {
      const index = state.customers.findIndex(customer => customer.id === updatedCustomer.id)
      if (index != -1)
        state.customers.splice(index, 1, updatedCustomer)
    }
  }
})