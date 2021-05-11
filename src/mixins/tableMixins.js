export default {
  data() {
    return {
      tableListData: [],
      pageSize: 10,
      pageNumber: 1,
      total: 0,
      dialogVisble: false,
      createdTime: null,
      isEdit: false,
    }
  },
  methods: {
    searchDataSubmit() {
      this.initPage()
      this.getTableList()
    },

    initPage() {
      this.pageNumber = 1
      this.pageSize = 10
    },

    closeDialog() {
      this.dialogVisble = false
    },
  },

  watch: {
    pageSize(v) {
      this.getTableList()
    },
    pageNumber(v) {
      this.getTableList()
    },
    dialogVisble(v) {
      if (!v) {
        this.resetSubmit()
      }
    },
  },
  computed: {},
  created() {},
  filters: {},
}
