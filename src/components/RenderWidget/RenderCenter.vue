<script setup lang="ts">
import { reactive, defineComponent } from 'vue'
import { getComponents } from '../../utils/register'
import { createApp } from 'vue'

const props = withDefaults(defineProps<{
  curCompId: number,
  itemData: object
}>(), {
  curCompId: 0,
  itemData: {},
})

const emit = defineEmits(['chooseComp'])
const compClick = () => {
  if(props.curCompId === props.itemData.id) {
    return
  }
  console.log(props.itemData)
  emit('chooseComp', props.itemData)
}
</script>

<template>
  <div class="render-widget" :class="{'active': curCompId === itemData.id}" @click="compClick">
    <component :is="itemData.component" v-bind="itemData"></component>
  </div>
</template>

<style>
  .render-widget.active {
    border: 1px solid blue;
    padding: 3px;
  }
</style>