<template>
  <div class="system">
    <div class="logo">
      <div class="img">
        <img :src="'/images/avatar.jpg'" alt="" />
      </div>
      <div class="title">
        <div class="name">{{ userName }}</div>
        <div class="describe">智能家居vip用户</div>
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
          <div class="type-label">{{ item.label }}</div>
          <div class="icon">
            <span :class="['iconfont', `icon-${item.icon}`]"></span>
          </div>
          <div class="operate" @click="delType">
            <span class="iconfont icon-shanchu"></span>
          </div>
        </div>
        <div :class="['room']" v-if="roomTypes.length < 3" @click="show = true">
          <div class="type-label">添加</div>
          <div class="icon">
            <span class="iconfont icon-tianjia"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="smart-systems-wrap">
      <div class="label">智能设备</div>
      <div class="systems-list">
        <div class="system" v-for="(item, key) in smartList" :key="key">
          <span :class="['iconfont', `icon-${item.icon}`]"></span>
          <div class="del-wrap" @click="delSmart(key)">
            <span class="iconfont icon-shanchu"></span>
          </div>
        </div>
        <div
          class="system add"
          v-if="smartList.length < 4"
          @click="select = true"
        >
          <span class="iconfont icon-tianjia"></span>
        </div>
      </div>
    </div>

    <van-dialog
      v-model:show="show"
      title="请输入场景名称"
      show-cancel-button
      width="300"
      @confirm="addType"
    >
      <van-cell-group inset>
        <van-field v-model="type" label="场景" placeholder="请输入场景名称" />
      </van-cell-group>
    </van-dialog>

    <van-action-sheet
      v-model:show="select"
      :actions="actions"
      cancel-text="取消"
      description="添加智能设备"
      close-on-click-action
      @select="addSmart"
    />

    <Tabbar />
  </div>
</template>

<script setup lang="ts">
import useStore from 'src/store/index.js';
import Tabbar from '#/Tabbar/index.vue';
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { Dialog } from 'vant';
import 'vant/es/dialog/style';
const VanDialog = Dialog.Component;
// 使用 store
const { home, system } = useStore();
const { userName } = storeToRefs(home);
const { roomTypes, smarts, rooms } = storeToRefs(system);
const [{ key }] = roomTypes.value;

// 默认选中场景
const selectKey = ref(key);
// 场景拥有的智能设备
const smartList = computed(() => {
  return smarts.value[selectKey.value] || [];
});

// 添加场景类型
const type = ref('');
const show = ref(false);
const addType = () => {
  if (type.value) {
    rooms.value.push({
      icon: 'yushiyongpin',
      key: 's3',
      label: type.value,
      smart: [],
    });
    selectKey.value = 's3';
  }
};
const delType = () => {
  rooms.value = rooms.value.filter((item: any) => {
    return item.key !== selectKey.value;
  });
  if (roomTypes.value.length) {
    const [{ key }] = roomTypes.value;
    selectKey.value = key;
  }
};

// 操作智能设备
const select = ref(false);
const actions = [
  {
    name: '空调',
    info: {
      label: '空调',
      icon: 'kongtiao-',
      turn: true,
      remark: '目标温度',
      remark_value: '36度',
    },
  },
  {
    name: '灯光',
    info: {
      label: '灯光',
      icon: 'taideng',
      turn: false,
      remark: '定时',
      remark_value: '开',
    },
  },
  {
    name: '热水器',
    info: {
      label: '热水器',
      icon: 'yinshuiji-',
      turn: true,
      remark: '目标温度',
      remark_value: '36度',
    },
  },
];

const addSmart = (action: any) => {
  rooms.value = rooms.value.map((item: any) => {
    if (item.key === selectKey.value) {
      return {
        ...item,
        smart: [...item.smart, action.info],
      };
    }
    return item;
  });
};

const delSmart = (i: any) => {
  rooms.value = rooms.value.map((item: any) => {
    if (item.key === selectKey.value) {
      return {
        ...item,
        smart: item.smart.filter((_: any, index: number) => index !== i),
      };
    }
    return item;
  });
};
</script>

<style scoped lang="scss">
.system {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 48px;
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 60px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgba(#1889fa, 0.1);
    border-radius: 24px;

    .title {
      font-size: 48px;
      .describe {
        font-size: 24px;
        margin-top: 24px;
      }
    }
    .img {
      border-radius: 50%;
      overflow: hidden;
      margin-right: 24px;
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
        &:last-of-type {
          color: #1889fa;
          .icon {
            border: 1px solid #1889fa;
            background-color: rgba(#1889fa, 0.1);
          }
          .type-label {
            color: #1889fa;
          }
        }
        &.select {
          .icon {
            border: 1px solid #1889fa;
            background-color: rgba(#1889fa, 0.1);
            .iconfont {
              color: #1889fa;
            }
          }
        }
        .type-label {
          color: #6e6a6a;
          margin-bottom: 12px;
          font-size: 12px;
        }
        .operate {
          color: red;
          font-size: 24px;
        }
        .icon {
          width: 120px;
          height: 120px;
          border: 1px solid #6e6a6a;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 36%;
          margin-bottom: 12px;
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
        height: 160px;
        border: 2px solid #8c949c1a;
        margin-bottom: 48px;
        border-radius: 24px;
        box-sizing: border-box;
        padding: 12px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 36px;
        background-color: #8c949c1a;
        padding-left: 72px;
        &.add {
          justify-content: center;
          padding-left: 36px;
          background-color: rgba(#1889fa, 0.1);
          color: #1889fa;
        }
        .iconfont {
          font-size: 106px;
        }
        .del-wrap {
          width: 80px;
          border-left: 1px solid red;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .iconfont {
            font-size: 48px;
            color: red;
          }
        }
      }
    }
  }
}
</style>
