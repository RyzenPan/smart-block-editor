<template>
  <import-component :renderItem="renderItem"></import-component>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const modules = import.meta.glob("../materials/base/*/index.vue");
const components: any = {};
Object.keys(modules).forEach((key) => {
  const name = key.replace("../materials/base/", "").replace("/index.vue", "");
  components[name] = modules[key];
});

const props = defineProps({
  renderItem: Object,
});

const importComponent = defineAsyncComponent(
  components[props.renderItem?.type]
);
</script>

<style></style>
