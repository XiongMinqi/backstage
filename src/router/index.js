import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/index/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "",
        name: "index",
        component: Index
      }
    ]
  },
  {
    path: "/pagingtable",
    component: Home,
    children: [
      {
        path: "",
        name: "pagingtable",
        component: () => import("../views/pagingTable/PagingTable.vue")
      }
    ]
  },
  {
    path: "/label",
    component: Home,
    children: [
      {
        path: "",
        name: "label",
        component: import("../views/label/Label.vue")
      }
    ]
  },
  {
    path: "/picture",
    component: Home,
    children: [
      {
        path: "",
        name: "picture",
        component: () => import("../views/picture/Picture.vue")
      }
    ]
  },
  {
    path: "/published",
    component: Home,
    children: [
      {
        path: "",
        name: "published",
        component: () => import("../views/published/Published.vue")
      }
    ]
  },
  {
    path: "/publishedarticles",
    component: Home,
    children: [
      {
        path: "",
        name: "publishedarticles",
        component: () =>
          import("../views/publishedArticles/PublishedArticles.vue")
      }
    ]
  },
  {
    path: "/statistical",
    component: Home,
    children: [
      {
        path: "",
        name: "statistical",
        component: () => import("../views/statistical/Statistical.vue")
      }
    ]
  },
  {
    path: "/excel",
    component: Home,
    children: [
      {
        path: "",
        name: "excel",
        component: () => import("../views/excel/Excel.vue")
      }
    ]
  },
  {
    path: "/logout",
    component: Home,
    children: [
      {
        path: "",
        name: "logout",
        component: () => import("../views/logOut/LogOut.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
