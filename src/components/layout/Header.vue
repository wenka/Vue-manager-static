<template>
  <section>
    <el-row>
      <el-col :span="1">
        <div class="inline-block cursor-point-color-theme cursor-point" @click="menuIconClick">
          <div :class="{iconfont: true,' icon-caidan':true,'rote90':collapse,transition: true}"></div>
        </div>
      </el-col>
      <el-col :span="20">
        <div style="padding: 24px">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <template v-for="item in breadcrumbs">
              <el-breadcrumb-item v-if="item.name" :to="{ name: item.name }" :key="item.name">
                <span class="cursor-point cursor-point-color-theme">{{item.meta.title}}</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item v-else :key="item.name">
                <span>{{item.meta.title}}</span>
              </el-breadcrumb-item>
            </template>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="textright">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"  class="br50p vertical-align" width="40"/>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        collapse: false
      }
    },
    computed: {
      breadcrumbs: function () {
        return this.$store.state.System.breadcrumbs
      }
    },
    methods: {
      /**
       * 控制菜单展开-合并
       */
      menuIconClick: function () {
        this.collapse = !this.collapse
        this.$store.commit('triggerCollapse')
      }
    }
  }
</script>

<style scoped>

</style>
