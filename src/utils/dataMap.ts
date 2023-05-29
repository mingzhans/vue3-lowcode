import { ActionType, EventType } from "../enums";

export const eventMap = [
  { type: [EventType.click], name: '点击事件' },
  { type: [EventType.change], name: '修改事件' }
]

export const actionMap = [
  { type: [ActionType.dialog], name: '打开弹窗',  },
  { type: [ActionType.openUrl], name: '打开新的页面'},
]

export const actionpParams = {
  [ActionType.dialog]: [
    { title: { type: 'input', label: '标题', value: '' } },
    { content: { type: 'input', label: '内容', value: '' } },
  ],
  [ActionType.openUrl]: [
    { isTarget: { type: 'switch', label: '是否打开新页面', value: true } }
  ]
}