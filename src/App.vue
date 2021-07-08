<template>
  <the-form></the-form>
</template>

<script>
import TheForm from './components/TheForm.vue';

export default {
  components: {
    TheForm,
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

img {
  display: block;
}

body {
  margin: 0;
  background-color: #eee;
  line-height: 1.5;
  color: #373a3c !important;
}
</style>