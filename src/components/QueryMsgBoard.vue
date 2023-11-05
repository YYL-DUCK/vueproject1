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
            <el-table
              :data="tableData"
              style="width 100%"
              :header-cell-class-name="set_header"
              :cell-class-name="set_table"
            >
              <!-- 第一列 -->
              <el-table-column prop="info" label="公告名称" width="900">
              </el-table-column>
              <el-table-column prop="date" label="日期" width="297">
              </el-table-column>
            </el-table>
            <div class="QMB_Msg_pagination">
              <el-pagination
                layout="prev, pager, next"
                :page-size="5"
                :total="1000"
                :current-page="page"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
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
      page: 1,
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
  methods: {
    set_header({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) return "QMB_Msg_info_header1";
      if (columnIndex === 1) return "QMB_Msg_info_header2";
    },
    set_table({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) return "QMB_Msg_info_table1";
      if (columnIndex === 1) return "QMB_Msg_info_table2";
    },
  },
};
</script>

<style scoped>
/* 版心 */
.QMB_container {
  width: 1380px;
  margin: 0 auto;
  height: 700px;
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
  overflow: hidden;
}
.QMB_Msg_info_header1 {
  background: #0669b2 !important;
  display: inline-block;
  padding-left: 30px !important;
  width: 970px;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
.QMB_Msg_info_header2 {
  background: #0669b2 !important;
  width: 297px;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
.QMB_Msg_info_table1 {
  padding-left: 30px !important;
  color: #0669b2;
  font-size: 24px;
  height: 70px;
  line-height: 70px !important;
}
.QMB_Msg_info_table2 {
  color: #0669b2;
  font-size: 24px;
  height: 70px;
  line-height: 70px !important;
}
.el-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
}
</style>