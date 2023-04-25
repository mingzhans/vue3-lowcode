<script setup lang="ts">
import { reactive } from 'vue'
import { getComponents } from '@/utils/register'
// const compListObj = getComponents(require.context('@/components/ControlConfigs', true, /.vue/))


const props = withDefaults(defineProps<{
  curCompId: string,
  itemData: object
}>(), {
  curCompId: '',
  itemData: {},
})

const compClick = () => {
  if(props.curCompId === props.itemData.id) {
    return
  }
  this.$emit('chooseComp', props.itemData)
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