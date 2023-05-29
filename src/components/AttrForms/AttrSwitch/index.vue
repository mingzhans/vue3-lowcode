<script setup lang="ts">
  import { ref, watch } from 'vue'
  const props = withDefaults(defineProps<{
    label: string,
    value: string,
  }>(), {
    label: '',
  })
  const mVal = ref('')
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
    <t-switch v-model="mVal" />
  </t-form-item>
</template>