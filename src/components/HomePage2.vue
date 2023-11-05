<template>
  <div>
    <!-- header -->
    <div class="header">
      <!-- logo -->
      <img class="headr_image" src="../assets/homepage2/logo1.png" alt="" />
      <!-- 页面名称 -->
      <span>工程训练中心</span>
      <!-- 登录按钮 -->
      <!-- <button>登录</button> -->
      <router-link class="login HP1_first_btn" to="/changepassword"
        >修改密码</router-link
      >
      <router-link class="login" to="/loginpage">登录</router-link>
      <!--  -->
    </div>
    <!-- container -->
    <div class="main">
      <div class="container">
        <!-- 公告栏 -->
        <div class="msg_board">
          <div class="msg_head">
            <div class="active">大创</div>
            <div>竞赛</div>
            <div>孵化项目</div>
            <div>机器人俱乐部</div>
          </div>
          <!-- msg_info -->
          <ul class="msg_info">
            <li v-for="(p, index) of board_info" :key="index">
              <div class="msg_time">
                <div class="msg_date">{{ p.date }}</div>
                <div class="msg_mongth">{{ p.year }}.{{ p.month }}</div>
              </div>
              <div class="msg_text">
                {{ p.info }}
              </div>
            </li>
            <div class="more_info">
              <div><div class="line"></div></div>
              <div class="more_info_text">查看更多 >></div>
              <div><div class="line"></div></div>
            </div>
          </ul>
        </div>
        <!-- 跳转栏 -->
        <div class="nav">
          <img src="../assets/homepage2/image1.png" alt="" />
          <router-link to="homepage1"><span>大创管理</span></router-link>
          <!-- <span>大创管理</span> -->
        </div>
        <div class="nav">
          <img src="../assets/homepage2/image2.png" alt="" />
          <span>竞赛管理</span>
        </div>
        <div class="nav">
          <img src="../assets/homepage2/image3.png" alt="" />
          <span>孵化项目管理</span>
        </div>
        <div class="nav">
          <img src="../assets/homepage2/image4.png" alt="" />
          <span>俱乐部管理</span>
        </div>
      </div>
    </div>
    <!-- foot -->
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from "./PageFooter.vue";
export default {
  name: "HomePage2",
  components: {
    PageFooter,
  },
  data() {
    return {
      board_info: [
        {
          date: 23,
          month: 12,
          year: 2020,
          info: "2020年12月大学生创新创业项目结项开始",
        },
        {
          date: 23,
          month: 12,
          year: 2020,
          info: "2020年12月大学生创新创业项目结项开始",
        },
        {
          date: 23,
          month: 12,
          year: 2020,
          info: "2020年12月大学生创新创业项目结项开始",
        },
        {
          date: 23,
          month: 12,
          year: 2020,
          info: "2020年12月大学生创新创业项目结项开始",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 顶部 */
.header {
  background-color: #0669b2;
}
.headr_image {
  height: 80px;
  margin: 0 40px;
  vertical-align: bottom;
}
.header > span {
  display: inline-block;
  font-size: 30px;
  /* margin-bottom: 10px; */
  vertical-align: middle;
  line-height: 80px;
}
.HP1_first_btn {
  margin-left: 550px;
}
.login {
  vertical-align: middle;
  background-color: #0669b2;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;
}

/* 展示栏 */
.container {
  width: 1240px;
  margin: 0 auto;
  /* background-color: skyblue; */
}
.msg_board {
  margin: 0 auto;
  margin-top: 40px;
  width: 1000px;
  margin-left: 80px;
  background-size: cover;
  background: url(../assets/homepage2/background.png) no-repeat center center;
}
.msg_head div {
  display: inline-block;
  font-size: 22px;
  margin-left: 40px;
  padding: 4px 16px;
  cursor: pointer;
}
.active {
  color: white;
  background-color: #59a7ec;
}
.msg_info li {
  height: 120px;
  list-style-type: none;
  border-top: black solid 1px;
  display: flex;
}
.msg_time,
.msg_text {
  display: inline-block;
}

.msg_time {
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  justify-content: center;
  color: #0669b2;
}

.msg_text {
  line-height: 120px;
  /* vertical-align: middle; */
  font-size: 22px;
  margin-left: 30px;
  cursor: pointer;
}

.msg_date {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
}
.msg_mongth {
  font-size: 18px;
  text-align: center;
}
.more_info div {
  display: inline-block;
  line-height: 22px;
  vertical-align: middle;
}
.line {
  width: 400px;
  height: 0.8px;
  background-color: black;
}
.more_info_text {
  width: 160px;
  text-align: center;
  color: #888888;
  cursor: pointer;
}
.nav {
  display: inline-block;
  /* background-color: #59a7ec; */
  font-size: 0px;
  width: 300px;
  line-height: 45px;
  margin-top: 20px;
}
.nav:nth-child(2n + 1) {
  background-color: #60b0f5;
}
.nav:nth-child(2n) {
  background-color: #1b87e5;
}
.nav img {
  width: 45px;
  margin: 0 25px;
  vertical-align: middle;
}
.nav span {
  font-size: 26px;
  color: white;
  line-height: 45px;
  vertical-align: middle;
  cursor: pointer;
  /* text-decoration: none; */
}
/* 删除链接的下划线 */
a {
  text-decoration: none;
}
</style>