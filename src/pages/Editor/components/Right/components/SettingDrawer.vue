<template>
  <a-drawer :width="500" title="页面设置" placement="right" :visible="settingDrawerVisible" @close="onClose">
    <FormRender :formCfg="formCfg" :formData="pageData" @onChange="handleChangeForm" />
  </a-drawer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import FormRender from "@/core/renderer/FormRender.vue";
const store = useStore();

// 从VueX中直接取出数据
const pageData = computed(() => store.state.pageData);
const settingDrawerVisible = computed(() => store.state.settingDrawerVisible);

const onClose = () => {
  store.commit("updateSettingDrawerVisible", false);
};

const formCfg = [
  {
    type: "input",
    dataIndex: "title",
    title: "标题",
  },
  {
    type: "colorPicker",
    dataIndex: "naviBgColor",
    title: "背景颜色",
  },
  {
    type: "radio",
    dataIndex: "naviBarTextStyle",
    title: "标题颜色",
    label: "value",
    options: [
      {
        value: "黑色",
        naviBarTextStyle: "black",
      },
      {
        value: "白色",
        naviBarTextStyle: "white",
      },
    ],
  },
];

const handleChangeForm = (value: any) => {
  store.commit("updatePageData", value);
  onClose()
};
</script>

<style lang="less" scoped>
</style>