<template>
    <div class="mt-6">
        <input 
          type="text" 
          :placeholder="template" 
          class="w-56 text-2xl bg-gray-300 p-e rounded-lg focus:outline-none"
          v-model="number"
          v-on:change="sendPhone">
    </div>
</template>

<script>
export default {
  name: 'telephone',
  props: [
    'template'
  ],
  data() {
    return {
      number: ''
    }
  },
  watch: {
    number() {
      this.number = this.number.replace(/[^0-9]/g, '')
        .replace(/^(\d{3})(\d{3})(\d{4})/g, '($1) $2-$3')
        .substr(0, this.template.length)
    }
  },
  methods: {
    sendPhone() {
      this.$emit('send:phone', this.number )
    }
  }
}
</script>

<style scoped>

</style>