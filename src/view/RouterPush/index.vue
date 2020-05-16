<template>
  <div class="main-component">
    <div class="content-component">
      <div class="component-item">222-router-push</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  watch: {
    "$route"(to,form,next){
      // console.log(to);
      // console.log(form);
      // console.log(next);
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.component-item {
  width: 100%;
  height: 100%;
}
</style>
