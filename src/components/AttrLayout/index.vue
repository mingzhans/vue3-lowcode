<script setup lang="ts">
  import { changeVisible } from '../../utils/index.ts'
  import { inject, watch, defineProps, ref } from 'vue'
  const curComponent = inject('curComponent')
  const props = defineProps({
    visible: String,
    relatedProps: Array,
    key: String
  })
  let lastVisible = ref();
  lastVisible.value = props.visible && props.relatedProps ? changeVisible(props.relatedProps,props.visible, curComponent) : true
  watch(curComponent, (newVal, oldVal) => {
    if(newVal) {
      lastVisible.value = props.visible && props.relatedProps ? changeVisible(props.relatedProps,props.visible, newVal) : true
    }
  }, {deep: true})

</script>

<template>
  <div v-if="lastVisible">
    <slot></slot>
  </div>
</template>
<style>
  div {
    margin: 2px 0;
  }
</style>