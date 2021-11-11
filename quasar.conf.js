/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli/quasar-conf-js

/* eslint-env node */
const ESLintPlugin = require("eslint-webpack-plugin");
const { configure } = require("quasar/wrappers");

module.exports = configure(function (ctx) {
  return {
    // disabled for js reduction
    vendor: {
      disable: true,
    },
    // https://v2.quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://v2.quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli/boot-files
    boot: [],

    // https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: ["app.scss"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // "roboto-font-latin-ext", // this or either 'roboto-font', NEVER both!
      // 'roboto-font', // optional, you are not bound to it
      "material-icons", // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: "hash", // available values: 'hash', 'history'

      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: true, // https://v2.quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      extractCSS: true,

      // https://v2.quasar.dev/quasar-cli/handling-webpack
      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
      chainWebpack(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);
      },

      // mergi ma ca daca andrei e suparat nu mi da bissimo
      // disable quasar auto import
      extendWebpack(cfg, { isServer, isClient }) {
        if (isClient) {
          // delete the auto import loader
          for (const rule of cfg.module.rules) {
            if (!rule.use) {
              continue;
            }

            if (
              rule.use.length &&
              (rule.use[0].loader.endsWith("transform-quasar-imports.js") ||
                rule.use[0].loader.endsWith("auto-import-quasar.js"))
            ) {
              rule.use.splice(0, 1);
              break;
            }
          }
        }
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: true, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      config: {
        dark: true,
        loadingBar: {
          color: "primary",
        },
      },

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // actually disabled in extendWebpack
      importStrategy: "auto",
      components: [
        "QBtn",
        "QToolbarTitle",
        "QRouteTab",
        "QTabs",
        "QToolbar",
        "QHeader",
        "QScrollArea",
        "QPage",
        "QPageContainer",
        "QLayout",
      ],
      directives: [],

      // Quasar plugins
      plugins: ["LoadingBar", "Notify"],
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations,
    animations: ["slideInDown", "slideOutDown"],
  };
});
