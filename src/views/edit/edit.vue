<template>
<div class="main">
  <wang-editor></wang-editor>
  <quill-editor></quill-editor>
</div>
</template>

<script>
import WangEditor from '@/components/Editor/WangEditor'
import QuillEditor from '@/components/Editor/QuillEditor'
export default {
  name: 'Edit',
  components: {
    WangEditor,
    QuillEditor
  }
}
</script>

<style scoped>

</style>
