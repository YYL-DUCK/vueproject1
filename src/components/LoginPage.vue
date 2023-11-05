<template>
  <div class="root">
    <img class="background" src="../assets/loginpage/login.png" alt="" />
    <!-- 登录框 -->
    <div class="login_container">
      <div class="introduction">
        <img src="../assets/loginpage/img1.png" alt="" />
        <span>用户登录</span>
      </div>
      <hr />
      <form action="#">
        <div class="usrname">
          <img src="../assets/loginpage/img2.png" alt="" />
          <input type="text" />
        </div>
        <div class="pwd">
          <img src="../assets/loginpage/img3.png" alt="" />
          <input type="password" />
        </div>
        <input type="submit" value="登录" class="login_btn" />
      </form>
      <div class="forget_pwd"><a href="#">忘记密码</a></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  width: 100%;
}
.root {
  position: relative;
}
.login_container {
  background-color: #ffffff;
  width: 350px;
  height: 250px;
  position: absolute;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  padding: 50px 50px;
}
.introduction {
  font-size: 0px;
}
.introduction span {
  display: inline-block;
  line-height: 52px;
  font-size: 28px;
  vertical-align: bottom;
  margin-left: 10px;
}
.usrname,
.pwd {
  width: 340px;
  height: 37px;
  margin-top: 20px;
  /* background-color: skyblue; */
  border-radius: 10px;
  border: 1.5px solid black;
  overflow: hidden;
  font-size: 0px;
}
.usrname img,
.pwd img {
  height: 37px;
  width: 38px;
  margin: 0 6px;
}
.usrname input,
.pwd input {
  height: 37px;
  width: 290px;
  font-size: 20px;
  line-height: 37px;
  border: none;
  padding: 0;
  vertical-align: top;
  outline: none;
}
.login_btn {
  width: 340px;
  height: 40px;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 24px;
  background-color: #1890e6;
  color: white;
  border: none;
}
.forget_pwd {
  position: absolute;
  right: 60px;
  margin-top: 20px;
}
</style>