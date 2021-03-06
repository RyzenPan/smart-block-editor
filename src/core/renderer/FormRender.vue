<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div v-for="(formItem, index) in formCfg" :key="index">
      <!-- 文本输入 -->
      <a-form-item :label="formItem.title" v-if="formItem.type === 'input'">
        <a-input :placeholder="formItem.placeholder || `请输入${formItem.title}`" v-model:value="formState[formItem.dataIndex]" />
      </a-form-item>
      <!-- 下拉选择 -->
      <a-form-item :label="formItem.title" v-if="formItem.type === 'select'">
        <a-select v-model:value="formState[formItem.dataIndex]" :placeholder="formItem.placeholder || '请选择' + formItem.title">
          <a-select-option v-for="(optionsItem) in formItem.options" :key="optionsItem[formItem.dataIndex]" :value="optionsItem[formItem.dataIndex]">{{formItem.label ? optionsItem[formItem.label] : optionsItem[formItem.dataIndex]}}</a-select-option>
        </a-select>
      </a-form-item>
      <!-- 日期选择器 -->
      <a-form-item :label="formItem.title" v-if="formItem.type === 'datetime'">
        <a-date-picker v-model:value="formState[formItem.dataIndex]" show-time type="date" :placeholder="formItem.placeholder || '请选择' + formItem.title" style="width: 100%" />
      </a-form-item>
      <!-- 开关 -->
      <a-form-item :label="formItem.title" v-if="formItem.type === 'switch'">
        <a-switch v-model:checked="formState[formItem.dataIndex]" />
      </a-form-item>
      <!-- 复选框 -->
      <a-form-item :label="formItem.title" v-if="formItem.type === 'checkbox'">
        <a-checkbox-group v-model:value="formState[formItem.dataIndex]">
          <a-checkbox v-for="(op) in formItem.options" :value="op[formItem.dataIndex]" :name="op[formItem.dataIndex]">{{op[formItem.label]}}</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <!-- 单选框 -->
      <a-form-item :label="formItem.title" v-if="formItem.type === 'radio'">
        <a-radio-group v-model:value="formState[formItem.dataIndex]">
          <a-radio-button class="radio-item" v-for="(op) in formItem.options" :value="op[formItem.dataIndex]">{{op[formItem.label]}}</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item :label="formItem.title" v-if="formItem.type === 'colorPicker'">
        <ColorPicker v-model:hexColor="formState[formItem.dataIndex]"/>
      </a-form-item>
      <a-form-item :label="formItem.title" v-if="formItem.type === 'dynamicInput'">
        <DynamicInput v-model:valueArray="formState[formItem.dataIndex]"/>
      </a-form-item>
    </div>
    <a-form-item :wrapper-col="{ span: 16, offset: 5 }" v-if="formCfg.length">
      <a-button type="primary" @click="onSubmit">提交</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref, toRaw, watch } from "vue";

const labelCol = ref({ span: 5 });
const wrapperCol = ref({ span: 16 });

const props: any = defineProps({
  formCfg: Array,
  formData: Object,
});

const formState: any = ref(props.formData);
let formCfg: any = reactive(props.formCfg);

watch(
  () => props.formCfg,
  (newVal: any) => {
    formCfg.length = 0;
    formCfg.push(...toRaw(newVal));
  }
);

watch(
  () => props.formData,
  (newFormData: any) => {
    formState.value = newFormData;
  }
);

const emit = defineEmits(["onChange"]);
const onSubmit = () => {
  emit('onChange', toRaw(formState.value))
};
</script>

<style lang="less" scoped>
.radio-item {
  margin: 0 8px 8px 0;
}
</style>
