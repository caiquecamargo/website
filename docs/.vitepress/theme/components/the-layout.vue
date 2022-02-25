<template>
  <Home v-if="isHome" />
  <Layout v-else />
</template>

<script setup lang="ts">
import { computed, watchEffect } from "vue";
import Home from "./home.vue";
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;

const isHome = computed(() => window.location.pathname === "/");
watchEffect(() => console.log(isHome.value));
</script>

<style lang="postcss" scoped></style>
