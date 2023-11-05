<template>
  <div style="background-color: #eaf2f7">
    <PageHeader tittle="大学生创新创业管理平台"></PageHeader>
    <div class="MBD_container">
      <div class="MBD_navPath">
        <el-breadcrumb separator=" / ">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/">公告首页</el-breadcrumb-item>
          <el-breadcrumb-item>公告详情</el-breadcrumb-item>
        </el-breadcrumb>
        <hr />
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";
export default {
  name: "QueryMsgBoard",
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      value1: "",
      page: 1,
    };
  },
};
</script>

<style scoped>
/* 版心 */
.MBD_container {
  width: 1380px;
  margin: 0 auto;
  height: 700px;
  background-color: white;
  margin-top: 30px;
}
/* container header */
.MBD_navPath {
  padding: 36px 60px;
}
.el-breadcrumb span {
  font-size: 24px;
}
.MBD_navPath hr {
  margin-top: 30px;
  border: 1.5px solid #545454;
}
.MBD_table {
  margin: 0 90px;
}
</style>