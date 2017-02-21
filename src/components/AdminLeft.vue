<template>
  <div class="admin-left">
    <div class="header">
      <i class="el-icon-menu"></i>管理系统
    </div>
    <NavLeft></NavLeft>
  </div>
</template>

<script>
import NavLeft from './NavLeft'
export default {
  components: {'NavLeft': NavLeft}
}
</script>

<style>
.admin-left{width: 200px;background-color: #545ca6;color: #ffffff;}
.admin-left .header{line-height: 60px;text-align: left;padding-left: 10px;}
</style>
