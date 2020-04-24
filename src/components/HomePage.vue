<template>
  <div class="hello">
    111
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log(window.location)
  }
}
</script>

<style scoped>
</style>
