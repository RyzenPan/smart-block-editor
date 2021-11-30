<template>
  <div class="Text">
    <p class="title" v-if="title">{{ title }}</p>
    <EmptyComp compName="文字组件占位" v-else/>
  </div>
</template>


<script lang="ts" setup>
import { watch, ref } from "vue";

const props = defineProps({
  renderItem: Object,
});
let title = ref(props?.renderItem?.data.title || "");

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
</style>
