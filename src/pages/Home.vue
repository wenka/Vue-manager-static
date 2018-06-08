<template>
  <section>
    <el-container style="height: 100vh">
      <el-aside class="overflow-hidden" :width="collapse?'60px':'250px'">
        <wk-menus></wk-menus>
      </el-aside>
      <el-container>
        <el-header>
          <wk-header></wk-header>
        </el-header>
        <!-- 标签面板begin -->
        <wk-tags-view></wk-tags-view>
        <!-- 标签面板end -->
        <el-main class="bg-theme">
          <transition name="el-fade-in">
            <router-view>
            </router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
  import WkMenus from '@/components/layout/Menus'
  import WkHeader from '@/components/layout/Header'
  import WkTagsView from '@/components/layout/TagsView'

  export default {
    name: "Home",
    components: {
      WkMenus, WkHeader, WkTagsView
    },
    computed: {
      collapse: function () {
        return this.$store.state.System.menuCollapse
      }
    }
  }
</script>

<style scoped>
  .el-header {
    line-height: 60px;
  }

  .el-aside {
    transition: width 0.5s;
  }

  .tag-hover:hover {
    background-color: #888888;
  }
</style>
