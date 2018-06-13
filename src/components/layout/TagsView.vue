<template>
  <section>
    <div class="shadow-bottom mt5 mb5 h35 pl10 pr10"
         style="overflow: hidden;white-space: nowrap;position: relative;" ref="scrollDiv" v-if="tags.length > 0">
      <div :style="{position: 'relative',left: left +'px'}" class="transition">
          <span class="pt5 pb5 pl5 pr5 ml5 mr5 shadow br2 bg-success cursor-point"
                :style="{backgroundColor: tag.active?$globalColor.tagActiveColor: $globalColor.tagUnActiveColor, color:  tag.active?$globalColor.tagActiveTextColor: $globalColor.tagUnActiveTextColor}"
                ref="tags" v-for="(tag,index) in tags" :data-path="tags.path">
              <span class="iconfont br50p ft10 icon-point-copy transition" v-if="tag.active"></span>
              <span class="ft10" @click="tagClick($event,tag.path)">{{tag.title}}</span>
              <span class="iconfont icon-del2 br50p ft10 tag-hover" @click="tagDelete(index)"></span>
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
    created: function () {
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
      /**
       * 标签点击事件
       * @param el
       * @param path
       */
      tagClick: function (el, path) {
        this.moveToCurrentTag(el)
        this.$router.push({
          path: path
        })
      },
      /**
       * 移动到当前标签位置
       * @param el
       */
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
      },
      /**
       * 标签删除事件
       * @param index
       */
      tagDelete: function (index) {
        let views = this.tags
        let deleteView = views[index]
        this.$store.commit('deleteViews', index)
        if (views.length == 0) { // 只有一个view 的时候则为全部标签删除，页面跳转到 dashboard 页面
          this.$router.push({
            name: 'dashboard'
          })
        }else if (this.$route.path != deleteView.path){ //如果删除的不是当前页面时 不做跳转
          return
        }else if (index > 0) { // 如果删除的不是第一个标签 跳转到前一个标签页面
          this.$router.push({
            path: views[index - 1].path
          })
        }else { // 如果删除的是第一个标签 跳转到前一个标签页面
          this.$router.push({
            path: views[1].path
          })
        }
      }
    }
  }
</script>

<style scoped>
  .tag-hover:hover {
    background-color: #888888;
  }
</style>
