const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/services", component: () => import("pages/Services.vue") },
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