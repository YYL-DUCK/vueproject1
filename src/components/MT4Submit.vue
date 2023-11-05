<template>
  <div style="background-color: #eaf2f7">
    <PageHeader tittle="大学生创新创业管理平台"></PageHeader>
    <div class="MT4S_container">
      <div class="MT4S_navPath">
        <el-breadcrumb separator=" / ">
          <el-breadcrumb-item to="/">中期审核</el-breadcrumb-item>
          <el-breadcrumb-item>人员变动</el-breadcrumb-item>
        </el-breadcrumb>
        <hr />
      </div>
      <div class="MT4S_introduce">
        <div class="MT4S_gap"></div>
        <div>项目信息</div>
        <div class="MT4S_line1"></div>
      </div>
      <!-- 第一行 -->
      <div class="MT4S_line">
        <div class="MT4S_row1">项目名称</div>
        <div class="MT4S_row23">xxxx</div>
        <div class="MT4S_row4">项目编号</div>
        <div class="MT4S_row5">xxxx</div>
        <div class="MT4S_row6">项目类别</div>
        <div class="MT4S_row7">xxxx</div>
      </div>
      <div class="MT4S_line">
        <div class="MT4S_row1">负责人</div>
        <div class="MT4S_row2">姓名</div>
        <div class="MT4S_row3">xxxx</div>
        <div class="MT4S_row4">学号</div>
        <div class="MT4S_row5">xxxx</div>
        <div class="MT4S_row6">指导老师</div>
        <div class="MT4S_row7">xxxx</div>
      </div>
      <!-- 这里之后换成v-for，通过数据来渲染 -->
      <div class="MT4S_line">
        <div class="MT4S_row1">项目成员1</div>
        <div class="MT4S_row2">姓名</div>
        <div class="MT4S_row3">xxxx</div>
        <div class="MT4S_row4">学号</div>
        <div class="MT4S_row5">xxxx</div>
      </div>
      <div class="MT4S_line">
        <div class="MT4S_row1">起始时间</div>
        <div class="MT4S_row23">xxxxx</div>
        <div class="MT4S_row4">结束时间</div>
        <div class="MT4S_row5">xxxx</div>
      </div>
      <div class="MT4S_introduce">
        <div class="MT4S_gap"></div>
        <div>材料提交</div>
        <div class="MT4S_line1"></div>
      </div>
      <form action="">
        <div
          class="MT4S_line"
          style="
            background-color: #e3ebf5;
            margin: 0 40px;
            line-height: 60px;
            margin-top: 20px;
          "
        >
          <div class="MT4S_row1 MT4S_repositon">项目成果</div>
          <div style="display: inline-block; width: 900px">
            <div class="MT4S_3checek">
              <div>
                <input
                  type="checkbox"
                  name="hobby"
                  value="smoke"
                  v-model="project_ischecked1"
                />
                <div class="MT4S_text">论文</div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="hobby"
                  value="smoke"
                  v-model="project_ischecked2"
                />
                <div class="MT4S_text">专利/软著</div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="hobby"
                  value="smoke"
                  v-model="project_ischecked3"
                />
                <div class="MT4S_text">实物作品</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="project_ischecked1">
          <div class="MT4S_line">
            <div class="MT4S_row1">论文类</div>
            <div class="MT4S_row2">论文名称</div>
            <input type="text" class="MT4S_input1" />
            <div class="MT4S_2_row5">发表刊物名称</div>
            <input type="text" class="MT4S_input1" style="margin-left: 40px" />
          </div>
          <div class="MT4S_line">
            <div class="MT4S_row1"></div>
            <div class="MT4S_row2">检索类型</div>
            <input type="text" class="MT4S_input2" />
            <div class="MT4S_1of2">检索号</div>
            <input type="text" class="MT4S_input2" />
            <div class="MT4S_2_row5">第一作者</div>
            <input type="text" class="MT4S_input2" style="margin-left: 40px" />
          </div>
        </div>
        <div v-if="project_ischecked2">
          <div class="MT4S_line">
            <div class="MT4S_row1">专利/软著类</div>
            <div class="MT4S_row2">专利名称</div>
            <input type="text" class="MT4S_input1" />
            <div class="MT4S_2_row5">授权时间</div>
            <input type="text" class="MT4S_input2" style="margin-left: 40px" />
            <div class="MT4S_1of2">专利号</div>
            <input type="text" class="MT4S_input2" />
          </div>
        </div>
        <div v-if="project_ischecked3">
          <div class="MT4S_line">
            <div class="MT4S_row1">实物作品类</div>
            <div class="MT4S_row2">实物作品类</div>
            <input type="text" class="MT4S_input1" />
            <div class="MT4S_2_row5">第一作者</div>
            <input type="text" class="MT4S_input2" style="margin-left: 40px" />
          </div>
        </div>
      </form>
      <div class="MT4S_line">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :file-list="fileList"
        >
          <button class="usual_btn .MT4S_row1">添加附件</button>
          <div class="MT4S_tips">
            需要提交华北电力大学大学生创新创业训练计划结题报告书、大学生创新性实验计划项目研究总结报告、项目成果信息表、成果展示文件、个人总结、结项答辩PPT等相关文件，具体上交内容以各系教务处为准!
          </div>
        </el-upload>
      </div>
      <div class="bottom_3btn">
        <button class="usual_btn">返回</button>
        <button class="usual_btn">重置</button>
        <button class="usual_btn">提交</button>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>


