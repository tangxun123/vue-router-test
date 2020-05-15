<template>
  <div>
    <div class="page-undefined">
      <img src="../assets/pageUndefined.jpeg" alt="" />
      <p>
        <el-button type="primary" @click="backHomePage">返回首页</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {
    backHomePage() {
      this.$router.push({
        name: "HomePage"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.page-undefined {
  width: 700px;
  margin: 0 auto;
  padding-top: 220px;
  img {
    width: 100%;
  }
}
</style>
