<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
*,
::after,
::before {
  box-sizing: border-box;
}

html {
  font-family: 'Noto Sans', serif;
}

div {
  width: 100%;
}

img {
  display: block;
}

body {
  margin: 0;
  background-color: #eee;
  line-height: 1.5;
  color: #373a3c !important;
  letter-spacing: 0.05em;
}
</style>