<template>
  <section>
    <el-container style="height: 100vh">
      <el-aside :width="collapse?'64px':'300px'" class="overflow-hidden border-right border-color-theme">
        <wk-menus></wk-menus>
      </el-aside>
      <el-container>
        <el-header class="shadow">
          <wk-header></wk-header>
        </el-header>
        <el-main>
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
