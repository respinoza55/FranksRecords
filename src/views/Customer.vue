<template>
  <div id="customer-details">

    <h3><strong>Customer Details</strong></h3>
    <table>
      <caption>Display customer details</caption>
      <thead>
        <tr>
          <th  scope="col">Customer Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Ball & Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>

        <td>{{ this.user.full_name }}</td>
        <td>{{ this.user.phone }}</td>
        <td>{{ this.user.ballWeight }}</td>
      </tr>
      </tbody>
    </table>

    <ViewMeasure
      v-model="this.user"
      />

    <div v-if="editing === user.id">
      <h3><strong>Customer Notes</strong></h3>
      <p><textarea type="text" v-model="user.notes"></textarea></p>
      <button @click="updateNotes()">Save</button>
      <button @click="editing = null">Cancel</button>
    </div>

    <div v-else>
      <h3><strong>Customer Notes</strong></h3>
      <div class="notes">{{ this.user.notes }}</div>
      <button @click="editNotes(user.id)">Edit Notes</button>
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
    editNotes(id) {
      this.editing = id;
    },
    ...mapActions(['updateCustomer']),
    updateNotes() {
      this.updateCustomer(this.user);
      this.editing = null
      // console.log(value)
    }
  }
}
</script>

<style scoped>

#view-measure {
  border: 2px solid black;
  margin: auto;
  width: 60%;
  font-size: 25px;
}

.notes {
/* style="white-space: pre-line" */
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