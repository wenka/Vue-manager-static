<template>
  <section>
    <!-- 标签面板begin -->
    <wk-tags-view></wk-tags-view>
    <!-- 标签面板end -->
    <el-main class="pl10 pr10 pt10 pb10">
      <transition name="el-fade-in">
        <router-view>
        </router-view>
      </transition>
    </el-main>
  </section>
</template>

<script>
  import WkTagsView from '@/components/layout/TagsView'

  export default {
    name: "Main",
    components: {
      WkTagsView
    }
  }
</script>

<style scoped>

</style>
