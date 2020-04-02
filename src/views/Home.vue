<template>
  <div id="home">
    <h1>This is our Home Page</h1>

    <table>
      <caption>Display customer records</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Ball & Weight</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in orderedCustomers" :key="customer.id">
                    <td>
            <router-link :to="{
                    name: 'customer-details',
                    params: { id: customer.id, name: customer.full_name }
                }">
                    {{customer.full_name}}
            </router-link>
          </td>
          <td> {{ customer.phone }} </td>
          <td> {{ customer.ballWeight }} </td>
          <td><button v-on:click="deleteRecord(customer.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState([
      'customers'
    ]),
    orderedCustomers() {
      function compare(a, b) {
        if (a.id > b.id)
          return -1;
        if (a.id < b.id)
          return 1;
        return 0;
      }

      return this.customers.slice().sort(compare);
    }
  },
  methods: {
    ...mapActions(['removeCustomer']),
    deleteRecord(id) {
      this.removeCustomer(id);
    }
  },
  mounted() {
    this.$store.dispatch('loadCustomers')
  }
}
</script>

<style scoped>

</style>