<template>
  <a-form ref="formRef" :model="dynamicValidateForm">
    <a-form-item v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key" :label="index === 0 ? '' : ''" :name="['domains', index, 'value']" :rules="{
        required: true,
        message: '',
        trigger: 'change',
      }">
      <a-input v-model:value="domain.value" placeholder="请输入" style="width: 60%; margin-right: 8px" @change="submitForm" />
      <MinusCircleOutlined v-if="dynamicValidateForm.domains.length > 1" class="dynamic-delete-button" :disabled="dynamicValidateForm.domains.length === 1" @click="removeDomain(domain)" />
    </a-form-item>
    <a-form-item>
      <a-button type="dashed" style="width: 60%" @click="addDomain">
        <PlusOutlined />增加
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
import type { UnwrapRef } from "vue";
const emit = defineEmits(["update:valueArray"]);
const props = defineProps({
  valueArray: Array,
});

interface Domain {
  value: string;
  key: number;
}

const formRef = ref();
const dynamicValidateForm: any = reactive({
  domains: props.valueArray?.map((value) => {
    return {
      value: value,
      key: Date.now(),
    }
  }),
});

const submitForm = () => {
  formRef.value
    .validate()
    .then(() => {
      const newVal = dynamicValidateForm.domains.map((i: any) => i.value);
      emit("update:valueArray", newVal);
    })
    .catch((error: string) => {
      console.log("error", error);
    });
};

const removeDomain = (item: Domain) => {
  let index = dynamicValidateForm.domains.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1);
  }
};
const addDomain = () => {
  dynamicValidateForm.domains.push({
    value: "",
    key: Date.now(),
  });
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: pointer;
  opacity: 0.5;
}
</style>
