<template>
  <div class="admin-main">
    <div class="admin-header">
      <div class="left">
        左区域
      </div>
      <div class="right">
        右边区域
      </div>
    </div>
    <div class="content">
      <transition name="fade">
        <router-view class="view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.admin-main{display: flex;align-items: flex-start;width: 100%;flex-direction: column;}
.admin-header{height:60px;background-color: #f2f5f5;display: flex;flex-direction: row;align-items: center;justify-content: space-around;width: 100%}
.content{padding: 20px}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
