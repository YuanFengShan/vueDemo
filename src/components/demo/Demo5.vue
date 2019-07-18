<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>绑定事件-指令</h1>
    <hr>
    <p class="title">单击事件</p>
    <button v-on:click="demo1_1">加1</button>
    <button @click="demo1_2">减1(简写方式绑定)</button>
    <p>当前值:{{demo1_flag}}</p>
    <hr>
    <p class="title">双击事件</p>
    <button v-on:dblclick="demo2_1">双击加1</button>
    <button @dblclick="demo2_2">双击减1(简写方式绑定)</button>
    <p>当前值:{{demo2_flag}}</p>
    <hr>
    <p class="title">鼠标移动事件</p>
    <div id="demo3_div"
         v-on:mousemove="demo3_update_xy">{{demo3_x}},{{demo3_y}}</div>
  </div>
</template>
<script>

export default {
  data () {
    return { demo1_flag: 0, demo2_flag: 0, demo3_x: 0, demo3_y: 0 }
  },
  methods: {
    demo1_1: function () {
      this.demo1_flag++
    },
    demo1_2: function () {
      this.demo1_flag--
    },
    demo2_1: function () {
      this.demo2_flag++
    },
    demo2_2: function () {
      this.demo2_flag--
    },
    demo3_update_xy: function (event) {
      this.demo3_x = event.offsetX
      this.demo3_y = event.offsetY
    }

  }
}
</script>
<style scoped>
h1 {
  text-align: center;
}
.title {
  text-align: center;
}
#demo3_div {
  padding: 0px, 100px;
  height: 100px;
  text-align: center;
  border: 1px solid #333;
}
</style>
