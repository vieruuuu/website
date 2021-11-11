<template>
  <div class="">
    <div class="text-primary text-center">
      <br />
      <ResponsiveHeader>About</ResponsiveHeader>
      <br />
    </div>

    <div class="flex flex-center">
      <div class="text-center" style="width: 100%; max-width: 1200px">
        <div class="q-pa-x-md">
          <q-img
            src="./../assets/poza.png"
            class="rounded-borders"
            style="max-height: 200px; max-width: 200px"
            @click="dontClick"
          />
        </div>
        <div class="q-pa-md text-body1">
          <h5>skills</h5>

          <p>
            <a target="_blank" href="https://vuejs.org/">VueJS</a>: 3 years of
            experience, my favorite UI framework due to the performance benefits
            and ease of use.
          </p>
          <p>
            <a target="_blank" href="https://www.electronjs.org/">ElectronJS</a
            >: over 3 years of experience so I am very familiar with the API and
            I've made many apps with it over time.
          </p>
          <p>
            <a
              target="_blank"
              href="https://developers.google.com/web/tools/puppeteer"
              >Puppeteer:
            </a>
            a automation library that I use a lot.
          </p>
          <p>
            <a target="_blank" href="https://nim-lang.org/">Nim</a>: might be
            the most satisfying language I worked in, a few of the apps I
            developed are on the
            <router-link to="/projects">projects</router-link> page.
          </p>
          <p>
            <a target="_blank" href="https://git-scm.com/">Git</a>: my preferred
            version control system and
            <a target="_blank" href="https://github.com/">GitHub</a>
            my preferred code hosting platform, but I can adapt to any other
            version control system or hosting platform.
          </p>
          <p>
            <a target="_blank" href="https://www.tensorflow.org/js"
              >TensorflowJS</a
            >: I'm familiar with the concepts and I have one
            <a target="_blank" href="https://github.com/vieruuuu/ghost-brain"
              >project</a
            >
            written in it.
          </p>
          <p>
            Other:
            <a target="_blank" href="https://dart.dev/">Dart</a>,
            <a target="_blank" href="https://crystal-lang.org/">Crystal</a>,
            <a target="_blank" href="https://www.python.org/">Python</a>,
            <a target="_blank" href="https://www.cplusplus.com/">C++</a>
          </p>

          <h5>my story</h5>
          <p>
            Since I was young I was really curious about computers, playing
            games, chatting with my friends online, loved doing all of that but
            always wondered: How do they work ? So I started exploring. My
            adventures with programming started when I discovered command blocks
            in Minecraft, blocks capable of doing a lot of things using scripts
            that I didn't really know how to write or understand. I was just
            copying them from Youtube tutorials and renaming certain bits of
            text. I loved doing that even though I wasn't actually doing them
            myself.
          </p>
          <p>
            In the meantime, I was learning how to hack my friends' Facebook
            accounts for pranks. Little me didn't know the Internet isn't that
            simple so I kept getting viruses, bricking my PC to the point of
            getting it to repairs at least twice a year. Slowly I was learning
            how to repair it myself, made a few Windows install USBs until I got
            the hang of it, bricked some USBs, but for sure I was getting
            somewhere.
          </p>
          <p>
            In my attempt to learn "hacking" I followed some tutorials and made
            "BRICK" my first application written in Windows Batch, it was
            utilizing a backdoor to reset administrator's password on locked
            Windows machines by replacing slmgr.exe (the sticky keys dialog)
            with itself to have System privileges on the login screen.
          </p>
          <p>
            But hacking wasn't really my thing, even though lots of good things
            came from it, for example, I discovered Linux and started using Arch
            daily. What really stuck with me was Web Development. Like any
            rookie I was using HTML, some CSS, and mostly jQuery because just
            JavaScript was awkward because I was writing so much code just to
            change a few elements on a page when jQuery could easily do it in
            one line. My view changed when I discovered that jQuery was actually
            bloating my code and Vanilla JS was so much better, everything ran
            so much smoother, then I learned about NodeJS and the entire
            ecosystem, fast forward a few years and here I am now studying
            Information Tehnology at Gheorghe Asachi​ Technical University of
            Iași.
          </p>

          <!-- 

          <h5>cehesytetet</h5>

          <p>
            I write and appreciate clean code, I use descriptive names for
            variables and use comments so people can understand what's going on
            in my head. I prefer linters and beautifiers set to the JavaScript
            Standard Style. However, I don't mind using another style.
          </p>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QImg, useQuasar } from "quasar";
import ResponsiveHeader from "./../components/ResponsiveHeader.vue";

const $q = useQuasar();

let clickedTimes = 0;
function dontClick() {
  clickedTimes = clickedTimes + 1;
  if (clickedTimes === 3) {
    clickedTimes = 0;
    window.open("https://youtu.be/dQw4w9WgXcQ", "_blank").focus();

    $q.notify({
      message: "I warned you >:(",
    });
  } else {
    $q.notify({
      message: "No pls don't click the photo 3 times!",
    });
  }
}
</script>

<style lang="scss" scoped>
a {
  color: $primary;
  text-decoration: none;
}
</style>
