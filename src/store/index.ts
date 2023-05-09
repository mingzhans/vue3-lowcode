import { defineStore } from 'pinia';
import { CenterModal, FieldsModalCollect, SomeConfigStore } from '../interfaces';

export const useSomeConfirStore = defineStore({
  id: 'someConfig',
  state: (): SomeConfigStore => ({
   '$fields': {},
   '$controlList': []
  }),
  getters: {
    fields(state) {
      return { ...state.$fields };
    },
    controls(state) {
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
