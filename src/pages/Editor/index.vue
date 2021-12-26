<template>
  <div>
    <Loading v-if="loaded" />
    <Container v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Container from "./Container.vue";
const loaded = ref(true);
import { useRoute } from "vue-router";
import { getPageInfo, getPageJson, initDBStroage } from "../../models/db";
const route = useRoute();
import { useStore } from "vuex";
const store = useStore();

initDBStroage()
const pageId: any = route?.query?.pageId;

if (pageId) {
  const pageInfo = getPageInfo({ pageId });
  const pageJson = getPageJson({ pageUrl: pageInfo.saveUrl });
  if (Object.keys(pageJson).length) {
    store.commit("setPointData", pageJson);
    store.commit("updatePageData", pageInfo);
  }
}

setTimeout(() => {
  loaded.value = false;
}, 400);
</script>

<style></style>
