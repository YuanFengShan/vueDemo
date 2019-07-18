<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>事件修饰符-指令</h1>
    <hr>
    <p class="title">once修饰符:点击事件只会触发一次</p>
    <button v-on:click.once="demo1_1">加1</button>
    <button @click.once="demo1_2">减1</button>
    <p>当前值:{{demo1_flag}}</p>
    <hr>

    <p class="title">stop修饰符:阻止事件传播</p>
    <div id="demo3_div"
         v-on:mousemove="demo3_update_xy">{{demo3_x}},{{demo3_y}}
      <div id="demo3_stop_div"
           v-on:mousemove.stop="">
        <span>停止</span></div>

    </div>

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
#demo3_stop_div {
  height: 40px;
  width: 200px;
  background-color: red;
}
</style>
