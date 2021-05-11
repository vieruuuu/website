<template>
  <q-btn :size="$q.screen.lt.md ? 'md' : 'lg'" dense outline flat no-caps
    ><slot></slot
  ></q-btn>
</template>
