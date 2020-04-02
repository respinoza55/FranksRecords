<template>
  <div id="enter-measure">
      <h1> {{ title }} </h1>

    <div v-if="saved" class="saved">
      The measurements are complete!
    </div>

    <div class="checks">
          <label for="left" >
            <input v-model="leftHand" type="checkbox" id="left" @click="clickedLeft"> Left Hand
          </label>

          <label for="right">
            <input v-model="rightHand" type="checkbox" id="right" @click="clickedRight">Right Hand
          </label>
    </div>

    <div class="pitches">
      <div>
        <label for="pitch1">
          <input name="pitch1" type="text" v-model="pitch1" placeholder="pitch1"/>
          </label>
      </div>
      <div>
        <label for="pitch2">
          <input name="pitch2" type="text" v-model="pitch2" placeholder="pitch2"/>      
          </label>
      </div>
    </div>

    <div class="pitches">
      <div>
        <label for="pitch3">
          <input name="pitch3" type="text" v-model="pitch3" placeholder="pitch3"/>      
          </label>
      </div>
      <div>
        <label for="pitch4">
          <input name="pitch4" type="text" v-model="pitch4" placeholder="pitch4"/>      
          </label>
      </div>
    </div>

    <div class="pitches">
      <div>
        <label for="pitch5">
          <input name="pitch5" type="text" v-model="pitch5" placeholder="pitch5"/>      
          </label>
      </div>
      <div>
        <label for="pitch6">
          <input name="pitch6" type="text" v-model="pitch6" placeholder="pitch6"/>      
          </label>
      </div>
    </div>

    <div class="circles-container">
      <div class="inserts">
        <div>
          <label for="finger0">
          <input name="finger0" type="text" v-model="cut1" placeholder="cut1"/>      
          CUT</label>
        </div>  
      </div>
      <div id="circle">
        <div>
            <label for="finger1">
            <input name="finger1" type="text" v-model="drillBit1" placeholder="drill bit"/>      
            FINGER</label>
        </div>      
      </div>
      <div id="circle">
        <div>
          <label for="finger2">
          <input name="finger2" type="text" v-model="drillBit2" placeholder="drill bit"/>
          FINGER</label>
        </div>
      </div>
      <div class="inserts">
        <div>
          <label for="finger0">
          <input name="finger0" type="text" v-model="cut2" placeholder="cut2"/>      
          CUT</label>
        </div>  
      </div>
		</div>

  <div class="spans">
    <div><input class="spanInput" type="text" v-model="span1" placeholder="total span"/></div>
    <div><strong>SPANS</strong></div>
    <div><input class="spanInput" type="text" v-model="span2" placeholder="total span"/></div>
  </div>
    
    <div class="row">
      <div class="outside">
        <input type="text" v-model="bPitch1" placeholder="pitch" />
      </div>
      <div id="circle">
        <div>
          <label for="thumb2">
          <input name="thumb2" type="text" v-model="drillBit3" placeholder="drill bit"/>
          THUMB</label>
        </div>
      </div>
      <div class="outside">
        <input type="text" v-model="bPitch2" placeholder="pitch" />
      </div>
    </div>
      <div class="bottom">
        <input type="text" v-model="bPitch3" placeholder="pitch" v-on:keydown.tab="measureComplete" />
      </div>
  </div>

</template>

<script>
export default {
  name: 'enter-measure',
  props: [
    'title'
  ],
  data() {
    return {
      saved: false,
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
      drillBit3: ""
    }
  },
  methods: {
    measureComplete() {
      this.$emit('measure:complete', { leftHand: this.leftHand,
                                  rightHand: this.rightHand,
                                  pitch1: this.pitch1,
                                  pitch2: this.pitch2,
                                  pitch3: this.pitch3,
                                  pitch4: this.pitch4,
                                  pitch5: this.pitch5,
                                  pitch6: this.pitch6,
                                  cut1: this.cut1,
                                  cut2: this.cut2,
                                  drillBit1: this.drillBit1,
                                  drillBit2: this.drillBit2,
                                  span1: this.span1,
                                  span2: this.span2,
                                  bPitch1: this.bPitch1,
                                  bPitch2: this.bPitch2,
                                  bPitch3: this.bPitch3,
                                  drillBit3:  this.drillBit3 })

      // this.leftHand = false;
      // this.rightHand = false;
      // this.pitch1 = ""
      // this.pitch2 = ""
      // this.pitch3 = ""
      // this.pitch4 = ""
      // this.pitch5 = ""
      // this.pitch6 = ""
      // this.cut1 = ""
      // this.cut2 = ""
      // this.drillBit1 = ""
      // this.drillBit2 = ""
      // this.span1 = ""
      // this.span2 = ""
      // this.bPitch1 = ""
      // this.bPitch2 = ""
      // this.bPitch3 = ""
      // this.drillBit3 = ""


                                  this.saved=true
    },
    clickedLeft() {
      if (this.rightHand === true)
        this.rightHand = false
    },
    clickedRight() {
      if (this.leftHand === true)
        this.leftHand = false
    }
  },
}
</script>

<style scoped>

  .saved {
    text-align: center;
    font-size: 25px;
    color: red;
  }

  .pitches {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    height: 80px;
  }
  
  #thumbs {
    border-style: solid;
    padding: 20px;
  }
  .inserts {
    display: flex;
    align-items: center;
  }
  .spans {
    display: flex;
    justify-content: space-between;
  }

  .fingers {
    margin: 0 auto;
    padding: 0;
    justify-content: center;
    width: 200px;
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

  .checks {
    display: flex;
    justify-content: space-around;
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
    /* width: 150px; */
    /* margin: 0 auto; */
  }

  input, label {
    text-align: center;
    width: 100px;
  }

  label {
    width: 100px;
    height: 20px;
  }
</style>