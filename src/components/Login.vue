
<template>
<div class="login">
  <img src="../assets/logo.png">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="请输入您的用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="formInline.pwd" placeholder="请输入您的用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.stop.prevent="onSubmit" :disabled="disabled">登陆</el-button>
      </el-form-item>
    </el-form>
    <h2>DEVELOPMENT BY LIAM</h2>
  </div>
</div>
</template>

<script>
import md5 from 'js-md5'
import { fetchItem } from '../api/httpData.js'
export default {
  name: 'login',
  data () {
    return {
      msg: '欢迎使用智慧校园API管理平台',
      // disabled: true,
      formInline: {
        user: '',
        pwd: ''
      }
    }
  },
  computed: {
    disabled: function () {
      if (this.formInline.user !== '' && this.formInline.pwd !== '') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    onSubmit () {
      let that = this
      let pwd = md5(that.formInline.user + that.formInline.pwd)
      let data = {name: that.formInline.user, password: pwd}
      fetchItem('verify', data).then((items) => {
        if (items.errno === 0) {
          window.sessionStorage.setItem('accessToken', items.data.access_token)
          that.$router.push({
            name: 'admin_user'
          })
        } else {
          that.$notify.error({
            title: '错误',
            message: '您的账号或密码有误'
          })
        }
      })
    }
  }
}
</script>

<style>
h1,
h2 {
  font-weight: normal;
}
.login{margin-top: 60px;text-align: center;}

</style>
