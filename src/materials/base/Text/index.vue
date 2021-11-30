<template>
  <div class="Text">
    <div class="title" :style="customStyle" v-if="textData.title">{{ textData.title }}</div>
    <EmptyComp compName="文字组件占位" v-else/>
  </div>
</template>


<script lang="ts" setup>
import { watch, ref } from "vue";
import { getCustomStyle } from "../../../utlis";

const props = defineProps({
  renderItem: Object,
});
let textData = ref(props?.renderItem?.data || {});
let customStyle = ref(getCustomStyle(props?.renderItem?.data || {}))

watch(
  () => props.renderItem,
  (newVal: any) => {
    textData.value = newVal.data;
    customStyle.value = getCustomStyle(newVal.data)
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
