<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="$route.path !== '/'" reveal class="bg-dark text-primary">
      <q-toolbar>
        <q-toolbar-title />
        <div class="q-gutter-sm">
          <q-btn to="/" outline flat dense no-caps>home</q-btn>
          <q-btn to="/about" outline flat dense no-caps>about</q-btn>
          <q-btn to="/services" flat dense no-caps>services</q-btn>
          <q-btn to="/projects" flat dense no-caps>projects</q-btn>
          <q-btn to="/contact" flat dense no-caps>contact</q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="bg-dark">
        <transition
          mode="out-in"
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutDown"
        >
          <router-view />
        </transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {},
});
</script>
