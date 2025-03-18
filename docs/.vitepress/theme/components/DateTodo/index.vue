<!--
 * @Author: yangyang993 sonnenlicht@foxmail.com
-->
<script setup lang="ts"></script>
<template>
  <div class="date-todo">
    <div class="date-todo-title">
      <span>日期</span>
      <span>待办事项</span>
    </div>
    <div class="date-todo-content">
      <div class="date-todo-item">
        <div class="date-todo-item-title">
          <span>2022-10-10</span>
        </div>
        <div class="date-todo-item-content">
          <div class="date-todo-item-content-item">
            <span>1. 完成vuepress搭建</span>
          </div>
          <div class="date-todo-item-content-item">
            <span>2. 完成vuepress搭建</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.date-todo {
  width: 100%;

  .date-todo-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    font-weight: bold;

  }
}
</style>