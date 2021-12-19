<template>
  <div class="menuBox upShowAnimation">
    <div class="compMenu">
      <a-tooltip placement="right">
        <template #title>上移：{{ currentCompontent.displayName }}-{{ currentCompontent.id }}组件</template>
        <div class="compMenuItem" @click="handleMoveComp('up')">
          <up-outlined />
        </div>
      </a-tooltip>
      <a-tooltip placement="right">
        <template #title>下移：{{ currentCompontent.displayName }}-{{ currentCompontent.id }}组件</template>
        <div class="compMenuItem" @click="handleMoveComp('down')">
          <down-outlined />
        </div>
      </a-tooltip>
      <a-tooltip placement="right">
        <template #title>复制：{{ currentCompontent.displayName }}-{{ currentCompontent.id }}组件</template>
        <div class="compMenuItem" @click="handleCopyComp">
          <copy-outlined />
        </div>
      </a-tooltip>
      <a-popconfirm title="确定删除该组件？" ok-text="确定" cancel-text="取消" @confirm="handleDeleteComp" @cancel="false">
        <a-tooltip placement="right">
          <template #title>删除：{{ currentCompontent.displayName }}-{{ currentCompontent.id }}组件</template>
          <div class="compMenuItem">
            <delete-outlined />
          </div>
        </a-tooltip>
      </a-popconfirm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  UpOutlined,
  DownOutlined,
  CopyOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import { computed } from "vue";

import { useStore } from "vuex";
const store = useStore();

// 从VueX中直接取出画板数据
const currentCompontent = computed(() => store.state.currentCompontent);

const handleMoveComp = (type: string) => {
  switch (type) {
    case "up":
      store.commit("upDownComp", {
        id: currentCompontent.value.id,
        type: "up",
      });
      break;
    case "down":
      store.commit("upDownComp", {
        id: currentCompontent.value.id,
        type: "down",
      });
      break;
    default:
      break;
  }
};

const handleCopyComp = () => {
  store.commit("copyPointData", currentCompontent.value);
};

const handleDeleteComp = () => {
  store.commit("delPointData", currentCompontent.value.id);
};
</script>

<style lang="less" scoped>
.menuBox {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 0;
  width: 150px;
  height: 100%;
  margin-left: -200px;
  transition: all ease-in-out 0.5s;
  .compMenu {
    position: absolute;
    top: 50%;
    right: -224px;
    flex-direction: column;
    width: 50px;
    height: 167px;
    padding: 6px;
    background-color: #fff;
    border-radius: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    .compMenuItem {
      line-height: 39px;
      font-size: 16px;
      color: #6e6e6e;
      text-align: center;
      &:hover {
        color: #999;
      }
      .compIcon {
        color: #a0a0a0;
        font-size: 18px;
      }
    }
  }
}
</style>