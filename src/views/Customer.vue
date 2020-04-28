<template>
  <div id="customer-details">

    <h3><strong>Customer Details</strong></h3>
    <table>
      <caption>Display customer details</caption>
      <thead>
        <tr>
          <th scope="col">Customer Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Ball & Weight</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>

      <tbody v-if="editing === user.id">
        <tr>
          <td>
            <input type="text" v-model="user.full_name">
          </td>
          <td>
            <input type="text" v-model="user.phone">
          </td>
          <td>
            <input type="text" v-model="user.ballWeight">
          </td>
          <td>
            <button @click="update()">Save</button>
            <button @click="cancelEdit()">Cancel</button>
          </td>
        </tr>
      </tbody>

      <tbody v-else>
        <tr>
          <td>{{ this.user.full_name }}</td>
          <td>{{ this.user.phone }}</td>
          <td>{{ this.user.ballWeight }}</td>
          <td><button @click="edit(user.id)">Edit</button></td>
        </tr>
      </tbody>
    </table>

    <ViewMeasure
      v-model="this.user"
      />

    <div v-if="editing === user.id">
      <h3><strong>Customer Notes</strong></h3>
      <p><textarea type="text" v-model="user.notes"></textarea></p>
      <button @click="update()">Save</button>
      <button @click="cancelEdit()">Cancel</button>
    </div>

    <div v-else>
      <h3><strong>Customer Notes</strong></h3>
      <div class="notes">{{ this.user.notes }}</div>
      <button @click="edit(user.id)">Edit Notes</button>
    </div>

  </div>
</template>

<script>
import ViewMeasure from '@/components/ViewMeasure'
import { mapActions } from 'vuex'

export default {
  name: 'customer-details',
  data() {
    return {
      beforeEdit: "",
      editing: null
    }
  },
  components: {
    ViewMeasure
  },
  computed: {
    user() {
      return this.$store.getters.user(parseInt(this.$route.params.id));
    }
  },
  methods: {
    edit(id) {
      this.editing = id;
      this.beforeEdit = Object.assign({}, this.user)
    },
    ...mapActions(['updateCustomer']),
    update() {
      this.updateCustomer(this.user);
      this.editing = null
    },
    // updatePerson() {
    //   this.updateCustomer(this.user)
    // },
    cancelEdit() {
      this.editing = null
      Object.assign(this.user, this.beforeEdit)
    }
  }
}
</script>

<style scoped>
#view-measure {
  border: 2px solid black;
  margin: auto;
  width: 70%;
  font-size: 25px;
}

.groups {
  display: flex;
}

.columns {
  display: flex;
}

.notes {
  white-space: pre-line;
  font-size: 20px;
}

h3 {
  color: blue;
  margin-top: 10px;
}

.backBtn {
  padding-top: 20px;
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
}

p {
  font-size: 20px;
}

</style>