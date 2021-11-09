import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { Loading, Quasar } from "quasar";

import "quasar/src/css/index.sass";
import "@quasar/extras/animate/fadeIn.css";
import "@quasar/extras/animate/slideOutDown.css";
import "@quasar/extras/animate/slideInDown.css";

import App from "./App.vue";

import "./css/app.scss";

import {
  QBtn,
  QToolbarTitle,
  QRouteTab,
  QTabs,
  QToolbar,
  QHeader,
  QScrollArea,
  QPage,
  QPageContainer,
  QLayout,
} from "quasar";

import routes from "./routes";

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  Loading.show();
  next();
});

router.afterEach(() => {
  Loading.hide();
});

createApp(App, {
  components: {
    QBtn,
    QToolbarTitle,
    QRouteTab,
    QTabs,
    QToolbar,
    QHeader,
    QScrollArea,
    QPage,
    QPageContainer,
    QLayout,
  },
})
  .use(router)
  .use(Quasar, {
    config: {
      brand: {
        primary: "#fff100",
        secondary: "#26a69a",
        accent: "#9c27b0",

        dark: "#212121",

        positive: "#21ba45",
        negative: "#c10015",
        info: "#31ccec",
        warning: "#f2c037",
      },

      dark: true,
    },
  })
  .mount("#app");
