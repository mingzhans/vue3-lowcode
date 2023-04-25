<script setup lang="ts">
import { useSomeConfirStore } from '../../store/someConfig.ts'
defineProps<{
  curComponentName: string,
}>(), {
  curComponentName: '',
}

const someConfig = useSomeConfirStore()
const $feilds = someConfig.getFields

</script>

<template>
  <t-form ref="form" label-width="80px">
    <template v-for="(obj, key, index)  in field">
      <component
        :is="'attr-' + obj.type"
        v-bind="obj"
        v-model="chontrol.curComponent[key]"
        :key="index"></component>
    </template>
  </t-form>
</template>

<script>
export default {
  inject: ["chontrol"],
  computed: {
    field() {
      return $feilds[this.chontrol.curComponent.component]
    }
  }
}
</script>
<style>
  .el-form {
    padding: 20px;
  }
</style>