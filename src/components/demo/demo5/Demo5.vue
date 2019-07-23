<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>组件</h1>
    <hr>
    <p class="title">文件方式:局部组件</p>
    <Demo5Item></Demo5Item>
    <pre v-highlightjs="sourcecode"><code class="javascript">
      注意:局部组件使用顺序:创建组件文件->编写文件->引入文件->声明本页面使用此组件->使用此组件
      </code></pre>

  </div>
</template>
<script>
import Demo5Item from './Demo5Item'
export default {
  components: {
    Demo5Item
  },
  data () {
    return {}
  },
  methods: {

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
</style>
