<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="$route.path !== '/'" reveal class="bg-dark">
      <q-toolbar>
        <q-toolbar-title />
        <q-tabs
          class="text-grey"
          indicator-color="transparent"
          active-color="primary"
          shrink
          no-caps
        >
          <q-route-tab :ripple="false" label="home" to="/" />
          <q-route-tab :ripple="false" label="about" to="/about" />
          <q-route-tab :ripple="false" label="projects" to="/projects" exact />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="bg-dark">
        <q-scroll-area :style="{ height: appHeight }">
          <router-view v-slot="{ Component }">
            <transition
              mode="out-in"
              enter-active-class="animated slideInDown"
              leave-active-class="animated slideOutDown"
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </q-scroll-area>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { inject } from "vue";

const appHeight = inject("appHeight");
</script>
