<script setup lang="ts">
  import { ref, watch } from 'vue'
  const props = withDefaults(defineProps<{
    label: string,
    value: number,
  }>(), {
    label: '',
  })
  const mVal = ref(0)
  const emit = defineEmits(['update:mVal'])
  watch(() => props.value, () => {
    mVal.value = props.value
  }, {
    immediate: true,
    deep: true
  })
  watch(mVal, () => {
    emit('update:mVal', mVal)
  }, {
    immediate: true,
    deep: true
  })

</script>

<template>
  <t-form-item :label="label">
    <t-input type="number" v-model="mVal"></t-input>
  </t-form-item>
</template>