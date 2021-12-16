<template>
  <div class="coupon-2" v-for="(item) in couponList" :key="item.couponId">
    <div class="couponMain" :style="`background-image: url(${couponBgUrl});color: ${themeColor}`">
      <div class="couponInfo">
        <p class="discountTitle">
          ￥
          <span class="discountNum">{{item.amount}}</span>
        </p>
        <div class="rangInfo">
          <div class="rangInfoTitle">使用门槛</div>
          <div class="rangeExtInfo">{{item.rangeExtInfo || '优惠券使用范围'}}</div>
        </div>
      </div>
      <div v-if="item.showType === 1" class="btnGet" style="background-color: transparent">
        <span :style="`color: ${themeColor}`">已领取</span>
      </div>
      <div class="btnGet" :style="`background-color: ${themeColor};opacity: ${item.showType === 0 ? 1 : 0.4}`" @Click="emit('handleGetCoupon', item)">
        <span :style="`opacity: ${item.showType === 0 ? 1 : 0.4}`">{{item.showType === 0 ? '立即领取' : '已抢光'}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from "vue";

const emit = defineEmits(["handleGetCoupon"]);
const props = defineProps({
  couponList: Array,
});
const couponList: any = ref(props.couponList || []);

watch(
  () => props.couponList,
  (newVal: any) => {
    couponList.value = newVal;
  }
);

const couponBgUrl: string =
  "https://img.wenhairu.com/images/2021/12/16/5DHXf.png";
const themeColor: string = "#ff445e";
</script>

<style lang="less" scoped>
.coupon-2 {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 8px 12px 0 12px;
  .couponMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 170px;
    height: 94px;
    margin-right: 10px;
    color: #ff445e;
    background-repeat: no-repeat;
    background-size: 100% auto;
    &:nth-child(2n) {
      margin-right: 0;
      margin-bottom: 10px;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .couponInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-top: 4px;
    }
    .discountTitle {
      font-size: 12px;
      line-height: normal;
      .discountNum {
        font-size: 26px;
      }
    }
    .rangInfo {
      line-height: normal;
      text-align: center;
      .rangInfoTitle {
        font-weight: 500;
        font-size: 12px;
        transform: scale(0.91, 0.91);
      }
      .rangeExtInfo {
        display: inline-block;
        max-width: 140px;
        overflow: hidden;
        font-size: 12px;
        line-height: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        transform: scale(0.83, 0.83);
      }
    }
    .btnGet {
      width: 160px;
      height: 20px;
      margin-top: 4px;
      color: #fff;
      font-size: 11px;
      line-height: 20px;
      text-align: center;
      background-color: #ff445e;
      border-radius: 12px;
      transform: scale(0.83, 0.83);
    }
  }
}
</style>