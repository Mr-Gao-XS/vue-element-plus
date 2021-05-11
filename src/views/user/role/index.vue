<template>
  <div class="components-container">
    <div class="search-wrap">
      <el-form :inline="true" :model="searchData" class="demo-form-inline">
        <el-form-item class="add-btn">
          <el-button type="primary" icon="el-icon-plus" @click="handleAdd(false)">新增角色</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- table表单 -->
    <el-table :data="tableListData" border style="width: 100%" empty-text="暂无数据">
      <el-table-column prop="" label="门票名称" align="center"></el-table-column>
      <el-table-column prop="" label="门票价格" align="center"></el-table-column>
      <el-table-column prop="" label="门票类型" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="250">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" icon="el-icon-lock" @click="disabled(scope.row)">编辑</el-button>
          <!-- <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="handleAdd(true, scope.row)">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <gzPagination :total="total" :pageSize.sync="pageSize" :pageNumber.sync="pageNumber"></gzPagination>

    <!-- 编辑配置 -->
    <el-dialog :visible="dialogVisble" width="600px" class="int-app-modal" :title="isEdit ? '编辑角色' : '新增角色'" :before-close="closeDialog" :close-on-click-modal="false">
      <el-form :model="submitForm" :rules="rules" size="small" ref="submitFormRef" label-width="100px">
        <el-form-item label="名字" prop="name">
          <el-input v-model="submitForm.name" placeholder="请输入名称"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="submit" :loading="false" :disabled="false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import tableMixins from '@/mixins/tableMixins'
import gzPagination from '@/components/Pagination'
export default {
  name: 'BackToTopDemo',
  components: { gzPagination },
  mixins: [tableMixins],
  data() {
    return {
      searchData: {
        name: null,
      },
      submitForm: {
        id: null,

        name: null,
      },
    }
  },
  methods: {
    searchDataSubmit() {},
    resetSearch() {},
    resetSubmit() {},
    getTableList() {},
    handleAdd() {
      this.dialogVisble = true
    },

    submit() {
      let isValid = false
      this.$refs.submitFormRef.validate((valid) => {
        if (valid) isValid = true
      })
      if (!isValid) return
      console.log(1)
    },
  },

  computed: {
    rules() {
      return {
        name: {
          required: true,
          trigger: 'blur',
          message: '请输入名称',
        },
      }
    },
  },
}
</script>

<style scoped>
.placeholder-container div {
  margin: 10px;
}
</style>
