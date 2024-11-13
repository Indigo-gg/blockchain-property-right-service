<template>
  <div class="wrapper">
    <template>
      姓名：{{ table.user.name }}
    </template>
    <template>
      <div class="account">账号：{{ table.user.account }}</div>
    </template>
  </div>
</template>

<script>
import { STable } from '@/components'
export default {
  name: 'Index',
  components: {
    STable
  },
  data () {
    return {
      table: {
        user: {
          name: '',
          account: ''
        },
        columns: 10,
        loadData: [{}]
      }
    }
  },
  methods: {
    setUserInfo (name, account) {
      this.table.user.name = name
      this.table.user.account = account
    }
  },
  mounted () {
    this.setUserInfo(this.$store.getters.userInfo.name, this.$store.getters.userInfo.account)
    // console.log('this.$store.getters', this.$store.getters)
  }
}
</script>

<style scoped>

</style>
