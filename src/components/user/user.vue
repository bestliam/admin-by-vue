<template>
<el-table :data="tableData" border>
  <el-table-column
    label="姓名"
    width="180">
    <template scope="scope">
    <el-popover trigger="hover" placement="top">
      <p>姓名: {{ scope.row.name }}</p>
      <p>住址: {{ scope.row.address }}</p>
      <div slot="reference" class="name-wrapper">
        <el-tag>{{ scope.row.name }}</el-tag>
      </div>
    </el-popover>
    </template>
  </el-table-column>
  <el-table-column label="所属部门" width="180">
    <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.bm }}</span>
    </template>
  </el-table-column>
  <el-table-column label="注册日期" width="180">
    <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
  </el-table-column>

    <el-table-column label="操作">
      <template scope="scope">
      <el-button size="small" type="danger" @click="overToUser(scope.row)">解除绑定</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  /* data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        bm: '网络中心',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
  */
  computed: mapGetters({
    tableData: 'allUsers'
  }),
  methods: mapActions([
    'overToUser'
  ]),
  created () {
    this.$store.dispatch('getAllUsers')
  }
}
</script>
<style>
table{width: 100%}
</style>
