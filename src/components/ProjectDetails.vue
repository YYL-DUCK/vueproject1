<template>
  <div style="background-color: #eaf2f7">
    <PageHeader tittle="大学生创新创业管理平台"></PageHeader>
    <div class="PD_container">
      <div class="PD_navPath">
        <el-breadcrumb separator=" / ">
          <el-breadcrumb-item to="/">我的项目</el-breadcrumb-item>
          <el-breadcrumb-item>项目详情</el-breadcrumb-item>
        </el-breadcrumb>
        <hr />
      </div>
      <!-- 第一行 -->
      <div class="PD_line">
        <div class="PD_row1">项目名称</div>
        <div class="PD_row23">xxxx</div>
        <div class="PD_row4">项目编号</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6">项目类别</div>
        <div class="PD_row7">xxxx</div>
      </div>
      <hr style="margin-top: 20px" />
      <div class="PD_line">
        <div class="PD_row1">负责人</div>
        <div class="PD_row2">姓名</div>
        <div class="PD_row3">xxxx</div>
        <div class="PD_row4">院系</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6">专业</div>
        <div class="PD_row7">xxxx</div>
      </div>
      <div class="PD_line">
        <div class="PD_row1"></div>
        <div class="PD_row2">学号</div>
        <div class="PD_row3">xxxx</div>
        <div class="PD_row4">分工</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6">电话</div>
        <div class="PD_row7">xxxx</div>
      </div>
      <!-- 这里之后换成v-for，通过数据来渲染 -->
      <div class="PD_line">
        <div class="PD_row1">项目成员1</div>
        <div class="PD_row2">姓名</div>
        <div class="PD_row3">xxxx</div>
        <div class="PD_row4">院系</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6">专业</div>
        <div class="PD_row7">xxxx</div>
      </div>
      <div class="PD_line">
        <div class="PD_row1"></div>
        <div class="PD_row2">学号</div>
        <div class="PD_row3">xxxx</div>
        <div class="PD_row4">分工</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6">电话</div>
        <div class="PD_row7">xxxx</div>
      </div>
      <hr style="margin-top: 20px" />
      <div class="PD_line">
        <div class="PD_row1">指导教师</div>
        <div class="PD_row2">姓名</div>
        <div class="PD_row3">xxxx</div>
        <div class="PD_row4">院系</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6">专业</div>
        <div class="PD_row7">xxxx</div>
      </div>
      <div class="PD_line">
        <div class="PD_row1"></div>
        <div class="PD_row2">职工号</div>
        <div class="PD_row3">xxxx</div>
        <div class="PD_row4">职称</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6">电话</div>
        <div class="PD_row7">xxxx</div>
      </div>
      <hr style="margin-top: 20px" />
      <div class="PD_line">
        <div class="PD_row1">企业导师</div>
        <div class="PD_row2">姓名</div>
        <div class="PD_row3">xxxx</div>
        <div class="PD_row4">公司</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6">职位</div>
        <div class="PD_row7">xxxx</div>
      </div>
      <div class="PD_line">
        <div class="PD_row1"></div>
        <div class="PD_row2">擅长</div>
        <div class="PD_row3">xxxx</div>
        <div class="PD_row4">电话</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6"></div>
        <div class="PD_row7"></div>
      </div>
      <hr style="margin-top: 20px" />
      <div class="PD_line">
        <div class="PD_row1">起始时间</div>
        <div class="PD_row2">xxxx</div>
        <div class="PD_row3"></div>
        <div class="PD_row4">结束时间</div>
        <div class="PD_row5">xxxx</div>
        <div class="PD_row6"></div>
        <div class="PD_row7"></div>
      </div>
      <hr style="margin-top: 20px" />
      <div class="PD_line">
        <div class="PD_row1">项目简介</div>
        <div class="PD_row2"></div>
        <div class="PD_row3"></div>
        <div class="PD_row4"></div>
        <div class="PD_row5"></div>
        <div class="PD_row6"></div>
        <div class="PD_row7"></div>
      </div>
      <hr style="margin-top: 20px" />
      <div class="PD_line">
        <div class="PD_row1">
          <span>附件</span>
        </div>
        <el-upload
          class="PD_upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="3"
          :file-list="fileList"
        >
        </el-upload>
      </div>
      <div style="margin: 0 auto; width: 75px">
        <button class="PD_back" @click="go_back()">返回</button>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";
export default {
  name: "ProjectDetails",
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "",
        },
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
  },
  // mounted() {
  //   console.log(this.$router.go);
  // },
};
</script>

<style scoped>
.PD_container {
  width: 1000px;
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
.PD_navPath hr {
  margin-top: 20px;
  border: 1.5px solid #545454;
}
.PD_row1,
.PD_row2,
.PD_row3,
.PD_row4,
.PD_row5,
.PD_row6,
.PD_row7,
.PD_row23 {
  display: inline-block;
  line-height: 36px;
  font-size: 18px;
}
.PD_row1 {
  width: 90px;
  text-align: right;
  padding-right: 30px;
}
.PD_row2 {
  width: 80px;
}
.PD_row3 {
  width: 120px;
}
.PD_row23 {
  width: 200px;
}
.PD_row4 {
  width: 100px;
  text-align: right;
  padding-right: 30px;
}
.PD_row5 {
  width: 200px;
}
.PD_row6 {
  width: 100px;
  text-align: right;
  padding-right: 30px;
}
.PD_row7 {
  width: 200px;
}
.PD_line {
  margin-top: 20px;
  padding: 0 10px;
}
.PD_upload {
  margin-top: -25px;
  margin-left: 70px;
}
.PD_back {
  width: 75px;
  height: 40px;
  font-size: 20px;
  background-color: #0968b2;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
}
</style>