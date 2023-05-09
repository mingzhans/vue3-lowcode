import { App, Component } from "vue"
const requireComponents = import.meta.glob('../components/ControlConfigs/*/index.vue', { import: 'default', eager: true })
const attrComponents = import.meta.glob('../components/AttrForms/*/index.vue', { import: 'default', eager: true })

export const customizeComp = {
  install(app: App<Element>) {
    Object.keys(requireComponents).forEach((key) => {
      const compName = key.split('/') && key.split('/')[3]
      const com = requireComponents[key] as Component;
      app.component(compName, com)
    });
  }
};

export const attrComp = {
  install(app: App<Element>) {
    Object.keys(attrComponents).forEach((key) => {
      const compName = key.split('/') && key.split('/')[3]
      const com = attrComponents[key] as Component;
      app.component(compName, com)
    });
  }
};