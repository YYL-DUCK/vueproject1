<template>
  <div>
    <div class="M_header">
      <!-- logo -->
      <img
        class="M_headr_image"
        src="../assets/management/logo_01.png"
        alt=""
      />
      <!-- 页面名称 -->
      <span>大学生创新创业管理平台</span>
      <router-link to="/">
        <img
          class="M_back_home"
          src="../assets/management/back_home.png"
          alt=""
        />
      </router-link>
      <router-link class="M_login" to="/loginpage">登录</router-link>
    </div>
    <div class="M_nav">
      <router-link to="/management/managetable1" class="M_table_nav">
        <img src="../assets/management/img1.png" alt="" />
        <span>立项审核</span>
      </router-link>
      <router-link to="/management/managetable2" class="M_table_nav">
        <img src="../assets/management/img2.png" alt="" />
        <span>进展记录</span>
      </router-link>
      <router-link to="/management/managetable3" class="M_table_nav">
        <img src="../assets/management/img3.png" alt="" />
        <span>中期审核</span>
      </router-link>
      <router-link to="/management/managetable4" class="M_table_nav">
        <img src="../assets/management/img4.png" alt="" />
        <span>结项审核</span>
      </router-link>
    </div>
    <div class="M_show_table">
      <div>
        <!-- <Managetable1></Managetable1> -->
        <router-view name="MT"></router-view>
      </div>
    </div>
  </div>
</template>



<script>
import Managetable1 from "./Managetable1.vue";
export default {
  name: "Management",
  components: {
    Managetable1,
  },
};
</script>

<style scoped>
.M_header {
  background-color: #0669b2;
}
.M_headr_image {
  height: 80px;
  margin: 0 40px;
  vertical-align: bottom;
}
.M_header > span {
  display: inline-block;
  font-size: 30px;
  vertical-align: middle;
  line-height: 80px;
  color: white;
}
.M_back_home {
  margin-left: 750px;
  vertical-align: middle;
  margin-right: 20px;
}
.M_login {
  vertical-align: middle;
  background-color: #0669b2;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;
}
.M_nav {
  width: 200px;
  display: inline-block;
  height: calc(100vh - 80px);
  background-color: #1e272c;
}
.M_table_nav {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.M_table_nav > img {
  vertical-align: top;
  margin-bottom: -5px;
  margin-left: -5px;
}
.M_table_nav > span {
  margin-left: 10px;
  vertical-align: top;
  color: white;
  font-size: 18px;
  line-height: 30px;
}
.M_show_table {
  display: inline-block;
  width: 1170px;
  margin-top: 50px;
  margin-left: 100px;
  vertical-align: top;
}
</style>