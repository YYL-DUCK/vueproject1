<template>
  <div id="app">
    <!-- <HomePage2></HomePage2> -->
    <!-- <HomePage1></HomePage1> -->
    <!-- <LoginPage></LoginPage> -->
    <!-- <ChangePassword></ChangePassword> -->
    <!-- <QueryMsgBoard></QueryMsgBoard> -->
    <!-- <MsgBoardDetail></MsgBoardDetail> -->
    <!-- <Management></Management> -->
    <!-- <ProjectDetails></ProjectDetails> -->
    <!-- <ProjectApply></ProjectApply> -->
    <!-- <test></test> -->
    <!-- <Managetable1></Managetable1> -->
    <!-- <router-link to="/">First page</router-link>
    <router-view name="first"></router-view> -->
    <!-- <router-view name="second"></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage2 from "../src/components/HomePage2.vue";
import HomePage1 from "../src/components/HomePage1.vue";
import LoginPage from "../src/components/LoginPage.vue";
import QueryMsgBoard from "../src/components/QueryMsgBoard.vue";
import MsgBoardDetail from "../src/components/MsgBoardDetail.vue";
import Management from "../src/components/Management.vue";
import Managetable1 from "../src/components/Managetable1.vue";
import ProjectApply from "../src/components/ProjectApply.vue";
import ChangePassword from "../src/components/ChangePassword.vue";
import ProjectDetails from "../src/components/ProjectDetails.vue";
import test from "../src/components/test.vue";

export default {
  name: "App",
  components: {
    HomePage2,
    HomePage1,
    LoginPage,
    ChangePassword,
    QueryMsgBoard,
    MsgBoardDetail,
    Management,
    Managetable1,
    ProjectApply,
    ProjectDetails,
    test,
  },
};
</script>

<style>
* {
  margin: 0px;
}
</style>
