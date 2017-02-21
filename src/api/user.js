/**
 * api获取数据
 */
const _users = [
  {date: '2016-05-02', name: '王小虎1', bm: '网络中心', address: '上海市普陀区江路1518弄'},
  {date: '2016-05-04', name: '王小虎2', bm: '网络中心', address: '上海市普陀区金沙江路 1517弄'},
  {date: '2016-05-01', name: '王小虎3', address: '上海市普陀区金沙江路 1519弄'},
  {date: '2016-05-03', name: '王小虎4', address: '上海市普陀区金沙江路 1516 弄'}
]

export default {
  getUsers (cb) {
    setTimeout(() => cb(_users), 100)
  },

  overUsers (users, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
