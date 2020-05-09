<template>
  <div class="main-component">
    <div class="component-item">222-router-push</div>
    <router-view name="HomePage"/>
    <router-view name="Three"/>
  </div>
</template>

<script>
export default {
  name: 'RouterPush',
  data () {
    return {}
  },
  watch: {
    "$route"(to,form,next){
      console.log(to);
      console.log(form);
      console.log(next);
    }
  },
  mounted () {
    let arr = [{a:1},{b:2},{c:3}];
    let brr = [{d:4},...arr];
    console.log(brr)
  }
}
</script>

<style scoped>
.component-item {
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
</style>
