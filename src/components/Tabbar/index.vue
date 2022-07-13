<template>
  <van-tabbar v-model="active" route class="components components-tabbar">
    <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o" to="/system"
      >设置</van-tabbar-item
    >
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref('home');
</script>

<style lang="scss">
.components.components-tabbar {
  height: 80px;
  width: 100%;
  font-size: 24px;
}
</style>
