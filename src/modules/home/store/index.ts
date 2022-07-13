import { defineStore } from 'pinia';
import getters from './getters';
import actions from './actions';

interface homeState {
  userName: string;
}

export default defineStore<string, homeState>('home', {
  state: () => ({
    userName: '王小二',
  }),
  getters,
  actions,
});
