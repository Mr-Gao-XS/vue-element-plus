<template>
  <el-pagination class="gz-page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNumber" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" background layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
</template>

<script>
export default {
  name: 'gzPagination',
  data() {
    return {}
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    pageNumber: {
      type: Number,
      default: 1,
    },
  },
  watch: {},
  computed: {},
  methods: {
    handleCurrentChange(page) {
      this.$emit('update:pageNumber', page)
    },
    handleSizeChange(size) {
      this.$emit('update:pageSize', size)
    },
  },
}
</script>

<style scoped lang="scss">
.gz-page {
  margin: 15px 0;
}
</style>
