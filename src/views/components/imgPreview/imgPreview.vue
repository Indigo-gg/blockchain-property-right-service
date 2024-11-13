
<!--使用之前要注意里面的命名是fileId-->
<template>
  <div class="box">
    <div class="imgs flex-row-start">
      <div class="img" v-for="(item, index) in imgs" :key="index">
        <my-img @click="preview(item)" width="60px" height="60px" :src="item.src">
        </my-img>
      </div>
    </div>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <my-img alt="example" style="width: 100%" :src="curImg" />
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'ImgPreview',
  props: {
    imgs: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      previewVisible: false,
    curImg: ''
    }
  },
  methods: {
    preview (item) {
      this.curImg = item.src
      this.previewVisible = true
    },
    handleCancel () {
      this.previewVisible = false
    }
  },
  mounted () {
    // console.log('imgs', this.imgs)
  }
}
</script>

<style scoped>
.imgs{
  padding: 10px;
  width: 100%;
  overflow-x: scroll;
}
.img{
  margin: 5px;
  width: 60px;
  height: 60px;
}

</style>
