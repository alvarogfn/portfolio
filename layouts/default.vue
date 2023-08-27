<template>
  <div class="container">
    <top-menu />
    <nav class="superior-menu"></nav>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .content {
  }

  .container {
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
  }

  .top-menu {
    left: 0;
    right: 0;
  }

  .lateral-menu {
    position: absolute;
    top: 0;
    bottom: 0;
  }
</style>
