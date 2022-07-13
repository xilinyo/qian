<template>
  <div class="home">
    <div class="logo">
      <div class="title">
        <div class="welocome">Hi！{{ userName }}</div>
        <div class="name">Welcome Home！</div>
      </div>
      <div class="img">
        <img :src="'/images/avatar.jpg'" alt="" />
      </div>
    </div>

    <div class="rooms-wrap">
      <div class="label">场景</div>
      <div class="rooms-list">
        <div
          :class="['room', item.key === selectKey && 'select']"
          v-for="item in roomTypes"
          :key="item.key"
          @click="selectKey = item.key"
        >
          <div class="icon">
            <span :class="['iconfont', `icon-${item.icon}`]"></span>
          </div>
          <div class="type-label">{{ item.label }}</div>
        </div>
      </div>
    </div>

    <div class="smart-systems-wrap">
      <div class="label">智能设备</div>
      <div class="systems-list">
        <div class="system" v-for="(item, key) in smartList" :key="key">
          <van-switch v-model="item.turn" size="12" />
          <div class="icon">
            <span :class="['iconfont', `icon-${item.icon}`]"></span>
          </div>
          <div class="info">
            <div class="system-label">{{ item.label }}</div>
            <div class="remark">{{ item.remark }}: {{ item.remark_value }}</div>
          </div>
        </div>
      </div>
    </div>

    <Tabbar />
  </div>
</template>

<script setup lang="ts">
import useStore from 'src/store/index.js';
import Tabbar from '#/Tabbar/index.vue';
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

const { home, system } = useStore();
const { userName } = storeToRefs(home);
const { roomTypes, smarts } = storeToRefs(system);
const [{ key }] = roomTypes.value;
const selectKey = ref(key);

const smartList = computed(() => {
  return smarts.value[selectKey.value];
});
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 48px;
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgba(#1889fa, 0.1);
    border-radius: 24px;

    .title {
      font-size: 48px;
      .welocome {
        margin-bottom: 12px;
      }
    }
    .img {
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
  .rooms-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    .label {
      margin-bottom: 36px;
      font-weight: bolder;
    }
    .rooms-list {
      display: flex;
      flex-direction: row;
      .room {
        display: flex;
        flex-direction: column;
        margin-right: 24px;
        align-items: center;
        &.select {
          .icon {
            .iconfont {
              color: #1889fa;
            }
            background-color: rgba(#1889fa, 0.1);
          }
          .type-label {
            color: #000;
          }
        }
        .type-label {
          color: #6e6a6a;
        }
        .icon {
          width: 120px;
          height: 120px;
          border: 1px solid #1889fa;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 36%;
          margin-bottom: 16px;
          .iconfont {
            font-size: 92px;
          }
        }
      }
    }
  }
  .smart-systems-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .label {
      margin-bottom: 48px;
      font-weight: bolder;
    }
    .systems-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
      .system {
        width: 46%;
        height: 360px;
        border: 2px solid #1889fa;
        background-color: rgba(#1889fa, 0.1);
        margin-bottom: 48px;
        border-radius: 12%;
        box-sizing: border-box;
        padding: 12px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 36px;
        padding-bottom: 72px;
        .van-switch {
          position: absolute;
          right: 24px;
          top: 24px;
        }
        .icon {
          position: relative;
          .iconfont {
            font-size: 106px;
          }
        }
        .info {
          .system-label {
            font-weight: bold;
            margin-bottom: 24px;
          }
        }
      }
    }
  }
}
</style>
