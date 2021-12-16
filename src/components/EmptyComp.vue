<template>
  <div class="emptyComp" v-if="isEditorMode()">- {{ props.compName }} -</div>
</template>

<script lang="ts" setup>
import { isEditorMode } from '../utlis'
const props = defineProps({
  compName: String,
});
</script>

<style scoped>
.emptyComp {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #f0f2f5;
  text-align: center;
  color: #999;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
</style>