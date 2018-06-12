<template>
  <section>
    <div class="shadow-bottom mt5 mb5 h35 pl10 pr10"
         style="overflow: hidden;white-space: nowrap;position: relative;" ref="scrollDiv" v-if="tags.length > 0">
      <div :style="{position: 'relative',left: left +'px'}" class="transition">
          <span class="pt5 pb5 pl5 pr5 ml5 mr5 shadow br2 bg-success cursor-point"
                :style="{backgroundColor: tag.active?$globalColor.tagActiveColor: $globalColor.tagUnActiveColor, color:  tag.active?$globalColor.tagActiveTextColor: $globalColor.tagUnActiveTextColor}"
                ref="tags" v-for="(tag,index) in tags" :data-path="tags.path" @click="tagClick($event,tag.path)">
              <span class="iconfont br50p ft10 icon-point-copy transition" v-if="tag.active"></span>
              <span class="ft10">{{tag.title}}</span>
              <span class="iconfont icon-del2 br50p ft10 tag-hover"></span>
            </span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "TagsView",
    data() {
      return {
        left: 0, //偏移量
        active: false
      }
    },
    created: function(){
      this.addTags()
    },
    computed: {
      tags: function () {
        let views = this.$store.state.System.visitedViews
        for (let v of views) {
          v.active = false
          if (v.path == this.$route.path) {
            v.active = true
          }
        }
        return views
      }
    },
    watch: {
      $route() {
        this.addTags()
      },
    },
    methods: {
      /**
       * 添加标签
       */
      addTags: function () {
        let view = {
          path: this.$route.path,
          title: this.$route.meta.title
        }
        this.$store.commit('addViews', view)
      },
      tagClick: function (el, path) {
        this.moveToCurrentTag(el)
        this.$router.push({
          path: path
        })
      },
      moveToCurrentTag: function (el) {
        let containWidth = this.$refs.scrollDiv.offsetWidth
        let x = el.layerX
        let target = null
        for (let item of this.$refs.tags) {
          if (item.dataset.path == this.$route.path) {
            target = item
            break
          }
        }
        if (x > containWidth * 0.9) {
          this.left = containWidth * 0.85 - x
        } else {
          this.left = 0
        }
      }
    }
  }
</script>

<style scoped>
  .a {
    background-color: unset;
  }
</style>
