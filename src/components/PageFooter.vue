<template>
  <!-- footer -->
  <div class="footer">
    <span>版权所有:华北电力大学（保定） </span>
    <img src="../assets/homepage2/image5.png" alt="" />
    <span>Dre@mtceh工作室</span>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped>
/* 底部 */
.footer {
  display: flex;
  height: 40px;
  background-color: #0669b2;
  justify-content: center;
  margin: 30px 0;
  color: white;
}
.footer img {
  height: 40px;
  vertical-align: middle;
}
.footer span {
  vertical-align: middle;
  line-height: 40px;
}
</style>