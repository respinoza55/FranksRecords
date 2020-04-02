<template>
  <div id="view-measure">

  <div v-if="editing === value.id" class="edit">
    <button @click="updateUser(value)">Save</button>
    <button class="muted-button" @click="editing = null">Cancel</button>
  </div>
  <div v-else class="edit">
    <button @click="editMode(value.id)">Edit Measurements</button>
  </div>

  <div v-if ="value.leftHand === true" class="checks">
    <label for="left" >
      Left Handed
    </label>
  </div>
  
  <div v-else>
    <label for="right">
    Right Handed
    </label>
  </div>

  <br>


  <div v-if="editing === value.id">
    <div class="pitches">
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch1">
          </div><div class="posLabel">pitch1</div>
      </div>
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch2">
        </div>
        <div class="posLabel">pitch2</div>
      </div>
    </div>

    <div class="pitches">
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch3">
          </div><div class="posLabel">pitch3</div>
      </div>
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch4">
        </div>
        <div class="posLabel">pitch4</div>
      </div>
    </div>

    <div class="pitches">
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch5">
          </div><div class="posLabel">pitch5</div>
      </div>
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch6">
        </div>
        <div class="posLabel">pitch6</div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="pitches">
      <div>
        <div class="values">
          {{ value.pitch1 }}
          </div><div class="posLabel">pitch1</div>
      </div>
      <div>
        <div class="values">
          {{ value.pitch2 }}
          </div><div class="posLabel">pitch2</div>
      </div>
    </div>

    <div class="pitches">
      <div>
        <div class="values">
          {{ value.pitch3 }}
          </div><div class="posLabel">pitch3</div>
      </div>
      <div>
        <div class="values">
          {{ value.pitch4 }}
          </div><div class="posLabel">pitch4</div>
      </div>
    </div>

    <div class="pitches">
      <div>
        <div class="values">
          {{ value.pitch5 }}
        </div><div class="posLabel">pitch5</div>
      </div>
      <div>
        <div class="values">
          {{ value.pitch6 }}
          </div><div class="posLabel">pitch6</div>
      </div>
    </div>
  </div>

  <div  v-if="editing === value.id" class="circles-container">
    <div class="inserts">
      <div>
        <input type="text" v-model="value.cut1">
        <div class="posLabel">CUT</div>
      </div>  
    </div>
    <div id="circle">
      <div>
          <label>
          <input type="text" v-model="value.drillBit1">
          FINGER</label>
      </div>
    </div>
    <div id="circle">
      <div><label>
        <input type="text" v-model="value.drillBit2">
        FINGER</label>
      </div>
    </div>
    <div class="inserts">
      <div>
        <input type="text" v-model="value.cut2">
        <div class="posLabel">CUT</div>
      </div>  
    </div>
  </div>
  <div v-else class="circles-container">
    <div class="inserts">
      <div>
        <div class="values">{{ value.cut1 }}</div>
        <div class="posLabel">CUT</div>
      </div>  
    </div>
    <div id="circle">
      <div>
          <label>
          <div>{{ value.drillBit1 }}</div>
          FINGER</label>
      </div>
    </div>
    <div id="circle">
      <div><label>
        <div>{{ value.drillBit2 }}</div>
        FINGER</label>
      </div>
    </div>
    <div class="inserts">
      <div>
        <div class="values">{{ value.cut2 }}</div>
        <div class="posLabel">CUT</div>
      </div>  
    </div>
  </div>

  <div v-if="editing === value.id" class="spans">
    <div>
      <input type="text" v-model="value.span1">
    </div>  
    <div><strong>SPANS</strong></div>
    <div>
      <input type="text" v-model="value.span2">
    </div>  
  </div>
  <div v-else class="spans">
    <div>
      <div class="values">{{ value.span1 }}</div>
    </div>  
    <div><strong>SPANS</strong></div>
    <div>
      <div class="values">{{ value.span2 }}</div>
    </div>  
  </div>
    
    <div v-if="editing === value.id" class="row">
      <div class="outside">
        <div>
          <input type="text" v-model="value.bPitch1">
          <div class="posLabel">pitch</div>
        </div>
      </div>

      <div id="circle">
        <div>
          <label>
            <input type="text" v-model="value.drillBit3">
          THUMB</label>
        </div>
      </div>

      <div class="outside">
        <div>
          <input type="text" v-model="value.bPitch2">
          <div class="posLabel">pitch</div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="outside">
        <div>
          <div class="values">{{ value.bPitch1 }}</div>
          <div class="posLabel">pitch</div>
        </div>
      </div>

      <div id="circle">
        <div>
          <label>
          <div>{{ value.drillBit3 }}</div>
          THUMB</label>
        </div>
      </div>

      <div class="outside">
        <div>
          <div class="values">{{ value.bPitch2 }}</div>
          <div class="posLabel">pitch</div>
        </div>
      </div>
    </div>

    <div v-if="editing === value.id" class="bottom">
      <div>
        <input type="text" v-model="value.bPitch3">
        <div class="posLabel">pitch</div>
      </div>
    </div>

    <div v-else class="bottom">
      <div>
        <div class="values">{{ value.bPitch3 }}</div>
        <div class="posLabel">pitch</div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'view-measure',
  data() {
    return {
      editing: null
    }
  },
  props: {
    value: {
      type: Object,
      required: true,
      width: {
        type: Number,
        default: 100
      }
    }
  },
  methods: {
    // clickedLeft() {
    //   if (this.value.rightHand === true)
    //     this.rightHand = false
    // },
    // clickedRight() {
    //   if (this.value.leftHand === true)
    //     this.leftHand = false
    // },
    ...mapActions(['updateCustomer']),
    updateUser() {
      this.updateCustomer(this.value);
      this.editing = null
    },
    editMode(id) {
      this.editing = id
    }
  }
}
</script>

<style scoped>
.edit {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.values {
  font-weight: bold;
  font-size: 30px;
  border: 2px solid black;
  height: 80px;
  padding: 10px;
  padding-bottom: 30px;
  width: 150px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}

.posLabel {
  text-align: center;
}

.checks {
  display: flex;
  justify-content: space-around;
}

.pitches {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 120px;
}

.inserts {
  display: flex;
  align-items: center;
}
.spans {
  display: flex;
  justify-content: space-between;
}

#circle {
  display: flex;
  align-items: center;
  border: 2px solid black;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 15px;
  justify-content: center;
  margin: 6px;
}

.circles-container {
  display: flex;
  justify-content: space-around;
}

.row {
  display: flex;
  justify-content: space-evenly;
}

.outside {
  display: flex;
  align-items: center;
  width: 100px;
  height: 200px;
  margin: 15px;
  justify-content: center;
}

.bottom {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

label {
  text-align: center;
  width: 100px;
  height: 20px;
}

input {
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 25px;

}
</style>