<template>
  <div>
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import Vue from 'vue';
import global from "~/mixins/global.js";

Vue.mixin(global);

export default {
  components: {
    AppFooter
  }
};
</script>
