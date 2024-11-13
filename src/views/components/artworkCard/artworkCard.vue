<template>
  <div :class="type==='large'?'large box':'normal box'" :style="{backgroundColor:$props.bgColor }">
    <a-card
      type="inner"
      :style="{padding:0,width: $props.width,minHeight: $props.height}"
      :bordered="false"
      size="small"
      :bodyStyle="{
        backgroundColor:$props.bgColor,
        height:'100%',
      }"
    >
      <div class="img my-flex-center">
        <my-img
          :width="imgWidth"
          :height="imgHeight"
          :src="artwork.markedfileId"
        />
      </div>
      <a-card-meta>
        <div class="title" slot="title">{{ artwork.name }}</div>
        <div v-if="isShowAuthor" class="author" slot="description">
          <my-avatar-group :is-large="true" :authors="artwork.author"></my-avatar-group>
        </div>
        <div v-if="isShowInfo" class="info text-overflow-5" slot="description">
          <!--        <span>-->
          作品故事：{{ artwork.info }}
          <!--        </span>-->
        </div>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { pageConfig } from '@/views/config/config'
import myImg from '@/views/components/myImg/myImg'
import { RenderPicture } from '@/api/file'
import MyAvatarGroup from '@/views/components/myAvatarGroup/myAvatarGroup'
export default {
  name: 'ArtworkCard',
  components: {
    MyAvatarGroup,
    myImg
  },
  props: {
    artwork: {
      type: Object,
      require: true
    },
    imgWidth: {
      type: String,
      default: '100%'
    },
    imgHeight: {
      type: String,
      default: '300px'
    },
    type: {
      type: String,
      default: 'normal'
    },
    width: {
      type: String,
      default: '210px'
    },
    isShowAuthor: {
      type: Boolean,
      default: true
    },
    isShowInfo: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '240px'
    },
    bgColor: {
      type: String,
      default: 'rgb(255,255,255)'
    }
  },
  data () {
    return {
      color: pageConfig.getTag(1).color,
      RenderPicture
    }
  },
  mounted () {
    console.log('art-card', this.artwork)
  }
}
</script>

<style scoped>
.box{
  padding: 5px;
  /*margin: 20px;*/
  /*border-radius: 5px;*/
}
.img{
  width: 100%;
}
.info{
  overflow-y: scroll;
  /*padding:20px 0;*/
  /*height: 1em;*/
  /*text-overflow: ellipsis;*/
  /*overflow: hidden;*/
}
.title{
  /*padding-top:5px;*/
  padding: 10px 0;
  /*height: 1em;*/
  color: rgb(75, 74, 74);
}
.large .title{
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  /*height: 1em;*/
  color: rgb(75, 74, 74);
}
.jubao-btn{
  /*position: relative;*/
  /*width: 100%;*/
  /*left: 60%;*/
  text-align: right;
}
.author {
  width: 100%;
  font-size: 6px;
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*!*padding: 5px;*!*/
  height: auto;
  min-height: 10em;
}
.au-tag{
  display: inline-block;
  /*background-color: rgba(0, 0, 0, 0.1);*/
  padding: 0 3px;
  max-width: 9em;
  /*width: 10em;*/
  height: 3em;
  text-overflow: ellipsis;
  overflow: hidden;
  border-radius: 5px;
  margin: 0 2px;
}

</style>
