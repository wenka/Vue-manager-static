<template>
  <section>
    <el-container style="height: 100vh">
      <el-aside :width="collapse?'64px':'300px'" class="overflow-hidden border-right border-color-theme">
        <wk-menus :collapse="collapse"></wk-menus>
      </el-aside>
      <el-container>
        <el-header class="shadow">
          <wk-header @menuController="menuController"></wk-header>
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
    name: "Main",
    components: {
      WkMenus, WkHeader
    },
    data() {
      return {
        collapse: false,
      }
    },
    methods: {
      menuController: function (v) {
        console.log(v)
        this.collapse = v
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

  .el-main {
    text-align: center;
    line-height: 160px;
  }
</style>
