<template>
  <div class="compContain">
    <div class="panelTitle">
      <span>组件列表</span>
      <span class="compCount">{{list.length}}</span>
    </div>
    <div class="penelBox">
      <draggable class="list-group" :list="list" :group="{ name: 'Droppable', pull: 'clone', put: false }" item-key="name" :clone="cloneComponent">
        <template #item="{ element, index }">
          <div :className="`module ${(index + 1) % 3 === 0 ? 'mr0' : ''}`" @click="addPoint(element)">
            <div class="comp-icon">
              <PictureOutlined v-if="element.type === 'ImageRange'" />
              <BoldOutlined v-else-if="element.type === 'Text'" />
              <block-outlined v-else-if="element.type === 'Swiper'" />
              <border-outlined v-else-if="element.type === 'Button'" />
              <scissor-outlined v-else-if="element.type === 'Coupon'" />
            </div>
            <div class="comp-title">{{ element.displayName }}</div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import schemaMap from "../../../../../../materials/schema";
import basicTemplate from "../../../../../../materials/base/template";
import {
  PictureOutlined,
  BoldOutlined,
  BlockOutlined,
  BorderOutlined,
  ScissorOutlined,
} from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { TNewData } from "../../../../../../store/typing";
import draggable from "vuedraggable";
import { ref } from "@vue/reactivity";
import { uuid } from "../../../../../../utlis";
import _ from "lodash";
const store = useStore();

let drag = ref(false);
const list = ref(
  basicTemplate.map((item: any) => {
    return {
      ...item,
      ...schemaMap[item.type].config,
    };
  })
);

const addPoint = (item: TNewData) => {
  store.commit("addPointData", item);
};

const cloneComponent = (origin: any) => {
  const clone = _.cloneDeep(origin);
  clone.id = uuid(6, 10);
  return clone;
};
</script>

<style lang="less" scoped>
.compContain {
  margin-bottom: 8px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(152, 153, 161, 0.3);
  background-color: #fff;
  .panelTitle {
    width: 100%;
    height: 40px;
    padding-left: 25px;
    color: #33383e;
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
    text-align: left;
    background-color: #fff;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    .compCount {
      padding: 6px 10px;
      color: #65a798;
      background-color: #65a7980D;
      border-radius: 20px;
      margin-left: 10px;
    }
  }
  .penelBox {
    height: calc(100vh - 112px);
    padding: 10px 16px;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #fff;
    &::-webkit-scrollbar {
      display: none;
    }
    .list-group {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
.module {
  position: relative;
  box-sizing: border-box;
  width: 82px;
  margin-right: 28px;
  margin-bottom: 28px;
  overflow: hidden;
  background-color: #f6f7f9;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(152, 153, 161, 0.2);
  user-select: none;
  transition: all 0.3s;
  cursor: move;
  
  &:hover {
    background-color: #e9ebed;
    transform: scale(1.2);
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    content: "";
  }
}

.mr0 {
  margin-right: 0;
}

.comp-icon {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  font-size: 30px;
}

.comp-title {
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: rgba(118, 118, 118, 1);
}
</style>
