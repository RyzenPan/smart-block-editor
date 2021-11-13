<template>
	<div>
		<div class="editComponentLeft">
			<div class="penel">
        <CompList />
        <CompMap />
      </div>
		</div>
		<div style="width: 350px; transition: all ease-in-out 0.5s"></div>
	</div>
</template>

<script lang="ts" setup>
import CompList from './components/CompList/index.vue'
import CompMap from './components/CompMap/index.vue'



</script>

<style lang="less" scoped>
.editComponentLeft {
  flex: 0 0 220px;
  width: 350px;
  max-height: 100vh;
  background-color: #fff;
  .penel {
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: #f0f2f5;
  }
}

</style>
