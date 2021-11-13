<template>
  <div class="compMapBox">
    <div class="CompMapTitle">
      <div class="left">
        <div class="title">组件地图</div>
        <div class="showTimeoutComp">
          <a-checkbox v-model:checked="checked">过期组件</a-checkbox>
        </div>
      </div>
    </div>
    <div class="penelBox">

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

let checked = ref(false)

</script>

<style lang="less" scoped>
.compMapBox {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(152, 153, 161, 0.3);
  .CompMapTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0 25px;
    background-color: #fff;
    .title {
      color: #33383e;
      font-weight: 700;
      font-size: 14px;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      margin-bottom: 10px;
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #2f54eb;
      font-size: 28px;
      cursor: pointer;
      .rightTitle {
        color: #808080;
        font-size: 10px;
      }
    }
  }
  .penelBox {
    height: 38.4vh;
    padding: 10px 16px;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #fff;
    &::-webkit-scrollbar {
      display: none;
    }
    .componentsMapItem {
      display: flex;
      align-items: center;
      height: 40px;
      margin-bottom: 10px;
      background-color: #f6f7f9;
      border-radius: 4px;
      box-shadow: 0 0 6px rgba(152, 153, 161, 0.2);
      .dragIcon {
        margin: 0 10px;
        color: #767676;
        font-size: 20px;
        cursor: grab;
      }
      .compTitle {
        width: 210px;
      }
      .compMenuItem {
        margin-right: 10px;
        color: #767676;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}

.abTestBtn {
  line-height: 30px;
  cursor: pointer;
  user-select: none;
}

</style>