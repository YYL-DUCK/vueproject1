<template>
  <!-- 悬浮暂停，离开启动 -->
  <div @mouseover="stoproll" @mouseleave="startroll" class="root">
    <!-- 图片，每次遍历所有图片，选择第idx个图片展示 -->
    <div
      v-for="(imageurl, index) in imageurl"
      :key="index"
      v-show="index === idx"
    >
      <img class="img" :src="imageurl" alt="" />
    </div>
    <!-- 底部小圆点 选择第idx个圆点添加active-->
    <!-- 悬浮第index个小圆点，展示第index个图片 -->
    <div class="bar">
      <span
        v-for="index in 8"
        :key="index"
        :class="{ active: index - 1 === idx }"
        @mousemove="changeidx(index - 1)"
      ></span>
    </div>
    <!-- 左右箭头 -->
    <div class="left_arrow" @click="front()">&lt;</div>
    <div class="right_arrow" @click="next()">&gt;</div>
  </div>
</template>

<script>
export default {
  name: "RollPicture",
  data() {
    return {
      imageurl: [
        require("../assets/homepage1/图片1.jpg"),
        require("../assets/homepage1/图片2.jpg"),
        require("../assets/homepage1/图片3.jpg"),
        require("../assets/homepage1/图片4.jpg"),
        require("../assets/homepage1/图片5.jpg"),
        require("../assets/homepage1/图片6.jpg"),
        require("../assets/homepage1/图片7.jpg"),
        require("../assets/homepage1/图片8.jpg"),
      ],
      idx: 0,
    };
  },
  methods: {
    autoplay() {
      this.idx++;
      if (this.idx >= 8) this.idx = this.idx - 8;
      if (this.idx < 0) this.idx = 8 + this.idx;
    },
    startroll() {
      this.play = setInterval(this.autoplay, 1000);
    },
    stoproll() {
      clearInterval(this.play);
    },
    changeidx(index) {
      this.idx = index;
    },
    next() {
      this.idx++;
      if (this.idx >= 8) this.idx = this.idx - 8;
      if (this.idx < 0) this.idx = 8 + this.idx;
    },
    front() {
      this.idx--;
      if (this.idx >= 8) this.idx = this.idx - 8;
      if (this.idx < 0) this.idx = 8 + this.idx;
    },
  },
  created() {
    this.startroll();
  },
};
</script>

<style scoped>
/* 图片 */
.img {
  width: 1200px;
  height: 500px;
  background-size: cover;
}
.bar {
  width: 240px;
  margin: 0 auto;
  margin-top: -24px;
}
/* 圆点 */
.bar span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 7px;
  background-color: black;
  margin: 0 10px;
}
.bar span.active {
  background-color: skyblue;
  width: 12px;
  height: 12px;
}
/* 箭头：以父相子绝定位设置 */
.root {
  position: relative;
}
.left_arrow {
  font-size: 50px;
  position: absolute;
  top: 200px;
  color: white;
  cursor: pointer;
}
.right_arrow {
  font-size: 50px;
  position: absolute;
  top: 200px;
  right: 0px;
  color: white;
  cursor: pointer;
}
</style>