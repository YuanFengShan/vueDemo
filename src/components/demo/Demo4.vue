<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>属性绑定-指令</h1>
    <span v-bind:title="name">鼠标悬停这里试试-----------指令绑定title属性</span>
    <br>
    <input type="text"
           v-bind:value="name"><span>-----------绑定value属性</span>
    <br>
    <p v-html="aTag"></p>

  </div>
</template>
<script>
export default {
  data () {
    return { name: '小菜鸟', age: 18, sex: '男', operationNumber: 0, aTag: ' <a href="http://www.baidu.com" target="_blank">www.baidu.com(通过属性绑定指令渲染的标签)</a>' }
  },
  methods: {
    operation: function () {
      // if (this.name === '男') {
      //   console.log('等于男')
      //   this.name = '女'
      // } else {
      //   console.log('等于女')
      //   this.name = '男'
      // }
      // debugger
      // this.operationNumber += 1
      return '方法中返回值'
    }
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
