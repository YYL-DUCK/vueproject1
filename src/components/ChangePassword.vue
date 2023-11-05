<template>
  <div>
    <div class="cppage">
      <img src="../assets/loginpage/changepwd.png" alt="" />
      <!-- head -->
      <!-- header -->
      <div class="cp_header">
        <!-- logo -->
        <img
          class="cp_headr_image"
          src="../assets/loginpage/logo1.png"
          alt=""
        />
        <!-- 页面名称 -->
        <span>大学生创新创业管理平台 </span>
        <div>
          <span>xxxx</span>
          <img class="cp_exit" src="../assets/loginpage/back.png" alt="" />
        </div>
      </div>
      <form class="changepwd_container" action="#">
        <div class="changepwd_container_header">
          <div>修改密码</div>
          <span>{{ usrinfo.name }}</span>
          <span>{{ usrinfo.studentid }}</span>
        </div>
        <input type="text" placeholder="请输入原密码" /><br />
        <input type="text" placeholder="请输入新密码" /><br />
        <input type="text" placeholder="请再次输入新密码" /><br />
        <div class="cp2btn">
          <button class="cp2btn1" type="button" @click="backhome()">
            返回
          </button>
          <button class="cp2btn1" type="submit">确认</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      usrinfo: { name: "xxx", studentid: "123456" },
    };
  },
  methods: {
    backhome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* 背景图 */
.cppage {
  position: relative;
}
.cppage img {
  width: 100%;
}
/* 顶部logo及退出栏 */
.cp_header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #0669b2;
}

img.cp_headr_image {
  /* margin: 0 40px; */
  width: 343px;
  vertical-align: bottom;
}
.cp_header > span {
  display: inline-block;
  font-size: 30px;
  color: white;
  vertical-align: middle;
  line-height: 90px;
}
.cp_header > div {
  display: inline-block;
  margin-left: 650px;
  line-height: 90px;
  font-size: 0px;
}
.cp_header > div > span {
  font-size: 28px;
  vertical-align: middle;
  color: white;
}
img.cp_exit {
  width: 40px;
  vertical-align: middle;
  margin-left: 40px;
}
/* 修改密码框 */
.changepwd_container {
  position: absolute;
  top: 150px;
  left: 400px;
  width: 680px;
  height: 480px;
  background-color: white;
  opacity: 0.8;
  padding: 30px 50px;
}
.changepwd_container_header {
  padding: 0 30px;
  width: 620px;
  height: 108px;
  border-bottom: 1px solid #0a70b9;
}
.changepwd_container_header div {
  font-size: 36px;
  font-weight: bold;
}
.changepwd_container_header span {
  font-size: 18px;
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
}
.changepwd_container_header span:nth-child(2) {
  margin-right: 20px;
}

.changepwd_container input {
  width: 550px;
  height: 60px;
  margin-top: 30px;
  font-size: 28px;
  margin-left: 65px;
  border-radius: 10px;
  border: 1px solid black;
}
.cp2btn {
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
}
.cp2btn1 {
  width: 120px;
  height: 60px;
  border-radius: 10px;
  border: 1.6px solid #04a7ec;
  font-size: 24px;
  /* background-color: #04a7ec 0; */
  background-color: rgba(4, 167, 236, 0);
  color: #04a7ec;
}
.cp2btn1:hover {
  width: 120px;
  height: 60px;
  border-radius: 10px;
  border: 1.6px solid #04a7ec;
  font-size: 24px;
  background-color: rgba(4, 167, 236, 1);
  color: white;
}
.cp2btn a:visited,
.cp2btn a:link {
  color: skyblue;
}
</style>