<template>
  <q-btn :size="$q.screen.lt.md ? 'md' : 'lg'" dense flat no-caps
    ><slot></slot
  ></q-btn>
</template>
