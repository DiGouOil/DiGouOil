import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    component:()=>import('@/views/Main.vue'),
    children:[
      {
        path:"/",
        name:"home",
        component:()=> import('@/views/Home/Home.vue')
      },
      {
        path: "/input",
        name: "input",
        component: () => import('@/views/FoodManage/FoodManage.vue')
      },
      {
        path: "/date",
        name: "date",
        component: () => import('@/views/DateManage/DateManage.vue')
      },
      {
        path: "/set",
        name: "set",
        component: () => import('@/views/Set/Set.vue')
      }
    ]

  }
];

const router = new VueRouter({
  routes
});

export default router;
