<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue';
export default {
  name: 'App',
  components: {
    appHeader
  }
}
</script>

<style></style>
