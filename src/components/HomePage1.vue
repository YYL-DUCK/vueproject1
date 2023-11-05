<template>
  <div>
    <!-- header -->
    <PageHeader tittle="大学生创新创业管理平台"></PageHeader>
    <!-- 版心 -->
    <div class="container">
      <!-- 轮播图 -->
      <RollPicture></RollPicture>
      <!-- 流程图 -->
      <img class="process" src="../assets/homepage1/process.png" alt="" />
      <!-- 公告栏 -->
      <div class="info_board">
        <!-- 左侧公告栏 -->
        <div class="info_board_head">
          <span>最新公告</span>
          <router-link to="querymsgboard">更多+</router-link>
          <hr />
          <div v-for="(info, index) in board_msg" :key="index">
            <router-link to="msgboarddetail">
              <div class="msg">{{ info.msg }}</div>
              <div class="date">{{ info.date }}</div>
            </router-link>
          </div>
        </div>
        <!-- 右侧三个图 -->
        <div class="info_board_image">
          <div>
            <router-link to="projectapply">
              <div class="img_container">
                <img src="../assets/homepage1/image1.png" alt="" />
              </div>
              <div class="text_container">项目申报</div>
            </router-link>
          </div>
          <div>
            <router-link to="management">
              <div class="img_container">
                <img src="../assets/homepage1/image2.png" alt="" />
              </div>
              <div class="text_container">项目管理</div>
            </router-link>
          </div>
          <div>
            <router-link to="querymsgboard">
              <div class="img_container">
                <img src="../assets/homepage1/image3.png" alt="" />
              </div>
              <div class="text_container">查询公告</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import RollPicture from "./RollPicture.vue";
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";
export default {
  name: "HomePage1",
  components: {
    RollPicture,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      board_msg: [
        { msg: "2021年12月大学生创新创业项目立项开始", date: "2012-12-23" },
        { msg: "2021年12月大学生创新创业项目立项开始", date: "2012-12-23" },
        { msg: "2021年12月大学生创新创业项目立项开始", date: "2012-12-23" },
        { msg: "2021年12月大学生创新创业项目立项开始", date: "2012-12-23" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
/* 流程图 */
.process {
  display: block;
  width: 1000px;
  margin: 0 auto;
}
/* 左下公告栏 */
.info_board_head {
  display: inline-block;
  width: 650px;
  margin-top: 50px;
}
.info_board_head > span {
  font-size: 35px;
}
.info_board_head > a {
  font-size: 24px;
  margin-left: 400px;
  font-style: italic;
}
.info_board_head hr {
  margin-top: 10px;
  border: 1.2px solid #cbcbcb;
}

.msg {
  display: inline-block;
  font-size: 24px;
  height: 70px;
  width: 500px;
  line-height: 70px;
  color: #494949;
  cursor: pointer;
}
.date {
  display: inline-block;
  font-size: 24px;
  height: 70px;
  color: #cbcbcb;
  font-weight: bold;
}
/* 右下图标 */
.info_board_image {
  display: inline-block;
  width: 550px;
  vertical-align: top;
  /* margin-top: 35px; */
}

div.img_container {
  width: 100px;
  height: 90px;
}
div.img_container img {
  height: 90px;
}
.info_board_image div:nth-child(1) img {
  background-color: #0669b2;
}
.info_board_image div:nth-child(2) img {
  background-color: #006a25;
}
.info_board_image div:nth-child(3) img {
  background-color: #f09450;
}
.info_board_image div:nth-child(1) div {
  background-color: #39a6f1;
}
.info_board_image div:nth-child(2) div {
  background-color: #009f3c;
}
.info_board_image div:nth-child(3) div {
  background-color: #f4b757;
}

.info_board_image > div {
  font-size: 0px;
  margin-top: 50px;
  margin-left: 100px;
  cursor: pointer;
}
.info_board_image .img_container {
  display: inline-block;
}
.info_board_image .text_container {
  font-size: 24px;
  display: inline-block;
  line-height: 90px;
  vertical-align: bottom;
  width: 350px;
  text-align: center;
  font-size: 40px;
  color: white;
  font-weight: bold;
}
</style>