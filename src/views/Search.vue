<template>
  <div id="search">
    <h1>This is our Search Page</h1>


    <select v-model="searchType">
      <option >Name</option>
      <option>Phone</option>
    </select>


    <input v-if="searchType === 'Phone'" type="text" v-model="search" placeholder="Search by Phone" />
    <input v-else                        type="text" v-model="search" placeholder="Search by Name" />
    <table>
      <caption>Display customer records</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Ball & Weight</th>
        </tr>
      </thead>
      <tbody v-if="searchType ==='Phone'">
        <tr v-for="(record, index) in searchPhones" :key="index">
          <td>
            <router-link :to="{
                    name: 'customer-details',
                    params: { id: record.id, name: record.full_name }
                }">
                    {{record.full_name}}
            </router-link>
          </td>
          <td>{{ record.phone }}</td>
          <td>{{ record.ballWeight }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="(record, index) in searchNames" :key="index">
          <td>
            <router-link :to="{
                    name: 'customer-details',
                    params: { id: record.id, name: record.full_name }
                }">
                    {{record.full_name}}
            </router-link>
          </td>
          <td>{{ record.phone }}</td>
          <td>{{ record.ballWeight }}</td>
          <router-view></router-view>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'search',
  data() {
    return {
      search: "",
      searchType: "Name"
    }
  },
  computed: {
    ...mapState([
      'customers'
    ]),
    searchNames: function() {
      return this.customers.filter(customer => {         
        return customer.full_name.toLowerCase().match(this.search.toLowerCase())
      })
    },
    searchPhones: function() {
      return this.customers.filter(customer => { 
        return customer.phone.match(this.search)
      })
    }
  },
  mounted() {
    this.$store.dispatch('loadCustomers')
  },
  watch: {
    searchType: function() {
      this.search = ""
    }
  }

}
</script>

<style scoped>
  select {
    width: 100px;
    height: 45px;
    margin-bottom: 20px;
  }

  input {
    width: 400px;
  }

  #router-link {
    font-weight: bolder;
  }
</style>