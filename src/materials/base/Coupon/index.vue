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
import { watch, ref, reactive } from "vue";
import { isEditorMode } from "../../../utlis";
import Coupon1 from "./components/Coupon1/index.vue";
import Coupon2 from "./components/Coupon2/index.vue";

const props = defineProps({
  renderItem: Object,
});
let couponData = ref(props?.renderItem?.data || {});

// 接口获取优惠券信息
let receiveCouponList = reactive(
  couponData.value.isMock
    ? [
        {
          couponName: "测试优惠券1",
          couponId: 19419,
          showType: 0,
          amount: 10,
        },
        {
          couponName: "测试优惠券2",
          couponId: 19433,
          showType: 0,
          amount: 20,
        },
      ]
    : ([] as any)
);

const handleGetCoupon = () => {
  if (isEditorMode()) return;
  message.success("领取成功");
};

watch(
  () => props.renderItem,
  (newVal: any) => {
    couponData.value = newVal.data;
    if (newVal.data.isMock) {
      receiveCouponList = [
        {
          couponName: "测试优惠券1",
          couponId: 19419,
          showType: 0,
          amount: 10,
        },
        {
          couponName: "测试优惠券2",
          couponId: 19433,
          showType: 0,
          amount: 20,
        },
      ];
    } else {
      receiveCouponList = [];
    }
  }
);
</script>

<style lang="less" scope>
</style>
