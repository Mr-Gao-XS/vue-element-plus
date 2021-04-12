<template>
  <div class="dashboard-container">
    实不相瞒 这就是首页
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['roles']),
  },
  created() {},
}
</script>
