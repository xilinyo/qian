import { defineStore } from 'pinia';
import getters from './getters';
import actions from './actions';

export interface Smart {
  label: string;
  icon: string;
  turn: boolean;
  remark?: string;
  remark_value?: string;
}
export interface Rooms {
  label: string;
  icon: string;
  key: string;
  smart?: Array<Smart>;
}

export interface systemState {
  rooms: Array<Rooms>;
}

export default defineStore<string, systemState>('system', {
  state: () => ({
    rooms: [
      {
        label: '客厅',
        icon: 'keting-1',
        key: 's1',
        smart: [
          {
            label: '空调',
            icon: 'kongtiao-',
            turn: true,
            remark: '目标温度',
            remark_value: '36度',
          },
          {
            label: '灯光',
            icon: 'taideng',
            turn: false,
            remark: '定时',
            remark_value: '开',
          },
        ],
      },
      {
        label: '浴室',
        key: 's2',
        icon: 'yushiyongpin',
        smart: [
          {
            label: '热水器',
            icon: 'yinshuiji-',
            turn: true,
            remark: '目标温度',
            remark_value: '36度',
          },
        ],
      },
    ],
  }),
  getters,
  actions,
});
