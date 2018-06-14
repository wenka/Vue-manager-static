<template>
  <section>
    <div class="wd50p marginAuto textcenter" style="height: 80vh;">
      <div class="iconfont icon-_icon theme transition"
           :style="{fontSize: '200px',marginTop: '150px',transform:' rotateY('+angle+'deg)'}"></div>
      <div class="font-minor-color cursor-point">
        <div>{{tips}}</div>
        点击
        <el-button type="text" @click="backPage">此处</el-button>
        返回。
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "NoFound",
    data() {
      return {
        angle: 0,
        tips: '你访问的页面已丢失',
        tip: ''
      }
    },
    created: function () {
      window.setInterval(resolve => {
        this.angle++
      }, 100)
    },
    methods: {
      backPage() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
</style>
