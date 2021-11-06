<template>
  <div class="text-primary text-center">
    <ResponsiveHeader>Projects</ResponsiveHeader>

    <br />

    fa sa apara o lista cu un fel de statistica nebuna 5 proiecte in js si asa
    mai departe

    <br />

    <div class="flex flex-center q-gutter-md row">
      <q-card
        v-for="repo in repos"
        :key="repo.key"
        flat
        bordered
        class="text-white"
        :class="$q.screen.lt.md ? 'project-mini' : 'project'"
      >
        <q-card-section>
          <div class="text-primary text-body1 text-weight-bold">
            {{ repo.name }}
          </div>

          <div class="text-grey">lang: {{ repo.language }}</div>
        </q-card-section>

        <q-card-section
          v-if="repo.description != null"
          class="text-body1 q-pt-none"
          >{{ repo.description }}</q-card-section
        >
        <div class="absolute-bottom">
          <q-separator />

          <q-card-actions>
            <q-btn class="text-primary" flat no-caps>more</q-btn>
            <q-btn
              type="a"
              target="_blank"
              class="text-primary"
              :href="repo.html_url"
              flat
              no-caps
              >view</q-btn
            >
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ResponsiveHeader from "./../components/ResponsiveHeader.vue";

let repos = ref([]);

async function getRepos() {
  const res = await fetch("https://api.github.com/users/vieruuuu/repos");
  const data = await res.json();
  console.log(data);
  repos.value = data;
}

getRepos();
</script>

<style scoped>
.project {
  width: 250px;
  min-height: 200px;
}
.project-mini {
  width: 150px;
  min-height: calc(200px + 100px);
}
</style>
