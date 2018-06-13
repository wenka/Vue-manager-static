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
        <router-view>

        </router-view>
      </el-container>
    </el-container>
  </section>
</template>

<script>
  import WkMenus from '@/components/layout/Menus'
  import WkHeader from '@/components/layout/Header'

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
