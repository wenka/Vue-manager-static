<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import canvasParticle from '../static/js/canvas-particle'
export default {
  name: 'App',
  mounted: function () {
    let platform = window.navigator.platform
    var config = {
      vx: 4,	//小球x轴速度,正为右，负为左
      vy: 4,	//小球y轴速度
      height: 2,	//小球高宽，其实为正方形，所以不宜太大
      width: 2,
      count: 100,		//点个数
      color: "121, 162, 185", 	//点颜色
      stroke: "130,255,255", 		//线条颜色
      dist: 6000, 	//点吸附距离
      e_dist: 10000, 	//鼠标吸附加速距离
      max_conn: 10 	//点到点最大连接数
    }
    if (platform.includes("Win")) { //只有win平台加载背景动画
      canvasParticle(config)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
