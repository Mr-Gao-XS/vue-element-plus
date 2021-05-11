<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
.search-wrap {
  margin-bottom: 5px;
  .el-date-editor .el-range-separator {
    width: 9%;
  }
  .el-date-editor {
    width: 300px;
  }
  .el-form-item {
    margin-bottom: 0;
  }
  .add-btn {
    margin-right: 50px !important;
  }
}

.el-table__header th {
  background: #fafafa !important;
}

.int-app-modal {
  .el-dialog__title {
    position: relative;
    top: -3px;
    color: #409eff;
  }
  .el-dialog {
    margin-top: 10vh !important;
  }
  .el-dialog__header {
    border-bottom: 1px solid #ebeef5;
  }
  .el-dialog__footer {
    border-top: 1px solid #ebeef5;
    padding: 10px 40px 10px 40px;
  }
  .el-dialog__body {
    padding-right: 40px;
    padding-bottom: 0px;
    padding-top: 20px;
  }
}
</style>
