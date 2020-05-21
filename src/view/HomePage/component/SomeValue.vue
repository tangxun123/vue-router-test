<template>
  <div class="some-value">
    <el-input v-model="obj.ipt1"></el-input> <span>{{obj.ipt1}}</span>
    <br>
    <el-input v-model="obj.ipt2"></el-input> <span>{{obj.ipt2}}</span>
  </div>
</template>

<script>
export default {
  props: {
      obj:{
          type: Object,
          default(){
              return {}
          }
      }
  },
  data() {
    return {
      newArr: []
    };
  },
  mounted () {
    console.log(this.obj)  
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.some-value {
  // width: 20%;
  background-color: #fff;
}
.el-input{
  width: 320px;
  margin-bottom: 20px;
}
</style>
