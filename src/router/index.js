import VueRouter from "vue-router"

import Animation from '../pages/mainPage.vue'
import Documentation from '../pages/howToUse.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Animation
        },
        {
            path: '/documentation',
            component: Documentation
        }
      ]
  })