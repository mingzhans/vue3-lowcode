<script setup lang="ts">
import { ref, reactive, provide } from 'vue'
import { Icon } from 'tdesign-icons-vue-next';
import draggable from 'vuedraggable'
import { deepClone, idGenerate } from '../utils/index'
import RenderCenter from './RenderWidget/RenderCenter.vue'
import RenderRight from './RenderWidget/RenderRight.vue'
import { useSomeConfirStore } from '../store/index'

const cloneList = ref([])
const curComponent = ref({})
const handleClone = (item) => {
  const cloneItem = {
    ...deepClone(item),
    id: idGenerate()
  }
  cloneList.value.push(cloneItem)
  curComponent.value = cloneItem
}

const chooseComp = (item) => {
  console.log(item, cloneList)
  console.log('curComponent', curComponent)
  curComponent.value = item
  console.log('curComponent1111', curComponent)
}

provide('curComponent', curComponent)

const store = useSomeConfirStore()
</script>

<template>
  <div class="box">
    <div class="left">
      <h4>控件区</h4>
      <draggable
        v-model="store.controls"
        :group="{
          name: 'rendBox',
          pull: 'clone'
        }"
        :sort="false"
        :clone="handleClone"
        item-key="id"
        animation="300"
      >
        <template #item="{element}">
          <div class="control-item">
            <icon :name="element.icon"></icon>
            <div>{{ element.name }}</div>
            </div>
        </template>
      </draggable>
    </div>
    <div class="center">
      <h4>显示区</h4>
      <draggable
        class="center-draggable"
        v-model="cloneList"
        group="rendBox"
        :animation="500"
        item-key="id"
        :sort="true"
      >
        <template #item="{element}" >
          <RenderCenter
            :itemData="element"
            :curCompId="curComponent && curComponent.id"
            :key="element.id"
            @click="chooseComp(element)" />
        </template>
      </draggable>
    </div>
    <div class="right">
      <h4>属性编辑区</h4>
      <RenderRight v-if="curComponent" :curComponent="curComponent"></RenderRight>
    </div>
  </div>
</template>

<style scoped>
  .box {
    width: 100%;
    height: 100%;
    background: #eee;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 25%;
  }
  .center {
    width: 46%;
  }
  .center-draggable {
    min-height: 600px;
  }
  .right {
    width: 25%;
    padding: 0 20px;
  }
  .left,.center,.right {
    background: #fff;
    height: calc(100vh - 40px);
    border-radius: 10px;
  }
  h4 {
    padding-left: 10px;
  }
  .control-item {
    padding: 20px;
    font-size: 18px;
    text-align: center;
    display: inline-block;
    color: blue;
    cursor: pointer;
  }
  .t-icon {
    width: 2rem;
    height: 2rem;
  }
</style>
