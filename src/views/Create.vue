<template>
    <div id="create">
      <h1>New Customer Record</h1>

      <div class="setupPage" >        
        <!-- <b-row>
          <b-col class="mr-6"> -->
        <div class="measure-containter">
          <enter-measure @measure:complete="measured"></enter-measure>
          <!-- </b-col> -->
        </div>
          <!-- <b-col> -->

          <div class="form-container">
            <form @submit.prevent="submitRecord">

              <label>Name</label>
              <input type="text" v-model="customer.full_name" placeholder="New Customer">
              <label>Phone</label>
              <telephone template="(XXX) XXX-XXXX" @send:phone="newPhone"></telephone>
              <label>Ball & Weight</label>
              <input type="text" v-model="customer.ballWeight" placeholder="Ball & Weight">
              <label>Notes</label>
              <textarea type="text" v-model="customer.notes" placeholder="Add notes"></textarea>

              <p v-if="success" class="success-message">
                ✅ Customer successfully added
              </p>
              <button>Add Customer</button>
            </form>
          </div>
          <!-- </b-col> -->
          
        <!-- </b-row> -->
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import EnterMeasure from '@/components/EnterMeasure'
import Telephone from '@/components/Telephone'

export default {
  name: 'create',
  components: {
    EnterMeasure,
    Telephone
  },
  data() {
    return {
      success: false,
      customer: {
        full_name: "",
        phone: "",
        ballWeight: "",
        notes: "",
        leftHand: false,
        rightHand: false,
        pitch1: "",
        pitch2: "",
        pitch3: "",
        pitch4: "",
        pitch5: "",
        pitch6: "",
        cut1: "",
        cut2: "",
        drillBit1: "",
        drillBit2: "",
        span1: "",
        span2: "",
        bPitch1: "",
        bPitch2: "",
        bPitch3: "",
        drillBit3:  ""
      }
    }
  },
  methods: {
    ...mapActions(['addCustomer']),
    submitRecord() {
      this.addCustomer(this.customer);
      this.customer = {
        full_name: "",
        phone: "",
        ballWeight: "",
        notes: ""
      }
      this.success = true;
    },
    measured(value) {
      this.customer.leftHand = value.leftHand
      this.customer.rightHand = value.rightHand
      this.customer.pitch1 = value.pitch1
      this.customer.pitch2 = value.pitch2
      this.customer.pitch3 = value.pitch3
      this.customer.pitch4 = value.pitch4
      this.customer.pitch5 = value.pitch5
      this.customer.pitch6 = value.pitch6
      this.customer.cut1 = value.cut1
      this.customer.cut2 = value.cut2
      this.customer.drillBit1 = value.drillBit1
      this.customer.drillBit2 = value.drillBit2
      this.customer.span1 = value.span1
      this.customer.span2 = value.span2
      this.customer.bPitch1 = value.bPitch1
      this.customer.bPitch2 = value.bPitch2
      this.customer.bPitch3 = value.bPitch3
      this.customer.drillBit3 = value.drillBit3
    },
    newPhone(value) {
      this.customer.phone = value
    }
  }
}
</script>

<style scoped>
#create {
}
.setupPage {
  display: flex;
}

.measure-containter {
  flex-grow: 1;
  border: 2px solid black;
  margin-right: 10px;
}

.form-container {
  flex-grow: 1;
  margin-right: 10px;
}

.container {
  display: flex;
  flex-direction: column;
}

/* @import'~bootstrap/dist/css/bootstrap.css' */
</style>