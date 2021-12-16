<template>
  <div class="Coupon">
    <div class="coupon-Wrapper" v-if="receiveCouponList.length">
      <Coupon1 v-if="couponData.column === 1" :couponList="receiveCouponList" @handleGetCoupon="handleGetCoupon" />
      <Coupon2 v-if="couponData.column === 2" :couponList="receiveCouponList" @handleGetCoupon="handleGetCoupon" />
    </div>
    <EmptyComp compName="优惠券组件占位" v-else />
  </div>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { watch, ref } from "vue";
import { isEditorMode } from "../../../utlis";
import Coupon1 from "./components/Coupon1/index.vue";
import Coupon2 from "./components/Coupon2/index.vue"

const props = defineProps({
  renderItem: Object,
});
let couponData = ref(props?.renderItem?.data || {});

// 接口获取优惠券信息
let receiveCouponList = ref([
  {
    couponName: "测试手动派发啊",
    couponId: 19419,
    showType: 0,
    amount: 10,
  },
]);

const handleGetCoupon = () => {
  if (isEditorMode()) return;
  message.success("领取成功");
};

watch(
  () => props.renderItem,
  (newVal: any) => {
    couponData.value = newVal.data;
  }
);
</script>

<style lang="less" scope>
</style>
