

<script setup lang="ts">

import { reactive } from 'vue'
import { getComponents } from '@/utils/register'

const compListObj = getComponents(require.context('@/components/ControlConfigs', true, /.vue/))
const props = withDefaults(defineProps<{
  text: string,
  btnType: string,
  size: string,
  eventName: string,
  options: object,
}>(), {
  text: '',
  btnType:'',
  size: '',
  eventName: '',
  options: {},
})
</script>

<template>
  <div>
    <t-button :type="btnType" :size="size" @click="handleClick">{{text}}</t-button>
  </div>
</template>
