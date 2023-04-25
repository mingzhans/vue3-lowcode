import Vue from 'vue'
import { CenterModal, ComponentModel, FieldsModalCollect } from '../interfaces'
import { useSomeConfirStore } from '../store/someConfig'

class GlobalData {
  constructor() {
    this.init()
  }
  init() {
    this.initConfig()
    // this.registerAttrs()
  }
  // 获取配置组件
   initConfig() {
    const fileFun = import.meta.globEager('@/components/ControlConfigs/*/*.json')
    let fields: FieldsModalCollect = {};
    let controlList: CenterModal[] = []
    Object.keys(fileFun).forEach(key => {
      const compName = key.split('/') && key.split('/')[1]
      const fileJson = fileFun[key] as ComponentModel
      const config: ComponentModel & { component: string } = {
        component: compName,
        ...fileJson
      }
      fields[compName] = fileJson.fields;
      controlList.push(this.rewriteConfig(config))
    })
    const someConfig = useSomeConfirStore()
    someConfig.setFields(fields)
    someConfig.setControls(controlList)
  }

  // 重构中间板块需要用的数据，绑定的属性为｛key： value｝
  rewriteConfig(config:  ComponentModel & { component: string }): CenterModal {
    const { name, icon, component, fields } = config
    const temp = { component }
    const newFiels: {[key: string]: any} = {}
    Object.keys(fields).forEach(item => {
      newFiels[item] = fields[item].value
    })
    return { name, icon, component, ...newFiels }
  }
}

export default GlobalData