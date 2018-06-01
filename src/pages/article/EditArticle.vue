<template>
  <section>
    <div>
      <mavon-editor :ishljs="true" class="word-pad wd100p" v-model="originContent" :subfield="subfield"
                    v-on:subfieldToggle="subfieldToggle"
                    @change="contentChangeHandle"></mavon-editor>
    </div>
  </section>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: "NewArticle",
    components: {
      mavonEditor
    },
    data() {
      return {
        originContent: '',
        htmlContent: '',
        subfield: false,
      }
    },
    mounted: function () {

    },
    methods: {
      /**
       * 监听单双栏回调事件
       */
      subfieldToggle: function (e) {
        this.subfield = e
      },
      /**
       *
       * @param v1 md元数据
       * @param v2 html解析数据
       */
      contentChangeHandle: function (v1, v2) {
        this.htmlContent = v2
      },
    }
  }
</script>

<style scoped>

</style>
