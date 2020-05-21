<template>
  <div class="main-component">
    <div class="content-component">
      <div class="component-item">
        <some-value :obj="obj"></some-value>
        <el-table :data="tableData" border>
          <el-table-column label="序号" type="index" width="70" />
          <el-table-column prop="name" label="分词名称" width="80">
          </el-table-column>
          <el-table-column prop="prop" label="词性" width="80">
          </el-table-column>
          <el-table-column prop="type" width="90" label="词类">
          </el-table-column>
          <el-table-column prop="ciyi" label="词义" width="80">
          </el-table-column>
          <el-table-column prop="des" width="80" label="描述">
          </el-table-column>
          <el-table-column prop="jinyici" width="80" label="近义词">
          </el-table-column>
          <el-table-column prop="fanyici" width="80" label="反义词">
          </el-table-column>
          <el-table-column prop="xiang" width="80" label="相关词">
          </el-table-column>
        </el-table>
        <el-collapse accordion style="width:600px">
          <el-collapse-item>
            <span class="collapse-title" slot="title">
              一致性 Consistency<i class="header-icon el-icon-info"></i>
            </span>
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
            <div>
              在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <span class="collapse-title" slot="title">
              反馈 Feedback<i class="header-icon el-icon-info"></i>
            </span>
            <div>
              控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
            </div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item>
            <span class="collapse-title" slot="title">
              效率 Efficiency<i class="header-icon el-icon-info"></i>
            </span>
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>
              清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
            </div>
            <div>
              帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <span class="collapse-title" slot="title">
              可控 Controllability<i class="header-icon el-icon-info"></i>
            </span>
            <div>
              用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
            </div>
            <div>
              结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import SomeValue from "./component/SomeValue";
export default {
  components: {
    SomeValue
  },
  data() {
    return {
      obj: {
        ipt1: "",
        ipt2: ""
      },
      tableData: [
        {
          name: "张三",
          prop: "名词",
          type: "图谱问答",
          ciyi: "1",
          des: "123",
          jinyici: "李四",
          fanyici: "王五",
          xiang: "张四"
        },
        {
          name: "下午",
          prop: "名词",
          type: "图谱问答",
          ciyi: "1",
          des: "123",
          jinyici: "晌午",
          fanyici: "上午",
          xiang: "半晚"
        },
        {
          name: "水果",
          prop: "名词",
          type: "图谱问答",
          ciyi: "1",
          des: "123",
          jinyici: "苹果",
          fanyici: "杂粮",
          xiang: "蔬菜"
        }
      ]
    };
  },
  watch: {
    obj(a) {
      console.log(a);
    }
  },
  mounted() {
    // console.log(window.location)
  },
  methods: {}
};
</script>

<style scoped>
.content-component {
  /* display: flex; */
}
.component-item {
  width: 100%;
  height: 100%;
}
.collapse-title {
  flex: 1 0 90%;
  order: 1;
}

.el-collapse-item__header {
  flex: 1 0 auto;
  order: 2;
}
</style>
