<script setup lang="ts">
import { inject, watch, isRef, ref } from 'vue'
import { eventMap, actionMap, actionpParams } from '../../utils/dataMap.ts'
import { useSomeConfirStore } from '../../store/index'
import AttrLayout from '../AttrLayout/index.vue'
import { EventModel } from '../../interfaces'
console.log(AttrLayout)
const curComponent = inject('curComponent')

let eventList = ref([]);
const eventData: EventModel = ref({ type: '', target: '', action: { type: '', params: {} } })

let $fields = ref([]);
const store = useSomeConfirStore()
watch(curComponent, (newVal, oldVal) => {
  $fields.value = store.fields[newVal.component]
  eventData.value.target = newVal.id
})


function saveEvent() {
  
}

</script>

<template>
<div>
  <t-form ref="form" label-width="80px">
    <template v-for="(obj, key, index) in $fields" :key="'attr-' + obj.type + curComponent.id + index">
      <AttrLayout :visible="obj.visible" :relatedProps="obj.relatedProps">
        <component
          :is="'attr-' + obj.type"
          v-bind="obj.edit"
          v-model:mVal="curComponent[key]"
          ></component>
      </AttrLayout>
    </template>
  </t-form>
  <!-- <t-form v-if="eventData.target" ref="form1" label-width="80px">
    <t-form-item :label="label">
      <t-select v-model="eventData.type" placeholder="请选择操作">
        <t-option v-for="ev in eventMap" :label="ev.name" :value="ev.type"></t-option>
      </t-select>
    </t-form-item>
    <t-form-item :label="label">
      <t-select v-model="eventData.action.type" placeholder="请选择事件">
        <t-option v-for="item in actionMap" :label="item.name" :value="item.type"></t-option>
      </t-select>
    </t-form-item>
    <template v-for="(obj, key, i) in actionpParams[eventData.action.type]" :key="'attr-' + obj.type + eventData.action.type + i">
      <component
        :is="'attr-' + obj.type"
        v-bind="obj"
        v-model:mVal="eventData.action.params[key]"
        ></component>
    </template>
    <t-button (click)="saveEvent()">确定</t-button>
  </t-form> -->
</div>
  
</template>
<style>
  .el-form {
    padding: 20px;
  }
</style>