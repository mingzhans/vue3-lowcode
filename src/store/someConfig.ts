import { defineStore } from 'pinia';
import { CenterModal, FieldsModalCollect, SomeConfigStore } from '../interfaces';

export const useSomeConfirStore = defineStore({
  id: 'someConfig',
  state: (): SomeConfigStore => ({
   '$fields': {},
   '$controlList': []
  }),
  getters: {
    getFields(state) {
      return { ...state.$fields };
    },
    getControls(state) {
      return state.$controlList;
    },
  },
  actions: {
    setFields(value: FieldsModalCollect) {
      this.$fields = value;
    },
    setControls(controls: CenterModal[]) {
      this.$controlList = controls
    },
  },
});
