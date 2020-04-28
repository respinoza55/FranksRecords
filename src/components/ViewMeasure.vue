<template>
  <div id="view-measure">

  <div v-if="editing === value.id" class="edit">
    <button @click="updateUser(value)">Save</button>
    <button class="muted-button" @click="cancelEditUser">Cancel</button>
  </div>
  <div v-else class="edit">
    <button @click="editMode(value.id)">Edit Measurements</button>
  </div>

  <div v-if ="value.leftHand === true" class="checks">
    <label for="left" >
      Left Handed
    </label>
  </div>
  
  <div v-else class="checks">
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
          </div><div class="posLabel">High Pitch</div>
      </div>
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch2">
        </div>
        <div class="posLabel">High Pitch</div>
      </div>
    </div>

    <div class="pitches">
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch3">
          </div><div class="posLabel">Side Pitch</div>
      </div>
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch4">
        </div>
        <div class="posLabel">Side Pitch</div>
      </div>
    </div>

    <div class="pitches">
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch5">
          </div><div class="posLabel">Reverse Pitch</div>
      </div>
      <div>
        <div class="values">
          <input type="text" v-model="value.pitch6">
        </div>
        <div class="posLabel">Reverse Pitch</div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="pitches">
      <div>
        <div class="values">
          {{ value.pitch1 }}
          </div><div class="posLabel">High Pitch</div>
      </div>
      <div>
        <div class="values">
          {{ value.pitch2 }}
          </div><div class="posLabel">High Pitch</div>
      </div>
    </div>

    <div class="pitches">
      <div>
        <div class="values">
          {{ value.pitch3 }}
          </div><div class="posLabel">Side Pitch</div>
      </div>
      <div>
        <div class="values">
          {{ value.pitch4 }}
          </div><div class="posLabel">Side Pitch</div>
      </div>
    </div>

    <div class="pitches">
      <div>
        <div class="values">
          {{ value.pitch5 }}
        </div><div class="posLabel">Reverse Pitch</div>
      </div>
      <div>
        <div class="values">
          {{ value.pitch6 }}
          </div><div class="posLabel">Reverse Pitch</div>
      </div>
    </div>
  </div>

  <div  v-if="editing === value.id" class="circles-container">
    <div class="inserts">
      <div class="values">
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
      <div class="values">
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
    <div class="values">
      <input type="text" v-model="value.span1">
    </div>  
    <div><strong>SPANS</strong></div>
    <div class="values">
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
      <div class="values">
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
      beforeEdit: ""
    }
  },
  methods: {
    ...mapActions(['updateCustomer']),
    updateUser() {
      this.updateCustomer(this.value);
      this.editing = null
    },
    editMode(id) {
      this.editing = id
      this.beforeEdit = Object.assign({}, this.value)
    },
    cancelEditUser() {
      this.editing = null
      Object.assign(this.value, this.beforeEdit)
    }
  }
}
</script>

<style scoped>


#view-measure {
  /* background-image: url('/src/assets/lines.svg'); */
  background-image: url('~@/assets/lines.svg');
  background-color: red;
  padding-bottom: 30px;
}

/* 1600 x 900 middle screen */
@media screen and (max-width: 1600px) {
  #view-measure {
    background-color: green;
    background-image: url('~@/assets/linesSmall.svg');
  }
}


/* this is for the editing boxes */
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
  justify-content: center;
  font-size: 30px;
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
  margin: 30px 0;
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
  justify-content: center;
}

.outside {
  display: flex;
  align-items: center;
  width: 100px;
  height: 200px;
  margin: 30px;
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