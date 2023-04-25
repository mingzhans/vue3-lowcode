<script setup lang="ts">
import { ref, reactive } from 'vue'
import RenderCenter from './RenderWidget/RenderCenter'
import RenderRight from './RenderWidget/RenderRight'

const cloneList = reactive([])
const handleClone = (item) => {
  const cloneItem = {
    ...deepClone(item),
    id: idGenerate()
  }
  cloneList.push(cloneItem)
}

const curComponent = reactive(null)
const chooseComp = (item) => {
  curComponent = item
}


</script>

<template>
  <div class="box">
    <div class="left">
      <h4>控件区</h4>
      <draggable
        v-model="$controlList"
        :group="{
          name: 'rendBox',
          pull: 'clone'
        }"
        :sort="false"
        :clone="handleClone"
        animation="300"
      >
        <div
          v-for="(item, index) in $controlList"
          :key="index"
          class="control-item"
        >
          <div :class="item.icon"></div>
          <div>{{ item.name }}</div>
        </div>
      </draggable>
    </div>
    <div class="center">
      <h4>显示区</h4>
      <draggable
        class="center-draggable"
        v-model="cloneList"
        group="rendBox"
        :animation="500"
        :sort="true"
      >
        <RenderCenter
          v-for="item in cloneList"
          :itemData="item"
          :curCompId="curComponent && curComponent.id"
          :key="item.id"
          @chooseComp="chooseComp" />
      </draggable>
    </div>
    <div class="right">
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
  }
</style>
