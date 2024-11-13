<template>
  <div class="drawer">
    <div class="showDrawer" @click="handleShowDrawer">
      <slot name="button">
        <a-button></a-button>
      </slot>
    </div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <slot>
        无内容
      </slot>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: 'MyDrawer',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleShowDrawer () {
      this.showDrawer()
    },
    afterVisibleChange (val) {
      console.log('visible', val)
    },
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    }
  }
}
</script>

<style scoped>

</style>
