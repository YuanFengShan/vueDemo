import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CourseCatalogue from '@/components/CourseCatalogue'
import Demo3 from '@/components/demo/Demo3'
import Demo4 from '@/components/demo/Demo4'
import Demo5 from '@/components/demo/Demo5'
import Demo6 from '@/components/demo/Demo6'

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
    }
  ],
  mode: 'history'
})
