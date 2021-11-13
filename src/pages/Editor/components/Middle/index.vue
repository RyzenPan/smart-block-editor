<template>
	<div class="editorPanel">
		<ViewRender />
	</div>
</template>

<script lang="ts" setup>
import { ViewRender } from '../../../../core/index';
</script>

<style lang="less" scoped>
.editorPanel {
  position: relative;
  flex: auto;
  height: 100vh;
  padding-bottom: 100px;
  overflow-x: hidden;
	background-color: #f0f2f5;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
