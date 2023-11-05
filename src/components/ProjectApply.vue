<template>
  <div style="background-color: #eaf2f7">
    <div class="PA_header">
      <!-- logo -->
      <img
        class="PA_headr_image"
        src="../assets/management/logo_01.png"
        alt=""
      />
      <!-- 页面名称 -->
      <span>大学生创新创业管理平台</span>
    </div>
    <div class="PA_container">
      <div class="PA_navPath">
        <el-breadcrumb separator=" / ">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>项目申报</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="PA_tittle">华北电力大学大学生创新创业训练计划申请表</div>
      <form action="#" class="PA_form">
        <div>
          <label>
            <span>项目名称</span>
            <input style="width: 660px; margin-left: 40px" type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>项目类别</span>
            <div class="PA_type">
              <input type="checkbox" name="type" value="1" />
              <span>创新训练项目</span>
              <input type="checkbox" name="type" value="2" />
              <span>创页训练项目</span>
              <input type="checkbox" name="type" value="3" />
              <span>创业实践项目</span>
            </div>
          </label>
        </div>
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
        <ProjectPartner position="负责人"></ProjectPartner>
        <div v-for="item in Project_info.id_list" :key="item">
          <ProjectPartner
            position="成员"
            :deleteable="deleteable"
            :id="item"
          ></ProjectPartner>
        </div>
        <div class="PP_line1">
          <div>指导教师</div>
          <div>
            <label class="PP_base PP_name">
              <span>姓名</span>
              <input type="text" />
            </label>
          </div>
          <div>
            <label class="PP_base PP_select">
              <span>院系</span>
              <select name="from">
                <option value="1">计算机科学与技术</option>
                <option value="2">计算机技术</option>
                <option value="3">软件工程</option>
              </select>
            </label>
          </div>
          <div>
            <label class="PP_base PP_select">
              <span>专业</span>
              <select name="from">
                <option value="1">计算机科学与技术</option>
                <option value="2">计算机技术</option>
                <option value="3">软件工程</option>
              </select>
            </label>
          </div>
        </div>
        <div class="PP_line1">
          <div></div>
          <div>
            <label class="PP_base PP_name">
              <span id="teacher_id">教职工编号</span>
              <input type="text" />
            </label>
          </div>
          <div>
            <label class="PP_base PP_select">
              <span>职称</span>
              <select name="position">
                <option value="1">教授</option>
                <option value="2">副教授</option>
                <option value="3">讲师</option>
              </select>
            </label>
          </div>
          <div>
            <label class="PP_base PP_name">
              <span>电话</span>
              <input type="text" />
            </label>
          </div>
        </div>
        <div class="PP_line1">
          <div>企业导师</div>
          <div>
            <label class="PP_base PP_name">
              <span>姓名</span>
              <input type="text" />
            </label>
          </div>
          <div>
            <label class="PP_base PP_select">
              <span>院系</span>
              <select name="from">
                <option value="1">计算机科学与技术</option>
                <option value="2">计算机技术</option>
                <option value="3">软件工程</option>
              </select>
            </label>
          </div>
          <div>
            <label class="PP_base PP_select">
              <span>专业</span>
              <select name="from">
                <option value="1">计算机科学与技术</option>
                <option value="2">计算机技术</option>
                <option value="3">软件工程</option>
              </select>
            </label>
          </div>
        </div>
        <div class="PP_line1">
          <div></div>
          <div>
            <label class="PP_base PP_name">
              <span>职位</span>
              <input type="text" />
            </label>
          </div>
          <div>
            <label class="PP_base PP_name">
              <span>电话</span>
              <input type="text" />
            </label>
          </div>
        </div>
        <div class="PP_line1">
          <div></div>
          <div>
            <label class="PP_base PP_name">
              <span id="teacher_id">教职工编号</span>
              <input type="text" />
            </label>
          </div>
          <div>
            <label class="PP_base PP_select">
              <span>职称</span>
              <select name="position">
                <option value="1">教授</option>
                <option value="2">副教授</option>
                <option value="3">讲师</option>
              </select>
            </label>
          </div>
          <div>
            <label class="PP_base PP_name">
              <span>电话</span>
              <input type="text" />
            </label>
          </div>
        </div>
        <div class="PP_line1">
          <div id="PA_total_time">项目执行时间</div>
          <div id="PA_start_time">
            <label class="PP_base PP_name">
              <span style="margin-right: 20px">起始时间</span>
              <el-date-picker
                v-model="start"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </label>
          </div>
          <div id="PA_stop_time">
            <label class="PP_base PP_name">
              <span style="margin-right: 20px">结束时间</span>
              <el-date-picker
                v-model="end"
                type="date"
                placeholder="选择日期"
                disabled
              >
              </el-date-picker>
            </label>
          </div>
        </div>
        <div class="PP_line1">
          <div style="margin-top: 24px">项目简介</div>
          <span id="PA_tips">简述项目内容，控制在200字以内 </span>
        </div>
        <textarea
          name="general_describe"
          maxlength="200"
          class="general_describe"
        ></textarea>
        <div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="3"
            :file-list="fileList"
          >
            <div style="margin-top: 24px">
              <button type="button" id="PA_addfiles" class="PA_btn">
                <span>添加附件</span>
              </button>
            </div>
            <div
              slot="tip"
              style="
                display: inline-block;
                width: 600px;
                line-height: 18px;
                vertical-align: bottom;
                margin-bottom: -18px;
              "
            >
              <span id="PA_tips"
                >需要提交华北电力大学大学生创新创业训练计划立项申请表、立项ppt等相关文件 </span
              ><br />
              <span id="PA_tips2"
                >请自行到华北电力大学（保定）下载立项申请表等:http: /
                /zsfdasdgags
              </span>
            </div>
          </el-upload>
        </div>
        <div class="PA_bottom_btn">
          <button class="PA_addmember PA_btn" style="width: 80px">
            <span>重置</span>
          </button>
          <button class="PA_addmember PA_btn" style="width: 80px">
            <span>保存</span>
          </button>
          <button class="PA_addmember PA_btn" style="width: 80px">
            <span>提交</span>
          </button>
        </div>
      </form>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>
