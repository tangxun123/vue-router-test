<template>
  <div id="app">
    <div class="router-menu">
      <!-- separator 分隔符　  separator-class 可以用图标 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ name: 'HomePage' }"
          >HomePage</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ name: 'RouterPush', params: { id: 123 } }"
          >RouterPush</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ name: 'Three' }">Three</el-breadcrumb-item>
      </el-breadcrumb>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin: 20px 0; */
  height: 100%;
}
.router-menu,
.el-menu-vertical-demo {
  float: left;
  width: 300px;
  background-color: #141f29af;
  height: 100%;
  color: #ccc !important;
}
</style>
<style>
.main-component {
  float: right;
  width: calc(100% - 300px);
  height: 100%;
  border: 1px solid #eee;
  box-sizing: border-box;
}
</style>
