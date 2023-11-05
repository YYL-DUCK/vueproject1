<template>
  <div style="background-color: #eaf2f7">
    <PageHeader tittle="大学生创新创业管理平台"></PageHeader>
    <div class="CM_container">
      <div class="CM_navPath">
        <el-breadcrumb separator=" / ">
          <el-breadcrumb-item to="/">中期审核</el-breadcrumb-item>
          <el-breadcrumb-item>人员变动</el-breadcrumb-item>
        </el-breadcrumb>
        <hr />
      </div>
      <div class="CM_introduce">
        <div class="CM_gap"></div>
        <div>项目信息</div>
        <div class="CM_line1"></div>
      </div>
      <!-- 第一行 -->
      <div class="CM_line">
        <div class="CM_row1">项目名称</div>
        <div class="CM_row23">xxxx</div>
        <div class="CM_row4">项目编号</div>
        <div class="CM_row5">xxxx</div>
        <div class="CM_row6">项目类别</div>
        <div class="CM_row7">xxxx</div>
      </div>
      <div class="CM_line">
        <div class="CM_row1">负责人</div>
        <div class="CM_row2">姓名</div>
        <div class="CM_row3">xxxx</div>
        <div class="CM_row4">学号</div>
        <div class="CM_row5">xxxx</div>
        <div class="CM_row6">指导老师</div>
        <div class="CM_row7">xxxx</div>
      </div>
      <!-- 这里之后换成v-for，通过数据来渲染 -->
      <div class="CM_line">
        <div class="CM_row1">项目成员1</div>
        <div class="CM_row2">姓名</div>
        <div class="CM_row3">xxxx</div>
        <div class="CM_row4">学号</div>
        <div class="CM_row5">xxxx</div>
      </div>
      <div class="CM_introduce">
        <div class="CM_gap"></div>
        <div>人员变动</div>
        <div class="CM_line1"></div>
      </div>
      <form action="#" class="PA_form">
        <div>
          <label>
            <span>主要负责人及团队成员</span>
            <button
              class="PA_addmember PA_btn"
              type="button"
              @click="handle_addmember"
              ref="PA_addmember"
            >
              <span>添加成员</span>
            </button>
            <span v-if="Project_info.isMax" id="PA_tips"
              >每个项目的项目成员（包括负责人）总共不超过五人
            </span>
            <span v-if="Project_info.isMin" id="PA_tips"
              >每个项目的项目成员（不包括负责人）不少于一人
            </span>
          </label>
        </div>
        <div v-for="item in Project_info.id_list" :key="item">
          <ProjectPartner
            position="成员"
            :deleteable="deleteable"
            :id="item"
            :isdisabled="true"
          ></ProjectPartner>
        </div>
      </form>
      <div class="menu_btn">
        <button class="PA_addmember PA_btn" @click="go_back">
          <span>返回</span>
        </button>
        <button class="PA_addmember PA_btn"><span>提交</span></button>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import PageFooter from "./PageFooter.vue";
import PageHeader from "./PageHeader.vue";
import ProjectPartner from "./ProjectPartner";
export default {
  name: "ChangeMembers",
  components: {
    PageFooter,
    PageHeader,
    ProjectPartner,
  },
  data() {
    return {
      Project_info: {
        studentnum: 2,
        isMax: false,
        isMin: true,
        // 初始
        id_list: [1],
        form_info: {},
      },
      temp_id: 0,
      deleteable: false,
      start: new Date().getTime(),
      fileList: [
        {
          name: "food.jpeg",
          url: "",
        },
      ],
    };
  },
  methods: {
    go_back() {
      this.$router.go(-1);
    },
    handle_addmember() {
      if (this.Project_info.studentnum < 5) {
        this.temp_id = nanoid();
        this.Project_info.id_list.push(this.temp_id);
        this.Project_info.studentnum++;
        if (this.Project_info.studentnum >= 5) {
          this.Project_info.isMax = true;
        }
        this.Project_info.isMin = false;
        this.deleteable = true;
      }
      console.log(this.start, this.end);
    },
    handle_delmember(id) {
      // 判断能否修改数据
      if (this.Project_info.studentnum > 2) {
        // 修改数据
        this.Project_info.id_list = this.Project_info.id_list.filter(
          (item) => item != id
        );
        this.Project_info.studentnum--;
        // 修改数据后立马更新状态
        if (this.Project_info.studentnum <= 2) {
          this.Project_info.isMin = true;
          // console.log(this.Project_info.isMin);
          // 需要把不能删除这件事情告诉子组件
          this.deleteable = false;
        }
        this.Project_info.isMax = false;
      }
    },
  },
  mounted() {
    // debugger;
    // console.log(this);
    this.$bus.$on("delmember", this.handle_delmember);
  },
  beforeDestroy() {
    this.$bus.$off("delmember");
  },
};
</script>

<style scoped>
.CM_container {
  width: 1380px;
  margin: 0 auto;
  /* height: 700px; */
  background-color: white;
  margin-top: 30px;
  padding: 24px 40px;
}
/* container header */
::v-deep .el-breadcrumb span {
  font-size: 20px;
}
.CM_navPath hr {
  margin-top: 20px;
  border: 1.5px solid #545454;
}
.CM_introduce {
  margin-top: 20px;
}
.CM_introduce > div {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  vertical-align: middle;
  font-size: 24px;
}
.CM_gap {
  width: 10px;
  background-color: #0769b2;
  margin-right: 5px;
  line-height: 28px;
}
div.CM_line1 {
  width: 1200px;
  height: 1.5px;
  margin-left: 20px;
  background-color: #dcdcdc;
}
.CM_row1,
.CM_row2,
.CM_row3,
.CM_row4,
.CM_row5,
.CM_row6,
.CM_row7,
.CM_row23 {
  display: inline-block;
  line-height: 28px;
  font-size: 20px;
}
.CM_row1 {
  width: 140px;
  text-align: right;
  padding-right: 30px;
}
.CM_row2 {
  width: 130px;
}
.CM_row3 {
  width: 170px;
}
.CM_row23 {
  width: 300px;
}
.CM_row4 {
  width: 150px;
  text-align: right;
  padding-right: 30px;
}
.CM_row5 {
  width: 250px;
}
.CM_row6 {
  width: 150px;
  text-align: right;
  padding-right: 30px;
}
.CM_row7 {
  width: 250px;
}
.CM_line {
  margin-top: 10px;
  padding: 0 10px;
}

.PA_addmember {
  background-color: #0669b2;
  border: none;
  border-radius: 5px;
  margin-left: 40px;
}
.PA_form {
  width: 1200px;
  margin: 0 auto;
  /* height: 900px; */
  /* background-color: skyblue; */
}
.PA_form label * {
  margin-top: 24px;
  font-size: 24px;
  color: #737373;
}
.PA_btn > span {
  color: white;
  font-size: 18px;
  line-height: 36px;
  padding: 0 5px;
  cursor: pointer;
}
#PA_tips {
  color: red;
  font-size: 14px;
  vertical-align: bottom;
  line-height: 24px;
}
.menu_btn {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}
</style>