<script setup lang="ts">
import { inject } from 'vue'
import { useSomeConfirStore } from '../../store/index'
const curComponent = inject('curComponent', null)

const store = useSomeConfirStore()
const $fields = curComponent ? store.fields[curComponent.component] : []

</script>

<template>
  <t-form ref="form" label-width="80px">
    <template v-for="(obj, key, index) in (curComponent ? store.fields[curComponent.component] : [])" :key="'attr-' + obj.type + curComponent.id">
      <component
        :is="'attr-' + obj.type"
        v-bind="obj"
        v-model:mVal="curComponent[key]"
        ></component>
    </template>
  </t-form>
</template>
<style>
  .el-form {
    padding: 20px;
  }
</style>