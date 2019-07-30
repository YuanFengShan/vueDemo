import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CourseCatalogue from '@/components/CourseCatalogue'
import Demo3 from '@/components/demo/Demo3'
import Demo4 from '@/components/demo/Demo4'
import Demo5 from '@/components/demo/demo5/Demo5'
import Demo6 from '@/components/demo/demo6/Demo6'
import Demo7 from '@/components/demo/demo7/Demo7'
import Demo8 from '@/components/demo/Demo8'
import Demo9 from '@/components/demo/Demo9'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CourseCatalogue',
      name: 'CourseCatalogue',
      component: CourseCatalogue
    },
    {
      path: '/Demo3',
      name: 'Demo3',
      component: Demo3
    },
    {
      path: '/Demo4',
      name: 'Demo4',
      component: Demo4
    },
    {
      path: '/Demo5',
      name: 'Demo5',
      component: Demo5
    },
    {
      path: '/Demo6',
      name: 'Demo6',
      component: Demo6
    },
    {
      path: '/Demo7',
      name: 'Demo7',
      component: Demo7
    },
    {
      path: '/Demo8',
      name: 'Demo8',
      component: Demo8
    },
    {
      path: '/Demo9',
      name: 'Demo9',
      component: Demo9
    }
  ],
  mode: 'history'
})
