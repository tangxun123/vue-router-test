<template>
  <div class="main-component">
    <div class="content-component">
      <div class="component-item">
        <el-switch
          v-model="switchValue"
          @change="changeSwitch"
          active-text="开"
          inactive-text="关"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
        <el-checkbox-group v-model="hasChecked">
          <el-checkbox v-for="item in checkList" :key="item" :label="item">{{item}}</el-checkbox>
        </el-checkbox-group>
        
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
      newArr: [],

      switchValue: false,
      hasChecked: [],
      checkList: ["复选框 A","复选框 B","复选框 C","复选框 D"]
    }
  },
  methods: {
    changeSwitch(){
      if (this.switchValue){
        this.hasChecked = this.$options.data().checkList;
      }else {
        this.hasChecked = [];
      }
    },
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
