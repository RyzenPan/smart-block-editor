<template>
  <div class="Button">
    <div class="button-Wrapper" :style="customStyle" v-if="buttonData.title">
      <a-button :danger="buttonData.isDanger" @click="handleClick" :size="buttonData.size" :type="buttonData.buttonType">{{ buttonData.title }}</a-button>
    </div>
    <EmptyComp compName="按钮组件占位" v-else />
  </div>
</template>


<script lang="ts" setup>
import { watch, ref } from "vue";
import { getCustomStyle, isEditorMode } from "../../../utlis";

const props = defineProps({
  renderItem: Object,
});
let buttonData = ref(props?.renderItem?.data || {});
let customStyle = ref(getCustomStyle(props?.renderItem?.data || {}));

watch(
  () => props.renderItem,
  (newVal: any) => {
    buttonData.value = newVal.data;
    customStyle.value = getCustomStyle(newVal.data);
  }
);

const handleClick = () => {
  if (isEditorMode()) return;
	window.location.href = buttonData.value.linkUrl;
}
</script>

<style lang="less" scope>
.button-Wrapper {
  text-align: center;
  padding: 10px 0;
}
</style>
