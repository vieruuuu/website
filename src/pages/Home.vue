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
        <q-btn to="/about" outline flat dense no-caps>about</q-btn>
        <q-btn to="/services" outline flat dense no-caps>services</q-btn>
        <q-btn to="/projects" outline flat dense no-caps>projects</q-btn>
        <q-btn to="/contact" outline flat dense no-caps>contact</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
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
