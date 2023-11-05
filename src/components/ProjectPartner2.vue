<template>
  <div>
    <!--  -->
    <div class="PP_line1">
      <div>{{ this.position }}</div>
      <div>
        <label class="PP_base PP_name">
          <span>姓名</span>
          <input type="text" disabled="disabled" />
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
          <span>学号</span>
          <input type="text" />
        </label>
      </div>
      <div>
        <label class="PP_base PP_name">
          <span>分工</span>
          <input type="text" />
        </label>
      </div>
      <div>
        <label class="PP_base PP_name">
          <span>电话</span>
          <input type="text" />
        </label>
      </div>
      <button
        type="button"
        v-show="DelBtn_isShow"
        class="PP_del_btn"
        @click="del_parter"
      >
        删除成员
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPartner",
  props: ["position", "deleteable", "id"],
  data() {
    return {
      vc_show: true,
    };
  },
  computed: {
    DelBtn_isShow() {
      if (this.position === "成员") return true;
      else return false;
    },
  },
  methods: {
    del_parter() {
      // debugger;
      if (this.deleteable) {
        console.log(this.deleteable);
        this.$bus.$emit("delmember", this.id);
      }
    },
  },
};
</script>

<style scoped>
.PP_line1 {
  height: 36px;
  font-size: 24px;
  line-height: 36px;
  color: #737373;
  margin-top: 24px;
}
.PP_line1 > div {
  display: inline-block;
  width: 255px;
  margin-left: 50px;
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
}
.PP_del_btn {
  width: 100px;
  height: 34px;
  font-size: 16px;
  vertical-align: bottom;
  border-radius: 5px;
  border: none;
  /* background-color: #0669b2; */
  background-color: rgb(240, 47, 47);
  color: white;
  font-weight: 500;
  margin-left: 20px;
}
.PP_del_btn:hover {
  background-color: rgb(201, 34, 34);
  cursor: pointer;
}
</style>