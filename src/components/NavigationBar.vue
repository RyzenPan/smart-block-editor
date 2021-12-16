<template>
  <div :key="uuid(3, 6)" @Click="handleOpenSetting" class="navigationBar" :style="`background-color: ${navigationData.naviBgColor}`">
    <img draggable="false" :src="deviceBackgroundUrl" class="deviceBackground" />
    <div class="naviTitle" :style="`color: ${navigationData.naviBarTextStyle === 'black' ? '#000' : '#fff'}`">{{navigationData.title || '标题'}}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { uuid } from "../utlis/index";
import { useStore } from "vuex";
const store = useStore();

type TNavigationData = {
  value: {
    naviBarTextStyle: string;
  };
};

const props = defineProps({
  navigationData: Object,
});

const navigationData: TNavigationData = ref(
  props.navigationData || ({} as any)
);

watch(
  () => props.navigationData,
  (newVal: any) => {
    navigationData.value = newVal;
  }
);

const deviceBackgroundUrl =
  "https://img.wenhairu.com/images/2021/12/16/5DR6d.png";

const handleOpenSetting = () => {
  store.commit("updateSettingDrawerVisible", true);
}
</script>

<style lang="less" scoped>
.navigationBar {
  position: relative;
  width: 375px;
  height: 100%;
  min-height: 88px;
  background-color: #fff;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  .deviceBackground {
    width: 100%;
  }
  .naviTitle {
    position: absolute;
    bottom: 9px;
    left: 50%;
    color: #3c3c3c;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    transform: translateX(-50%);
  }
  &:active {
    // 鼠标点击效果
    top: 2px;
  }
}
</style>