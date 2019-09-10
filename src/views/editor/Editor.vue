<template>
  <div>
    <nav class="nav">

    </nav>
    <div class="editor">
      <mpe-slides v-model="slides" @select="selectSlide"></mpe-slides>
      <editor
      v-model="content"
      height="100%"
      class="editor-box"
      :options="editorOptions"
      @change="onEditorChange"
      />
    </div>
  </div>
</template>
<script>
import FileSystem from '@/lib/fileSystem'
import Nodeppt from '@/lib/nodeppt'
import MpeSlides from './Slides'
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import { Editor } from '@toast-ui/vue-editor'
import { clearTimeout } from 'timers'

let data = FileSystem.getDefaultFileData()
let slides = Nodeppt.getDataSlides(data)
let time
export default {
  components: { MpeSlides, Editor },
  data () {
    return {
      content: data,
      slides: slides,
      editorOptions: {
        language: 'zh',
        hideModeSwitch: true,
        usageStatistics: false
      }
    }
  },
  methods: {
    selectSlide (i) {
      console.log(i)
    },
    onEditorChange () {
      clearTimeout(time)
      time = setTimeout(() => {
        this.slides = Nodeppt.getDataSlides(this.content)
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav{
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index: 9;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.editor{
  position: absolute;
  top: 50px;
  bottom:0;
  left: 0;
  right: 0;
  display: flex;
  overflow: hidden;
  // align-items: stretch;
}
.editor-box{
  width: 100%;
}
</style>
