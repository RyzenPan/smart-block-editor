<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <EditComponentLeft />
      <EditCompontentMiddle />
      <EditCompontentRight />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from "./components/Header/index.vue";
import EditComponentLeft from "./components/Left/index.vue";
import EditCompontentMiddle from "./components/Middle/index.vue";
import EditCompontentRight from "./components/Right/index.vue";
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex: auto;
  height: 100%;
  -webkit-box-orient: horizontal;
  overflow: hidden;
  background-color: #f0f2f5;
}
</style>