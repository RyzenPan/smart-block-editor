<template>
  <div class="coupon-1" v-for="(item) in couponList" :key="item.couponId">
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

const emit= defineEmits(['handleGetCoupon'])
const props = defineProps({
  couponList: Array,
});
const couponList: any = ref(props.couponList || [])

watch(
  () => props.couponList,
  (newVal: any) => {
    couponList.value = newVal;
  }
);

const couponBgUrl: string = 'https://img.wenhairu.com/images/2021/12/15/5FfoG.png';
const themeColor: string = '#ff445e';

</script>

<style lang="less" scoped>
.coupon-1 {
  padding: 8px 12px;
  .couponMain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 52px;
    margin-bottom: 8px;
    padding: 0 10px 0 27px;
    color: #ff445e;
    background-repeat: no-repeat;
    background-size: 100% auto;
    border-radius: 12px;
    &:last-child {
      margin-bottom: 0;
    }
    .couponInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .discountTitle {
      width: 68px;
      font-size: 12px;
      .discountNum {
        font-weight: 500;
        font-size: 32px;
        letter-spacing: -4px;
      }
    }
    .rangInfo {
      padding-top: 4px;
      .rangInfoTitle {
        margin-bottom: 4px;
        font-weight: 500;
        font-size: 14px;
      }
      .rangeExtInfo {
        display: inline-block;
        max-width: 140px;
        overflow: hidden;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        transform: scale(0.83, 0.83);
        transform-origin: 0% 0%;
      }
    }
    .btnGet {
      width: 80px;
      height: 24px;
      color: #fff;
      font-size: 11px;
      line-height: 24px;
      text-align: center;
      background-color: #ff445e;
      border-radius: 12px;
    }
  }
}
</style>