<script>
import ProjectPartner from "./ProjectPartner";
import PageFooter from "./PageFooter";
import { nanoid } from "nanoid";
export default {
  name: "ProjectApply",
  components: {
    ProjectPartner,
    PageFooter,
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
  computed: {
    end() {
      return new Date(this.start).getTime() + 3.156 * 10 ** 10;
    },
  },
  methods: {
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
.PA_header {
  background-color: #0669b2;
  margin-bottom: 10px;
}
.PA_headr_image {
  height: 80px;
  margin: 0 40px;
  vertical-align: bottom;
}
.PA_header > span {
  display: inline-block;
  font-size: 30px;
  vertical-align: middle;
  line-height: 80px;
}
.PA_container {
  width: 1380px;
  margin: 10px auto;
  /* height: 700px; */
  background-color: white;
  margin-top: 30px;
}
/* container header */
.PA_navPath {
  padding: 20px 60px 20px 60px;
  margin-bottom: 10px;
}
::v-deep .el-breadcrumb span {
  font-size: 20px;
}

.PA_tittle {
  width: 1300px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  background-color: #0669b2;
  font-size: 24px;
  margin: 0 auto;
  color: white;
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
.PA_type {
  margin-left: 40px;
  display: inline-block;
}
.PA_type > input {
  margin-left: 120px;
}
.PA_type span {
  font-size: 20px;
  color: black;
}
.PA_addmember {
  background-color: #0669b2;
  border: none;
  border-radius: 5px;
  margin-left: 40px;
}
.PA_btn > span {
  color: white;
  font-size: 18px;
  line-height: 36px;
  padding: 0 5px;
}
#PA_tips {
  color: red;
  font-size: 14px;
  vertical-align: bottom;
  line-height: 24px;
}
#PA_tips2 {
  color: black;
  font-size: 14px;
  vertical-align: bottom;
  line-height: 24px;
}
.PP_line1 {
  /* height: 36px; */
  font-size: 24px;
  line-height: 36px;
  color: #737373;
  /* margin-top: 24px; */
}
.PP_line1 > div {
  display: inline-block;
  width: 255px;
  margin-left: 50px;
  /* margin-top: 24px; */
}
.PP_line1 > div:first-child {
  text-align: right;
  width: 100px;
}
.PP_base > input {
  width: 180px;
  line-height: 30px;
  vertical-align: bottom;
  margin-left: 20px;
  padding: 0;
}
.PP_select > select {
  height: 34px;
  width: 184px;
  vertical-align: bottom;
  margin-left: 20px;
  font-size: 20px;
  color: black;
}
#teacher_id {
  margin-left: -72px;
}
#PA_total_time {
  width: 144px;
  margin-left: 5px;
}
#PA_start_time,
#PA_stop_time {
  width: 400px;
  /* margin-left: -5px; */
}
.general_describe {
  width: 960px;
  height: 180px;
  margin-left: 170px;
  resize: none;
  font-size: 18px;
}
#PA_addfiles {
  background-color: #0669b2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
::v-deep .el-icon-document {
  background-image: url("../assets/projectapply/文档.png");
  display: none;
}
.PA_bottom_btn {
  display: flex;
  justify-content: space-between;
  padding: 100px 100px;
}
</style>