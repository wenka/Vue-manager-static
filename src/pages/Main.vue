<template>
  <section>
    <el-container style="height: 100vh">
      <!-- 菜单begin -->
      <el-aside :width="collapse?'64px':'300px'" class="overflow-hidden border-right border-color-theme">
        <div class="theme textcenter ft-bolder lh25 cursor-point cursor-point-color-theme lh60">
          <span :class="{ftStyleItalic:collapse}">{{collapse?'文卡':'LazyBook'}}</span>
        </div>
        <div class="mt5">
          <el-menu unique-opened mode="vertical" :active-text-color="$global.theme" :collapse="collapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="iconfont icon-neirong">&nbsp;</i>
                <span slot="title">内容管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">文章</template>
                <el-menu-item index="1-1"><span class="iconfont icon-bianji">&nbsp;</span>发表文章</el-menu-item>
                <el-menu-item index="1-2"><span class="iconfont icon-wenzhangliebiaosvg">&nbsp;</span>文章列表
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="类别">
                <el-menu-item index="1-3-1"><span class="iconfont icon-bianji">&nbsp;</span>新增类别</el-menu-item>
                <el-menu-item index="1-3-2"><span class="iconfont icon-tongji">&nbsp;</span>类别统计</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="标签">
                <el-menu-item index="1-4-1"><span class="iconfont icon-bianji">&nbsp;</span>新增标签</el-menu-item>
                <el-menu-item index="1-4-2"><span class="iconfont icon-ciyun">&nbsp;</span>标签云</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="评论">
                <el-menu-item index="1-5-1"><span class="iconfont icon-shenhe">&nbsp;</span>评论审核</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="iconfont icon-renyuanguanli">&nbsp;</i>
                <span slot="title">用户管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">用户</template>
                <el-menu-item index="2-1"><span class="iconfont icon-yonghuliebiao">&nbsp;</span>用户列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="权限">
                <el-menu-item index="2-3"><span class="iconfont icon-quanxianliebiao">&nbsp;</span>权限列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="订阅">
                <el-menu-item index="2-3"><span class="iconfont icon-dingyue">&nbsp;</span>订阅列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont icon-shezhi">&nbsp;</i>
                <span slot="title">系统管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">反馈</template>
                <el-menu-item index="3-1"><span class="iconfont icon-yijian">&nbsp;</span>意见列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="组件">
                <el-menu-item index="3-3"><span class="iconfont icon-zujian-yewu">&nbsp;</span>组件列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">版本</template>
                <el-menu-item index="3-4-1"><span class="iconfont icon-bianji">&nbsp;</span>版本发布</el-menu-item>
                <el-menu-item index="3-4-2"><span class="iconfont icon-1">&nbsp;</span>版本历史</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <!-- 菜单end -->
      <el-container>
        <el-header class="shadow">
          <el-row>
            <el-col :span="1">
              <div class="inline-block cursor-point-color-theme cursor-point" @click="menuIconClick">
                <span :class="{iconfont: true,' icon-caidan':!collapse,'icon-menu-un':collapse}"></span>
              </div>
            </el-col>
            <el-col :span="22" :push="1">
              <div class="wd100p textcenter">
                header
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        collapse: false
      }
    },
    created: function () {
    },
    methods: {
      menuIconClick: function () {
        this.collapse = !this.collapse
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
