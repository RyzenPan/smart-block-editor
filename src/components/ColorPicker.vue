<template>
  <ColorPicker pickerType="chrome" lang="ZH-cn" :isWidget="true" :disableHistory="true" v-model:pureColor="pureColor" format="hex"/>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const emit= defineEmits(['update:hexColor'])
const props = defineProps({
  hexColor: String,
});

const pureColor = ref(props.hexColor);

watch(
  () => pureColor.value,
  (newVal: any) => {
    emit('update:hexColor', newVal)
  }
);


</script>

<style scoped>
</style>