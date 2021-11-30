<template>
  <div class="Text">
    <p class="title" v-if="title">{{ title }}</p>
    <p class="plac" v-else>文字组件</p>
  </div>
</template>


<script lang="ts" setup>
import { defineProps, watch, ref } from "vue";

const props = defineProps({
  renderItem: Object,
});
let title = ref(props?.renderItem?.data.title || '');

watch(
  () => props.renderItem,
  (newVal: any) => {
    title.value = newVal.data.title;
  }
);
</script>

<style lang="less" scope>
.title {
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}
.plac {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #eee;
  text-align: center;
  color: #999;
  border-bottom: 1px solid #ccc;
}
</style>
