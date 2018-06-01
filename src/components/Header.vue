<template>
  <section>
    <el-row>
      <el-col :span="1">
        <div class="inline-block cursor-point-color-theme cursor-point" @click="menuIconClick">
          <span :class="{iconfont: true,' icon-caidan':!collapse,'icon-menu-un':collapse}"></span>
        </div>
      </el-col>
      <el-col :span="22">
        <div style="padding: 24px">
          <el-breadcrumb separator="/">
            <template v-for="item in breadcrumbs">
              <el-breadcrumb-item v-if="item.name" :to="{ name: item.name }" :key="item.label">
                <span class="cursor-point cursor-point-color-theme">{{item.label}}</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item v-else :key="item.label">
                <span>{{item.label}}</span>
              </el-breadcrumb-item>
            </template>
          </el-breadcrumb>
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
        collapse: false,
        breadcrumbs: []
      }
    },
    watch: {
      '$route': function () {
        this.getBreadcrumbs()
      }
    },
    methods: {
      /**
       * 控制菜单展开-合并
       */
      menuIconClick: function () {
        this.collapse = !this.collapse
        this.$store.commit('triggerCollapse')
      },
      getBreadcrumbs: function () {
        let router = this.$route
        let paths = [{
          label: '首页',
          name: 'home'
        }]
        if (router.name != 'home') {
          paths = [
            {
              label: '首页',
              name: 'home'
            },
            {
              label: router.meta.type,
              name: null
            },
            {
              label: router.meta.category,
              name: null
            },
            {
              label: router.meta.description,
              name: router.name
            }
          ]
        }
        this.breadcrumbs = paths
        console.log(this.breadcrumbs)
      }
    }
  }
</script>

<style scoped>

</style>
