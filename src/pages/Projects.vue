<template>
  <div class="text-primary text-center">
    <br />

    <ResponsiveHeader>Projects</ResponsiveHeader>

    <br />

    <p class="text-h6">repos on my github</p>

    <br />

    <div v-if="!loaded">
      <br /><br /><br />

      <p class="text-h6">loading content</p>
      <br />
      <q-spinner color="primary" size="3em" :thickness="2" />
    </div>
    <div v-else>
      <div class="flex flex-center q-gutter-x-xl q-pa-sm row">
        <p
          v-for="(number, language) in statistics.languages"
          :key="language.key"
          class="text-h6"
        >
          {{ language }}: {{ number }}
        </p>
      </div>

      <br />

      <div
        :class="{ 'q-pa-xl': $q.screen.gt.md }"
        class="flex flex-center q-gutter-md row"
      >
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

            <div v-if="repo.language !== null" class="text-grey">
              lang: {{ repo.language }}
            </div>
          </q-card-section>

          <q-card-section
            v-if="repo.description != null"
            class="text-body1 q-pt-none"
            >{{ repo.description }}</q-card-section
          >

          <!-- am adaugat un div gol ca sa tina loc pentru divul de jos care e absolute bottom -->
          <div style="height: 53px"></div>
          <div class="absolute-bottom">
            <q-separator />

            <q-card-actions>
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

    <br />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ResponsiveHeader from "./../components/ResponsiveHeader.vue";

let repos = ref([]);
let loaded = ref(false);
let statistics = ref({ languages: {} });

async function getRepos() {
  const res = await fetch("https://api.github.com/users/vieruuuu/repos");
  const data = await res.json();

  repos.value = data;

  for (let i = 0; i < repos.value.length; i++) {
    const { language } = repos.value[i];

    // sa nu apara repouri fara limbaj setat
    if (language === null) {
      continue;
    }

    if (!statistics.value.languages[language]) {
      statistics.value.languages[language] = 1;
    } else {
      statistics.value.languages[language]++;
    }
  }

  loaded.value = true;
}

getRepos();
</script>

<style scoped>
.project {
  width: 300px;
}
.project-mini {
  width: 300px;
}
</style>
