<template>
  <div style="background-color: #eaf2f7">
    <PageHeader tittle="大学生创新创业管理平台"></PageHeader>
    <div class="QMB_container">
      <div class="QMB_navPath">
        <el-breadcrumb separator=" / ">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>公告查询</el-breadcrumb-item>
        </el-breadcrumb>
        <hr />
      </div>
      <div class="QMB_table">
        <!-- 第一行搜索公告 -->
        <form action="#">
          <!-- 日期 -->
          <div>
            <div class="QMB_table_querytext">日期</div>
            <!-- 把prefix-icon设置成不存在的类，使得日历图片消失 -->
            <el-date-picker v-model="value1" type="date" id="QMB_date">
            </el-date-picker>
            <img src="../assets/querymsgboard/calendar.png" class="calendar" />
          </div>
          <!-- 系 -->
          <div>
            <div class="QMB_table_querytext">系别</div>
            <select name="" class="part">
              <option value="">计算机技术</option>
              <option value="">软件工程</option>
            </select>
            <img
              src="../assets/querymsgboard/down_arrow.png"
              alt=""
              class="down_arrow"
            />
          </div>
          <!-- 公告名 -->
          <div>
            <div class="QMB_table_querytext">公告名称</div>
            <input type="text" class="msg_name" />
          </div>
          <!-- 确认按钮 -->
          <button type="submit" class="QMB_search">查询</button>
        </form>
        <!-- 信息栏 -->
        <div class="QMB_Msg">
          <div class="QMB_Msg_info">
            <table>
              <thead class="QMB_Msg_info_header">
                <th class="QMB_one_col QMB_header">公告名称</th>
                <th class="QMB_two_col QMB_header">公告日期</th>
              </thead>
              <tbody>
                <tr>
                  <td class="QMB_one_col">{{ tableData[0].info }}</td>
                  <td class="QMB_two_col">{{ tableData[0].date }}</td>
                </tr>
                <tr>
                  <td class="QMB_one_col">{{ tableData[1].info }}</td>
                  <td class="QMB_two_col">{{ tableData[1].date }}</td>
                </tr>
                <tr>
                  <td class="QMB_one_col">{{ tableData[2].info }}</td>
                  <td class="QMB_two_col">{{ tableData[2].date }}</td>
                </tr>
                <tr>
                  <td class="QMB_one_col">{{ tableData[3].info }}</td>
                  <td class="QMB_two_col">{{ tableData[3].date }}</td>
                </tr>
                <tr>
                  <td class="QMB_one_col">{{ tableData[4].info }}</td>
                  <td class="QMB_two_col">{{ tableData[4].date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="QMB_Msg_pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";
export default {
  name: "QueryMsgBoard",
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      value1: "",
      tableData: [
        {
          date: "2016-05-02",
          info: "2021年12月大学生创新创业项目立项开始",
        },
        {
          date: "2016-05-02",
          info: "2021年12月大学生创新创业项目立项开始",
        },
        {
          date: "2016-05-02",
          info: "2021年12月大学生创新创业项目立项开始",
        },
        {
          date: "2016-05-02",
          info: "2021年12月大学生创新创业项目立项开始",
        },
        {
          date: "2016-05-02",
          info: "2021年12月大学生创新创业项目立项开始",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
/* 版心 */
.QMB_container {
  width: 1380px;
  margin: 0 auto;
  height: 800px;
  background-color: white;
  margin-top: 30px;
}
/* container header */
.QMB_navPath {
  padding: 36px 60px;
}
.el-breadcrumb span {
  font-size: 24px;
}
.QMB_navPath hr {
  margin-top: 10px;
  border: 1.5px solid #545454;
}
.QMB_table {
  margin: 0 90px;
}
/* 公告栏 */
.QMB_table_querytext {
  display: inline-block;
  text-align: center;
  padding: 0px 20px;
  height: 37px;
  line-height: 40px;
  border: 1.5px solid black;
  font-size: 24px;
  font-weight: 500;
  vertical-align: bottom;
}
.el-icon-date::before {
  display: none;
}
div.el-date-editor.el-input {
  width: 200px;
}
.QMB_table > form {
  margin-bottom: 20px;
}
.QMB_table > form > div {
  font-size: 0px;
  display: inline-block;
  margin-right: 40px;
  vertical-align: bottom;
  position: relative;
}

#QMB_date {
  border: 1.5px solid black;
  border-radius: 0px;
  border-left: 0px;
  margin-top: 0px;
  width: 200px;
}
.calendar {
  width: 38px;
  vertical-align: bottom;
  position: absolute;
  right: 0px;
}
.part {
  width: 200px;
  height: 40px;
  border: 1.5px solid black;
  border-left: none;
  font-size: 24px;
  appearance: none;
  padding-left: 20px;
}
.down_arrow {
  display: inline-block;
  position: absolute;
  right: 1.5px;
  top: 4px;
  line-height: 40px;
}
.msg_name {
  width: 200px;
  height: 37px;
  border: 1.5px solid black;
  border-left: none;
  font-size: 24px;
  appearance: none;
  padding: 0;
  padding-left: 20px;
}
.QMB_search {
  margin-left: 55px;
  width: 80px;
  height: 40px;
  background-color: #0669b2;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
/* 表格样式 */
.QMB_Msg_info {
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 0 40px;
  overflow: hidden;
}
.QMB_one_col {
  width: 800px;
  height: 20px;
  border-bottom: 1px solid #c4c4c4;
  font-size: 18px;
  padding-left: 40px;
  display: inline-block;
}
.QMB_two_col {
  width: 200px;
  height: 20px;
  border-bottom: 1px solid #c4c4c4;
  font-size: 18px;
}
.QMB_header {
  height: 50px;
  font-size: 24px;
  text-align: left;
  background-color: #0669b2;
}
</style>