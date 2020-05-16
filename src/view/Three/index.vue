<template>
  <div class="main-component">
    <div class="content-component">
      <div class="component-item">
        Three
        <br>
        <el-button @click="goChildren">goChildren</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newArr: []
    }
  },
  mounted () {
  },
  methods: {
    goChildren(){
      this.$router.push({
        name: "children",
      })
    }
  }
}
</script>

<style scoped>
.component-item {
  width: 100%;
  height: 100%;
}
</style>
