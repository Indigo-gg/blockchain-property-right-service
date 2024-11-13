
<!--使用之前要注意里面的命名是fileId-->
<template>
  <div class="box">
    <div class="imgs flex-row-start">
      <div class="img" v-for="(item, index) in imgs" :key="index">
        <my-img @click="preview(item)" width="100px" height="100px" :src="RenderPicture(item.src)">
        </my-img>
      </div>
    </div>
    <a-modal :visible="previewVisible" @cancel="handleCancel">
      <my-img alt="example" style="width: 100%" :src="RenderPicture(curImg)" />
      <template slot="footer">
        <a-button @click="handleCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          检测水印
        </a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import { RenderPicture } from '@/api/file'
export default {
  name: 'markPreview',
  props: {
    imgs: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      previewVisible: false,
      curImg: '',
      loading:false,
      RenderPicture
    }
  },
  methods: {
    preview (item) {
      this.curImg = item.src
      this.previewVisible = true
    },
    handleCancel () {
      this.previewVisible = false
    },
    handleOk(){
      this.$emit('handleMark',this.curImg)
      this.previewVisible = false
    }
  },
  mounted () {
    console.log('imgs', this.imgs)
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
