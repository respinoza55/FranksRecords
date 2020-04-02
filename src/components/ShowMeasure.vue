<template>
  <div id="show-measure">

    <div class="circles-container">
      <div id="circle">
        <div>
            {{ drillBit1 }}
        </div>      
      </div>

      <div id="circle">
        <div>
          {{  drillBit2 }}
        </div>
      </div>
		</div>

    <div class="row">
      <div id="circle">
        <td>&larr;</td>
        <div>
          {{ drillBit3 }}
        </div>
      </div>       
    </div>

  </div>
</template>

<script>
export default {
  name: 'show-measure',
  props: [
    'drillBit1',
    'drillBit2',
    'drillBit3'
  ]
}
</script>

<style scoped>

   label {
     width: 100px;
     /* padding: 0; */
     height: 20px;
  }

  .fingers {
    margin: 0 auto;
    /* vertical-align: middle; */
    padding: 0;
    /* font: 40px; */
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
  }

  .circles-container {
    display: flex;
    justify-content: space-around;
  }

  .row {
    display: flex;
    justify-content: center;
  }

</style>