import { systemState } from './index';

export interface roomTypes {
  label: string;
  icon: string;
  key: string;
}

export interface Smart {
  label: string;
  icon: string;
  turn: boolean;
  remark?: string;
  remark_value?: string;
}

export interface SmartObject {
  [key: string]: Array<Smart>;
}
export interface ItemObj {
  key: string;
  smart: Array<Smart>;
}

const obj: any = {};
export default {
  roomTypes: (state: systemState): Array<roomTypes> =>
    state.rooms.map(({ label, icon, key }) => ({ label, icon, key })),

  smarts: (state: systemState): SmartObject =>
    state.rooms.reduce((obj, item) => {
      obj[item.key] = item.smart;
      return obj;
    }, obj),
};
