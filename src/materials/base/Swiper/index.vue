<template>
  <div class="Swiper">
    <div v-if="imageSrcs.length" class="swiper-wrapper">
      <swiper :modules="modules" :slides-per-view="1" @swiper="onSwiper" @slideChange="onSlideChange" :pagination="{ clickable: true }" :autoplay="isAutoplay ? { delay: 3000 } : false">
        <swiper-slide v-for="(imgUrl, index) in imageSrcs" :key="index">
          <img :class="`swiper-item ${isEditor ? 'swiper-no-swiping' : ''}`" :src="imgUrl" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <EmptyComp compName="轮播组件占位" v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { isEditorMode } from "../../../utlis";

// 注册swiper组件
const modules = [Autoplay, Pagination];

const isEditor = isEditorMode();

const props = defineProps({
  renderItem: Object,
});

let imageSrcs = ref(props?.renderItem?.data.imageSrcs || "");
let isAutoplay = ref(props?.renderItem?.data.isAutoplay)

watch(
  () => props.renderItem,
  (newVal: any) => {
    imageSrcs.value = newVal.data.imageSrcs;
    isAutoplay.value = newVal.data.isAutoplay;
  }
);

const onSwiper = () => {};
const onSlideChange = () => {};
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
