<template>
  <div class="header">
    <!-- logo -->
    <img class="headr_image" src="../assets/homepage1/logo1.png" alt="" />
    <!-- 页面名称 -->
    <span>{{ tittle }} </span>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["tittle"],
};
</script>

<style scoped>
.header {
  background-color: #0669b2;
  margin-bottom: 10px;
}
.headr_image {
  height: 80px;
  margin: 0 40px;
  vertical-align: bottom;
}
.header > span {
  display: inline-block;
  font-size: 30px;
  vertical-align: middle;
  line-height: 80px;
}
</style>