<template>
	<div class="ImageRange">
		<img
			v-if="imageSrc"
			:src="imageSrc"
			alt=""
			draggable="false"
			:style="{ width: '100%' }"
			@click="handleClickImage"
		/>
    <EmptyComp compName="图片组件占位" v-else/>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { isEditorMode } from "../../../utlis";

const props = defineProps({
	renderItem: Object,
})

let imageSrc = ref(props?.renderItem?.data.imageSrc || '');
let linkUrl = ref(props?.renderItem?.data.linkUrl || '');

watch(
  () => props.renderItem,
  (newVal: any) => {
    imageSrc.value = newVal.data.imageSrc;
    linkUrl.value = newVal.data.linkUrl;
  }
);

const handleClickImage = () => {
	if (isEditorMode()) return;
	window.location.href = linkUrl.value;
}

</script>

<style lang="less" scope>
.ImageRange {
	border-radius: 0;
	width: 100%;
	overflow: hidden;
	position: relative;
}
</style>
