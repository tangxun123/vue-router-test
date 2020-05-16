<template>
  <div>
    <div class="page-undefined">
      <img src="@/assets/imgs/pageUndefined.jpeg" alt="" />
      <p>
        <el-button type="primary" @click="backHomePage">返回首页</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backHomePage() {
      this.$router.push({
        name: "homePage"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.page-undefined {
  width: 700px;
  margin: 0 auto;
  text-align: center;
  padding-top: 220px;
  img {
    width: 100%;
  }
}
</style>
