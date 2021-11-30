<template>
	<div class="ImageRange">
		<img
			v-if="!imageSrc"
			src="https://img.wenhairu.com/images/2021/11/14/1zVhU.jpg"
			alt=""
			draggable="false"
			:style="{ width: '100%' }"
		/>
		<img
			:src="imageSrc"
			alt=""
			draggable="false"
			:style="{ width: '100%' }"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps({
	renderItem: Object,
})

let imageSrc = ref(props?.renderItem?.data.imageSrc || '');

watch(
  () => props.renderItem,
  (newVal: any) => {
    imageSrc.value = newVal.data.imageSrc;
  }
);

</script>

<style lang="less" scope>
.ImageRange {
	border-radius: 0;
	width: 100%;
	overflow: hidden;
	position: relative;
}
</style>
