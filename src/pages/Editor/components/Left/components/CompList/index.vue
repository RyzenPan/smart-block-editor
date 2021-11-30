<template>
  <div class="compContain">
    <div class="panelTitle">组件列表</div>
    <div class="penelBox">
      <draggable class="dragArea list-group" :list="list" :group="{ name: 'Droppable', pull: 'clone', put: false }" item-key="name" :clone="cloneComponent">
        <template #item="{ element, index }">
          <div :className="`module ${(index + 1) % 3 === 0 ? 'mr0' : ''}`" @click="addPoint(element)">
            <div class="comp-icon">
              <PictureOutlined v-if="element.type === 'ImageRange'" />
              <BoldOutlined v-else-if="element.type === 'Text'" />
            </div>
            <div class="comp-title">{{ element.displayName }}</div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import schemaMap from "@/materials/schema";
import basicTemplate from "@/materials/base/template";
import { PictureOutlined, BoldOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { TNewData } from "@/store/typing";
import draggable from "vuedraggable";
import { ref } from "@vue/reactivity";
import { uuid } from "@/utlis";
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
    .dragArea {
      display: flex;
      cursor: move;
    }
  }
}
.module {
  position: relative;
  box-sizing: border-box;
  width: 82px;
  margin-right: 28px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #f6f7f9;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(152, 153, 161, 0.2);
  user-select: none;
  &:hover {
    background-color: #e9ebed;
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
