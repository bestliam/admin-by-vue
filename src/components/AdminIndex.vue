<template>
  <div class="admin-index">
    <AdminLeft></AdminLeft>
    <AdminMain></AdminMain>
  </div>
</template>

<script>
import AdminLeft from './AdminLeft'
import AdminMain from './AdminMain'
export default {
  components: {'AdminLeft': AdminLeft, 'AdminMain': AdminMain}
}
</script>

<style>
.admin-index{display: flex;flex-direction:row;position: absolute;left: 0;right: 0;top: 0px;bottom: 0px;justify-content: flex-start;}
</style>
