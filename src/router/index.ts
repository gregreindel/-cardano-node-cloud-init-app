import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { routerBefore } from "./hooks";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Cardano Cloud-init",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  {
    path: "/result",
    name: "Download Cloud-init Files",
    component: () =>
      import(/* webpackChunkName: "result" */ "../views/result.vue"),
  },
  {
    path: "/help",
    name: "Help",
    component: () =>
      import(
        /* webpackChunkName: "instructions" */ "../views/instructions.vue"
      ),

    children: [
      {
        path: "basic",
        name: "helpBasicSetup",
        component: () =>
          import(
            /* webpackChunkName: "instructions" */ "../components/instructions/basicSetup.vue"
          ),

        props: true,
      },
      {
        path: "block",
        name: "helpSetupBlock",
        component: () =>
          import(
            /* webpackChunkName: "instructions" */ "../components/instructions/setupBlock.vue"
          ),

        props: true,
      },
      {
        path: "relay",
        name: "helpSetupRelay",
        component: () =>
          import(
            /* webpackChunkName: "instructions" */ "../components/instructions/setupRelay.vue"
          ),

        props: true,
      },
      {
        path: "dashboard",
        name: "helpSetupDashboard",
        component: () =>
          import(
            /* webpackChunkName: "instructions" */ "../components/instructions/setupDashboard.vue"
          ),

        props: true,
      },
      {
        path: "advanced",
        name: "helpSetupAdvanced",
        component: () =>
          import(
            /* webpackChunkName: "instructions" */ "../components/instructions/setupAdvanced.vue"
          ),

        props: true,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth", el: "#top" };
  },
  routes,
});

router.beforeEach(routerBefore);

export default router;
