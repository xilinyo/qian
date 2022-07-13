<template>
  <div class="configure-wrap">
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script setup lang="ts">
const onClickLeft = () => history.back();
</script>

<style scoped></style>
