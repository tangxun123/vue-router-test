<template>
  <div>
    <div class="page-undefined">
      1111children
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    "$route"(to,from,next){
      console.log(to)
      console.log(from)
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
</style>
