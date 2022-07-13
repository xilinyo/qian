<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view></router-view>
  </van-config-provider>
</template>

<script setup lang="ts">
const themeVars = {
  ButtonPrimaryBackgroundColor: '#ff976a',
  buttonPrimaryBorderColor: '#ff976a',
};
</script>

<style lang="scss">
@import './normalize.scss';
.van-config-provider {
  width: 100%;
  height: 100%;
}
.app-conent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
