<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed, provide } from "vue";

const $q = useQuasar();

provide(
  "appHeight",
  computed(() => $q.screen.height - 50 + "px")
);
</script>
