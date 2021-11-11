import Layout from "layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/projects", component: () => import("pages/Projects.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
