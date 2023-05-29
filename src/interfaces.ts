import { ActionType, ComponentType, EventType } from "./enums"

type AddKey<T> = {
  [key: string]: T
}

// 属性区域模型
export interface AttrsModel {
  type: string;
  edit: {
    label: string;
    value: string;
    options?: object[];
  }
}

export type FieldsModal = AddKey<AttrsModel>

export type FieldsModalCollect = AddKey<FieldsModal>


// 组件模型
export interface ComponentModel {
  name: string;
  icon: string;
  type: ComponentType;
  fields: FieldsModal;
}

//中间组件渲染模型
export type CenterModal = Pick<ComponentModel, 'name' | 'icon'> & {
  component: string
} & {
  [key: string]: any
}

export interface SomeConfigStore {
  '$fields': FieldsModalCollect;
  '$controlList': CenterModal[]
}

export interface Action {
  type: ActionType;
  params: object;
}

export interface EventModel {
  type: EventType;
  target: string;
  action: Action
}

