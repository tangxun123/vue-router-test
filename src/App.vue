<template>
  <div id="app">
    <!-- 左侧菜单栏 -->
    <template v-if="routerNotFind">
      <div
        class="router-menu"
        :class="{ 'has-close': isCollapse, 'has-open': !isCollapse }"
      >
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#141f29"
          text-color="#fff"
          :show-timeout="500"
          :hide-timeout="500"
          :default-active="$route.name"
          @select="selectMenu"
          :collapse="isCollapse"
        >
          <div class="project-name">
            <img src="@/assets/imgs/logo.png" alt="" />
            <span v-show="!isCollapse" class="name">projectName</span>
          </div>
          <!-- 不带下拉 -->
          <el-menu-item index="homePage">
            <i class="el-icon-menu"></i>
            <span class="router-name" slot="title">HomePage</span>
          </el-menu-item>
          <el-menu-item index="routerPush">
            <i class="el-icon-s-order"></i>
            <span class="router-name" slot="title">RouterPush</span>
          </el-menu-item>
          <el-menu-item index="three">
            <i class="el-icon-s-data"></i>
            <span class="router-name" slot="title">Three</span>
          </el-menu-item>
          <el-menu-item index="undefind">
            <i class="el-icon-magic-stick"></i>
            <span class="router-name" slot="title">undefind</span>
          </el-menu-item>
          <!-- 带下拉 -->
          <template>
            <el-submenu index="test1">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span class="router-name" slot="title">菜单设置</span>
              </template>
              <el-menu-item-group  v-for="(route, i) in routesArr" :key="i">
                <el-menu-item v-if="route.name !== 'p404' && route.path !== '/'" class="router-name" :index="route.name"
                  >{{route.meta.title}}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </div>
      <div
        class="header-user-info"
        :class="{ 'has-close-user': isCollapse, 'has-open-user': !isCollapse }"
      >
        <div>
          <span>
            <i class="el-icon-s-operation" @click="changeCollapse"></i>
          </span>
          <el-breadcrumb
            class="breadcrumb"
            separator-class="el-icon-arrow-right"
          >
            <el-breadcrumb-item
              v-if="preRouterNameCN"
              :to="{ name: preRouterName }"
              >{{ preRouterNameCN }}</el-breadcrumb-item
            >
            <el-breadcrumb-item :to="{ name: routerName }">{{
              routerNameCN
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="user-info">
          <img src="@/assets/imgs/logo.png" alt="" />
          <span>
            <span>userName</span>
          </span>
        </div>
      </div>
    </template>
    <router-view />
  </div>
</template>

<script>
import router from "./router";
export default {
  name: "App",
  data() {
    return {
      routesArr: [], // 路由数组
      isCollapse: false,
      routerNameCN: "", // 当前路由 （中文名）
      routerName: "",
      preRouterNameCN: "", // 跳转前路由 （中文名）
      preRouterName: "",

      routerNotFind: true // 当路由跳转到404页面时
    };
  },
  watch: {
    $route(to, from, next) {
      this.routerName = to.name;
      this.preRouterName = from.name;

      if (to.name === "p404") {
        this.routerNotFind = false;
      } else {
        this.routerNotFind = true;
      }
      if (to.meta) {
        this.routerNameCN = to.meta.title;
      }
      if (from.meta) {
        this.preRouterNameCN = from.meta.title;
      }
    }
  },
  mounted() {
    this.routesArr = router.options.routes;
    console.log(this.routesArr);
    this.routesArr.forEach(item=>{
      console.log(item.meta.title)
    })
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
      let mainComponent = document.querySelector(".main-component");
      if (this.isCollapse) {
        mainComponent.style.width = "calc(100% - 64px)";
        mainComponent.style.transition = "all 0.5s";
      } else {
        mainComponent.style.width = "calc(100% - 240px)";
        mainComponent.style.transition = "all 0.5s";
      }
    },
    selectMenu(index, path) {
      this.$router.push({
        name: index
      });
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.router-menu {
  text-align: center;
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
    .name {
      color: #eee;
    }
  }
  .router-name {
    display: inline-block;
    width: 100px;
    font-size: 16px;
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
    img {
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
    overflow: auto;
  }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 4px; /*滚动条宽度*/
  height: 16px; /*滚动条高度*/
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px; /*滚动条的背景区域的圆角*/
  background-color: #eee; /*滚动条的背景颜色*/
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px; /*滚动条的圆角*/
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #aaa; /*滚动条的背景颜色*/
}
</style>
