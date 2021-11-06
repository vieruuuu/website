<template>
  <p :class="$q.screen.lt.md ? 'text-h4' : 'text-h2'"><slot></slot></p>
</template>
