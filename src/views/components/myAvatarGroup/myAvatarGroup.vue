<template>
  <div class="author flex-row-start">
    <!--  <a-avatar-group>-->
    <div
      class="avatar"
      v-for="(author,index) in authors"
      :key="index"
    >
      <a-avatar
        :size="isLarge?'large':'default'"
        :src="RenderPicture(author.photoFileId||author.avatar)"
      ></a-avatar>
    </div>
  </div>
</template>

<script>
import { RenderPicture } from '@/api/file'

export default {
  name: 'MyAvatarGroup',
  props: {
    isNarrow: {
      type: Boolean,
      default: false
    },
    isLarge: {
      type: Boolean,
      default: false
    },
    authors: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      RenderPicture
    }
  },
  mounted () {
    console.log('avatar', this.authors)
  }
}
</script>

<style scoped>

.avatar {
  margin: 1px;
}

.n-avatar {
  position: relative;

}
</style>
