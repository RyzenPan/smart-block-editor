<template>
  <div class="emptyComp">- {{ props.compName }} -</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  compName: Object,
});
</script>

<style scoped>
.emptyComp {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #eee;
  text-align: center;
  color: #999;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
</style>