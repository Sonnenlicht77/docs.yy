<!--
 * @Author: yangyang993 sonnenlicht@foxmail.com
-->
<script setup lang="ts">
import DateTodo from '../DateTodo/index.vue';
</script>
<template>
  <div class="custom-home-layout">
    <DateTodo></DateTodo>
  </div>

</template>
<style scoped lang="less">
.custom-home-layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .item {
    flex: 1;
  }
}
</style>