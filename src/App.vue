<template>
  <div id="app">
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  methods: {
    addCustomer(customer) {
      const lastId = this.customers.length > 0
        ? this.customers[this.customers.length - 1].id
        : 0;
    const id = lastId + 1;
    const newCustomer = {...customer, id};
    this.customers = [...this.customers, newCustomer];
    },
    deleteCustomer(id) {
      this.customers = this.customers.filter(
        customer => customer.id !== id
      )
    },
    editCustomer(id, updatedCustomer) {
      this.customer = this.customers.map(customer =>
        customer.id === id ? updatedCustomer : customer
      )
    }
  }
}
</script>

<style>
  /* input {
    color: white;
  } */

  .input:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  #app {
    padding: 20px;
  }

  button {
    background: #009435;
    border: 1px solid #009435;
    margin: 10px;
  }

  h1 {
    text-align: center;
    padding-bottom: 40px;
    padding-top: 20px;
  }
  
  td {
    padding: 20px;
    padding-left: 0px;
    font-size: 20px;
  }

</style>
