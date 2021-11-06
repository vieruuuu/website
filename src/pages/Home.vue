<template>
  <div style="height: 94vh" class="flex flex-center">
    <div class="text-primary text-center">
      <p :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'">Hi, I'm</p>
      <p :class="$q.screen.lt.md ? 'text-h4' : 'text-h2'">Vieru Andrei</p>
      <div class="flex row inline q-gutter-md">
        <p :class="$q.screen.lt.md ? 'text-h6' : 'text-h5'">I do</p>
        <transition
          mode="out-in"
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutDown"
        >
          <!-- Wrapping only one DOM element, defined by QBtn -->
          <p :class="$q.screen.lt.md ? 'text-h6' : 'text-h5'" :key="text">
            {{ text }}
          </p>
        </transition>
      </div>
      <br />
      <br />
      <br />
      <div
        class="q-gutter-sm q-pa-md"
        :class="{ 'animated fadeIn': showScroll, invisible: !showScroll }"
      >
        <!-- Navigation -->
        <ResponsiveBtn to="/about">about</ResponsiveBtn>
        <ResponsiveBtn to="/services">services</ResponsiveBtn>
        <ResponsiveBtn to="/projects">projects</ResponsiveBtn>

        <br />

        <!-- Social -->
        <ResponsiveBtn
          type="a"
          target="_blank"
          href="https://discordapp.com/users/335430693305843722"
          ><img
            class="grayscale"
            style="width: 25px; height: 25px"
            src="./../assets/discord.svg"
            alt="Discord profile"
        /></ResponsiveBtn>
        <ResponsiveBtn
          type="a"
          target="_blank"
          href="https://www.linkedin.com/in/andrei-vieru-97930b17b/"
          ><img
            class="grayscale"
            style="width: 30px; height: 30px"
            src="./../assets/linkedin.svg"
            alt="LinkedIn profile"
        /></ResponsiveBtn>
        <ResponsiveBtn
          type="a"
          target="_blank"
          href="https://github.com/vieruuuu"
          ><img
            class="grayscale"
            style="width: 30px; height: 30px"
            src="./../assets/github.svg"
            alt="Github profile"
        /></ResponsiveBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ResponsiveBtn from "./../components/ResponsiveBtn.vue";

let text = ref("Javascript");
let textArray = ["NodeJS", "VueJS", "ElectronJS", "Puppeteer", "Nim"];
let index = 0;
let showScroll = ref(false);

function changeText() {
  if (index + 1 >= textArray.length) {
    index = -1;
  }

  text.value = textArray[++index];
}

function scrollToBottom() {
  window.scrollTo(0, window.innerHeight);
}

setInterval(changeText, 2000);

setTimeout(() => (showScroll.value = true), 1000);
</script>

<style scoped>
.grayscale {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>
