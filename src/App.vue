<template>
  <div id="app">
    <!-- 左侧菜单栏 -->
    <div class="router-menu" :class="{'has-close' : isCollapse, 'has-open' : !isCollapse}">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        :show-timeout="500"
        :hide-timeout="500"
        :default-active="routerName"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        :collapse="isCollapse"
       >
        <div class="project-name">
          <img src="./assets/logo.png" alt="">
          <span v-show="!isCollapse">projectName</span>
        </div>
        <!-- 不带下拉 -->
        <el-menu-item index="HomePage">
          <i class="el-icon-menu"></i>
          <span class="router-name" slot="title">HomePage</span>
        </el-menu-item>
        <el-menu-item index="RouterPush">
          <i class="el-icon-s-order"></i>
          <span class="router-name" slot="title">RouterPush</span>
        </el-menu-item>
        <el-menu-item index="Three">
          <i class="el-icon-s-data"></i>
          <span class="router-name" slot="title">Three</span>
        </el-menu-item>
        <!-- 带下拉 -->
        <el-submenu index="test1">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span class="router-name" slot="title">菜单设置</span>
          </template>
          <el-menu-item-group>
            <!-- <el-menu-item class="router-name" index="HomePage">HomePage</el-menu-item> -->
            <el-menu-item class="router-name" index="RouterPush"
              >RouterPush</el-menu-item
            >
            <el-menu-item class="router-name" index="Three">Three</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="header-user-info" :class="{'has-close-user' : isCollapse, 'has-open-user' : !isCollapse}">
      <div>
        <span>
          <i class="el-icon-s-operation" @click="changeCollapse"></i>
        </span>
        <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-if="preRouterName" :to="{ name: preRouterName }">{{preRouterName}}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: routerName }">{{routerName}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="user-info">
        <img src="./assets/logo.png" alt="">
        <span>
          <span>userName</span>
        </span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isCollapse: false,
      routerName: "", // 当前路由 左侧菜单高亮
      preRouterName: ""　// 跳转前路由
    };
  },
  watch: {
    "$route"(to,form,next){
      this.routerName = to.name;
      this.preRouterName = form.name;
    }
  },
  methods: {
    changeCollapse(){
      this.isCollapse = !this.isCollapse;
      let mainComponent = document.querySelector(".main-component");
      if (this.isCollapse){
        mainComponent.style.width = "calc(100% - 64px)";
        mainComponent.style.transition = "all 0.5s";
      }else{
        mainComponent.style.width = "calc(100% - 240px)";
        mainComponent.style.transition = "all 0.5s";
      }
    },
    handleSelect(menuName, keyPath) {
      this.routerName = menuName;
      this.$router.push({
        name: menuName
      });
    },
    handleOpen(menuName, keyPath) {
      // console.log(menuName);
      // console.log(keyPath);
    },
    handleClose(menuName, keyPath) {
      // console.log(menuName);
      // console.log(keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
// $width:240px;
.router-menu {
  float: left;
  width: 240px;
  height: 100%;
  .el-menu-vertical-demo {
    height: 100%;
  }
  .project-name {
    line-height: 64px;
    font-size: 22px;
    img {
      height: 22px;
      position: relative;
      top: 5px;
    }
  }
  .router-name {
    display: inline-block;
    width: 100px;
    text-align: left;
  }
  .el-menu-item-group {
    .el-menu-item {
      padding-left: 72px !important;
    }
  }
}
.has-close {
  width: 64px;
}
.has-open {
  width: 240px;
}
.header-user-info {
  float: right;
  width: calc(100% - 240px);
  height: 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .el-icon-s-operation {
    font-size: 24px;
    cursor: pointer;
    position: relative;
    left: 15px;
    bottom: 19px;
  }
  .breadcrumb {
    display: inline-block;
    line-height: 60px;
    padding-left: 30px;
  }
  .user-info {
    line-height: 64px;
    font-size: 16px;
    padding-right: 30px;
    img{
      height: 16px;
      position: relative;
      top: 5px; 
    }
  }
}
.has-close-user {
  width: calc(100% - 64px);
  transition: all 0.5s;
}
.has-open-user {
  width: calc(100% - 240px);
  transition: all 0.5s;
}
</style>
<style lang="scss">
.main-component {
  float: right;
  width: calc(100% - 240px);
  height: calc(100% - 60px);
  box-sizing: border-box;
  background-color: #eee;
  padding: 18px;
  .content-component {
    height: calc(100% - 24px);
    background-color: #fff;
    padding: 12px;
  }
}
</style>
