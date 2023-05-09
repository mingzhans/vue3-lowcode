

<script setup lang="ts">

import { reactive } from 'vue'

const props = withDefaults(defineProps<{
  text: string,
  btnType: string,
  size: string,
}>(), {
  text: '',
  btnType:'',
  size: '',
})
</script>

<template>
  <div>
    <t-button :theme="btnType" :size="size">{{text}}</t-button>
  </div>
</template>
