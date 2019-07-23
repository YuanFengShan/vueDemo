<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>事件修饰符-指令</h1>
    <hr>

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
</style>
