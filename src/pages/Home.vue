<template>
  <section>
    <el-container style="height: 100vh">
      <el-aside class="overflow-hidden" :width="collapse?'60px':'250px'">
        <wk-menus></wk-menus>
      </el-aside>
      <el-container>
        <el-header class="shadow-bottom">
          <wk-header></wk-header>
        </el-header>
        <div class="shadow mt5 mb5 ml10 mr10 br5">
          1
        </div>
        <el-main class="bg-theme">
          <transition name="el-zoom-in-center">
            <router-view>
            </router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
  import WkMenus from '@/components/Menus'
  import WkHeader from '@/components/Header'

  export default {
    name: "Home",
    components: {
      WkMenus, WkHeader
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
</style>
