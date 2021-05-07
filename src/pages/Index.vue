<template>
  <q-page class="bg-grey-10">
    <!-- HOME -->
    <div class="bg-grey-10 flex flex-center" style="height: 100vh">
      <div class="text-yellow-5 text-center">
        <h3>Hi, I'm</h3>
        <h2>Vieru Andrei</h2>
        <div class="flex row inline q-gutter-md">
          <h5>I do</h5>
          <transition
            appear
            mode="out-in"
            enter-active-class="animated slideInDown"
            leave-active-class="animated slideOutDown"
          >
            <!-- Wrapping only one DOM element, defined by QBtn -->
            <h5 :key="text">{{ text }}</h5>
          </transition>
        </div>
        <br />
        <q-btn
          flat
          round
          size="xl"
          icon="expand_more"
          @click="scrollToBottom"
          :style="{ visibility: showScroll ? 'visible' : 'hidden' }"
          :class="{ 'animated fadeIn': showScroll }"
        ></q-btn>
      </div>
    </div>
    <!-- ABOUT -->
    <div style="height: 100vh" class="bg-grey-7 text-yellow-5 text-center">
      <h2>About</h2>
    </div>
    <!-- SERVICII -->
    <div style="height: 100vh" class="bg-grey-7 text-yellow-5 text-center">
      <h2>Services</h2>
    </div>
    <!-- PROIECTE -->
    <div style="height: 100vh" class="bg-grey-7 text-yellow-5 text-center">
      <h2>Projects</h2>
    </div>
    <!-- CONTACT -->
    <div style="height: 100vh" class="bg-grey-7 text-yellow-5 text-center">
      <h2>Contact</h2>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      text: "Javascript",
      textArray: ["Javascript", "VueJS", "NodeJS", "Puppeteer", "Nim"],
      index: 0,
      showScroll: false,
    };
  },
  methods: {
    changeText() {
      if (this.index + 1 >= this.textArray.length) {
        this.index = -1;
      }

      this.text = this.textArray[++this.index];
    },
    scrollToBottom() {
      window.scrollTo(0, window.innerHeight);
    },
  },
  mounted() {
    setInterval(this.changeText, 2000);

    setTimeout(() => (this.showScroll = true), 1000);
  },
});
</script>
