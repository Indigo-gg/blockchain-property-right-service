<!--使用之前要注意里面的命名是fileId-->
<template>
  <div class="box">
    <div class="hashCode"><code class="hash" v-if="artworkHash">著作权水印:{{ artworkHash }}</code>
      <code class="hash" v-if="publicAdd">上链前作品水印:{{ publicAdd }}</code>


    </div>
    <div class="imgs flex-row-start">
      <div class="img">
        <my-img @click="preview()" :width="width" :height="height" :src="RenderPicture(img)">
        </my-img>
      </div>
    </div>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <div class="hash" v-if="artworkHash">著作权水印:{{ artworkHash }}</div>
      <div class="hash" v-if="publicAdd">上链前作品水印:{{ publicAdd }}</div>
      <my-img alt="example" style="width: 100%" :src="RenderPicture(img)" />
    </a-modal>
  </div>
</template>

<script>
import { RenderPicture } from '@/api/file'

export default {
  name: 'markResPreview',
  props: {
    img: {
      type: String,
      require: true
    },
    publicAdd: {
      type: String
    },
    artworkHash: {
      type: String
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }

  },
  data () {
    return {
      previewVisible: false,
      curImg: '',
      loading: false,
      RenderPicture
    }
  },
  methods: {
    preview () {
      // this.curImg = item.src
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
.imgs {
  padding: 10px;
  width: 100%;
  overflow-x: scroll;
}

.img {
  margin: 5px;
  /*width: 60px;*/
  /*height: 60px;*/
}
.hashCode{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hash {
  width: 100%;
  margin: 5px;
  color: #0e0e0e;
  font-size: 16px;
  border-radius: 5px;
  background-color: #f1efef;
  padding: 10px;
}
</style>
