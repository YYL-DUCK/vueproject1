<template>
  <div>
    <el-table
      :data="table1_info"
      stripe
      style="width: 100%"
      :header-cell-class-name="set_header"
      ref="MT1_table"
    >
      <el-table-column prop="index" label="序号" width="60"> </el-table-column>
      <el-table-column prop="project_name" label="项目名称" width="190">
        <template slot-scope="scope">
          <router-link
            @click="handleCellClick1(scope.row, scope.column)"
            class="MT1_project_name"
            to="/ProjectDetails"
          >
            {{ scope.row.project_name }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="project_id" label="项目编号" width="100">
      </el-table-column>
      <el-table-column prop="teacher" label="指导教师" width="100">
      </el-table-column>
      <el-table-column prop="head" label="负责人" width="100">
      </el-table-column>
      <el-table-column prop="project_type" label="项目类型" width="130">
      </el-table-column>
      <el-table-column label="组内成员" width="130">
        <template slot-scope="scope">
          <div>
            <router-link
              class="MT1_project_name"
              v-if="scope.row.has_change_members === false"
              to="/changemembers"
            >
              {{ scope.row.project_members }}
            </router-link>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="project_status2" label="项目状态" width="130">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <!-- 通过status的字符串比较判断是否需要详情 -->
          <a
            class="MT1_project_name"
            v-if="scope.row.project_status2 === '中期审核未通过'"
            @click="handleCellClick2(scope.row, scope.column)"
          >
            详情
          </a>
          <a
            class="MT1_project_name"
            v-if="scope.row.project_status2 === '未中期审核'"
            @click="handleCellClick3(scope.row, scope.column)"
          >
            提交材料
          </a>
          <!-- 虽然在template内，但不是表格数据，无法应用scope,需要以外部方式来访问表格数据 -->
          <el-dialog
            title="中期审核未通过详情"
            :visible.sync="dialogVisible"
            width="30%"
          >
            <div>
              <div class="M1_failedinfo">项目名称:</div>
              <div class="M1_failedinfo">{{ temp_line.project_name }}</div>
              <div class="M1_failedinfo">项目编号:</div>
              <div class="M1_failedinfo">{{ temp_line.project_id }}</div>
              <div class="M1_failedinfo">项目级别:</div>
              <div class="M1_failedinfo">{{ temp_line.project_type }}</div>
            </div>
            <div>
              <div class="M1_failedinfo">负责人姓名:</div>
              <div class="M1_failedinfo">{{ temp_line.head }}</div>
              <div class="M1_failedinfo">学号:</div>
              <div class="M1_failedinfo">{{ temp_line.head }}</div>
              <div class="M1_failedinfo">指导教师:</div>
              <div class="M1_failedinfo">{{ temp_line.teacher }}</div>
            </div>
            <div>
              <span>中期审核未通过原因</span>
              <div>the reason</div>
            </div>
            <div style="margin: 0 auto; width: 75px">
              <button class="PD_back" @click="go_back()">返回</button>
            </div>
            <span slot="footer" class="dialog-footer"> </span>
          </el-dialog>
          <el-dialog
            title="中期审核未通过详情"
            :visible.sync="dialogVisible2"
            width="30%"
          >
            <div>
              <div class="M1_failedinfo">项目名称:</div>
              <div class="M1_failedinfo">{{ temp_line.project_name }}</div>
              <div class="M1_failedinfo">项目编号:</div>
              <div class="M1_failedinfo">{{ temp_line.project_id }}</div>
              <div class="M1_failedinfo">项目级别:</div>
              <div class="M1_failedinfo">{{ temp_line.project_type }}</div>
            </div>
            <div>
              <div class="M1_failedinfo">负责人姓名:</div>
              <div class="M1_failedinfo">{{ temp_line.head }}</div>
              <div class="M1_failedinfo">学号:</div>
              <div class="M1_failedinfo">{{ temp_line.head }}</div>
              <div class="M1_failedinfo">指导教师:</div>
              <div class="M1_failedinfo">{{ temp_line.teacher }}</div>
            </div>
            <div style="margin-left: 40px">
              <el-upload
                class="PD_upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :limit="3"
                :file-list="fileList"
              >
                <button class="">提交材料</button>
              </el-upload>
            </div>
            <span slot="footer" class="dialog-footer"> </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="100"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Managetable1",
  data() {
    return {
      dialogVisible: false,
      dialogVisible2: false,
      temp_line: 0,
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
      table1_info: [
        {
          index: "1",
          project_name: "a",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_members: "a,b",
          project_status: "立项审核未通过",
          project_status2: "中期审核未通过",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "b",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_members: "a,b",
          project_status: "立项审核中",
          project_status2: "中期审核中",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "c",
          project_id: "123",
          teacher: "刘某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_members: "a,b",
          project_status: "立项审核未通过",
          project_status2: "中期审核通过",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "d",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_members: "a,b",
          project_status: "立项审核中",
          project_status2: "未中期审核",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "e",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_status: "立项审核中",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "f",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_status: "立项审核中",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "g",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_status: "立项审核中",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "h",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_status: "立项审核中",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "i",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_status: "立项审核中",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "j",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_status: "立项审核中",
          operate: "详情",
          has_change_members: false,
        },
        {
          index: "1",
          project_name: "k",
          project_id: "123",
          teacher: "王某某",
          head: "xxx",
          department: "计算机系",
          project_type: "校级",
          start_time: "2022-10-2",
          project_status: "立项审核中",
          operate: "详情",
          has_change_members: false,
        },
      ],
    };
  },
  methods: {
    set_header() {
      return "MT1";
    },
    handleCellClick2(row, col) {
      this.dialogVisible = true;
      this.temp_line = row;
      // console.log(this.idx);
    },
    handleCellClick3(row, col) {
      this.dialogVisible2 = true;
      this.temp_line = row;
      // console.log(this.idx);
    },
    go_back() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style scoped>
.MT1 {
  text-align: center;
  background-color: #0769b2 !important;
}
::v-deep .el-table th.el-table__cell {
  background-color: #0769b2 !important;
  color: black;
}
/* 条纹的颜色 */
::v-deep .el-table__row--striped > .el-table__cell {
  background-color: #d4e5f9 !important;
}
/* 所有单元格居中 */
::v-deep .el-table div.cell {
  text-align: center !important;
}
.MT1_project_name {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}
/* 项目申请失败详情 */
::v-deep .el-dialog {
  width: 50% !important;
  text-align: left;
}
::v-deep .el-dialog__header {
  background-color: #cee1f0;
}

::v-deep .el-pagination {
  text-align: center;
}

.M1_failedinfo {
  display: inline-block;
  width: 135px;
}
</style>