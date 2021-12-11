<template>
  <div class="Swiper">
    <div v-if="imageSrcs.length" class="swiper-wrapper">
      <swiper
        :slides-per-view="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        no-swiping
      >
        <swiper-slide v-for="(imgUrl, index) in imageSrcs" :key="index">
          <img :class="`swiper-item ${isEditor ? 'swiper-no-swiping' : ''}`" :src="imgUrl" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <EmptyComp compName="轮播组件占位" v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { isEditorMode } from "../../../utlis";

const isEditor = isEditorMode()

const props = defineProps({
  renderItem: Object,
});

let imageSrcs = ref(props?.renderItem?.data.imageSrcs || "");

watch(
  () => props.renderItem,
  (newVal: any) => {
    imageSrcs.value = newVal.data.imageSrcs;
  }
);

const onSwiper = () => {

}
const onSlideChange = () => {
  
}
</script>

<style lang="less" scope>
.swiper-wrapper {
  width: 100%;
  height: auto;
  .swiper-item {
    width: 100%;
  }
}
</style>
