<template>
  <div class="btn-group">
    <a-button type="text" class="btn-group-item" @click="handleDelete">清空</a-button>
    <a-button type="text" class="btn-group-item" @click="handlePreview">预览</a-button>
    <a-button type="text" class="btn-group-item" @click="handleSave">保存</a-button>
    <a-button type="primary" class="btn-group-item">发布</a-button>
    <a-modal />
  </div>
</template>

<script lang="ts" setup>
import { toRaw } from "@vue/reactivity";
import { message, Modal } from "ant-design-vue";
import { useStore } from "vuex";
import { savePage } from "../../../../../../models/db";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const store = useStore();

const handleDelete = () => {
  Modal.confirm({
    title: "确认清空画布?",
    okText: "确定",
    cancelText: "取消",
    onOk() {
      store.commit("clearPointData");
    },
  });
};

const handlePreview = () => {
  window.open("/preview");
};

const handleSave = () => {
  const pageData = toRaw(store.state.pageData);
  const pageJson = toRaw(store.state.componentArray);
  const res = savePage({
    pageData,
    pageJson,
  });
  if (res) {
    router.push(`${route.path}?pageId=${res}`);
    store.commit("updatePageData", {
      ...pageData,
      pageId: res,
    });
    message.success("保存成功");
  }
};
</script>

<style lang="less" scoped>
.btn-group {
  .btn-group-item {
    margin-right: 10px;
    font-weight: bold;
  }
}
</style>