<script>
import PageFooter from "./PageFooter.vue";
import PageHeader from "./PageHeader.vue";
export default {
  name: "MT4Submit",
  components: {
    PageFooter,
    PageHeader,
  },
  data() {
    return {
      project_ischecked1: false,
      project_ischecked2: false,
      project_ischecked3: false,
      fileList: [
        {
          name: "food.jpeg",
          url: "",
        },
      ],
    };
  },
};
</script>

<style>
.MT4S_container {
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
.MT4S_navPath hr {
  margin-top: 20px;
  border: 1.5px solid #545454;
}
.MT4S_introduce {
  margin-top: 20px;
}
.MT4S_introduce > div {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  vertical-align: middle;
  font-size: 24px;
}
.MT4S_gap {
  width: 10px;
  background-color: #0769b2;
  margin-right: 5px;
  line-height: 28px;
}
div.MT4S_line1 {
  width: 1247px;
  height: 1.5px;
  margin-left: 20px;
  background-color: #dcdcdc;
}
.MT4S_row1,
.MT4S_row2,
.MT4S_row3,
.MT4S_row4,
.MT4S_row5,
.MT4S_row6,
.MT4S_row7,
.MT4S_row23,
.MT4S_2_row5,
.MT4S_1of2 {
  display: inline-block;
  line-height: 28px;
  font-size: 20px;
}
.MT4S_row1 {
  width: 140px;
  text-align: right;
  padding-right: 30px;
}
.MT4S_row2 {
  width: 100px;
  margin-left: 30px;
}
.MT4S_row3 {
  width: 170px;
}
.MT4S_row23 {
  width: 270px;
  margin-left: 30px;
}
.MT4S_row4 {
  width: 150px;
  text-align: right;
  padding-right: 30px;
}
.MT4S_row5 {
  width: 250px;
}
.MT4S_row6 {
  width: 150px;
  text-align: right;
  padding-right: 30px;
}
.MT4S_row7 {
  width: 250px;
}
.MT4S_line {
  margin-top: 20px;
  padding: 0 10px;
}
.MT4S_repositon {
  margin-left: -40px;
}

.MT4S_3checek {
  display: flex;
  justify-content: space-between;
}
.MT4S_text {
  display: inline-block;
  font-size: 20px;
  margin-left: 20px;
}
.MT4S_input1 {
  vertical-align: middle;
  font-size: 20px;
  line-height: 20px;
  width: 330px;
  margin-left: 20px;
}
.MT4S_input2 {
  vertical-align: middle;
  font-size: 20px;
  line-height: 20px;
  width: 100px;
  margin-left: 20px;
}
.MT4S_2_row5 {
  width: 220px;
  text-align: right;
}
.MT4S_1of2 {
  margin-left: 40px;
  vertical-align: middle;
}
.usual_btn {
  display: inline-block;
  padding: 5px 10px;
  background-color: #0669b2;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
}
.MT4S_tips {
  vertical-align: top;
  display: inline-block;
  color: red;
  font-size: 14px;
  width: 600px;
  margin-left: 30px;
  font-weight: 600;
}
.bottom_3btn {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
</style>