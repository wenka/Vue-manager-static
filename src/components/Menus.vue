<template>
  <section>
    <!-- 菜单begin -->
    <div class="theme textcenter ft-bolder lh25 cursor-point cursor-point-color-theme lh60">
      <span :class="{ftStyleItalic:collapse}">{{collapse?'文卡':'LazyBook'}}</span>
    </div>
    <div class="mt5">
      <el-menu unique-opened mode="vertical" :active-text-color="$global.theme" :collapse="collapse"
               @select="menuSelect">
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-neirong">&nbsp;</i>
            <span slot="title">内容管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="editArticle"><span class="iconfont icon-bianji">&nbsp;</span>编辑文章</el-menu-item>
            <el-menu-item index="listAritcle"><span class="iconfont icon-wenzhangliebiaosvg">&nbsp;</span>文章列表
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="类别">
            <el-menu-item index="newCategory"><span class="iconfont icon-bianji">&nbsp;</span>新增类别</el-menu-item>
            <el-menu-item index="statisticalCategory"><span class="iconfont icon-tongji">&nbsp;</span>类别统计
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="标签">
            <el-menu-item index="newTag"><span class="iconfont icon-bianji">&nbsp;</span>新增标签</el-menu-item>
            <el-menu-item index="cloudTag"><span class="iconfont icon-ciyun">&nbsp;</span>标签云</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="评论">
            <el-menu-item index="reviewComment"><span class="iconfont icon-shenhe">&nbsp;</span>评论审核</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-renyuanguanli">&nbsp;</i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">用户</template>
            <el-menu-item index="listUser"><span class="iconfont icon-yonghuliebiao">&nbsp;</span>用户列表
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="权限">
            <el-menu-item index="listPermission"><span class="iconfont icon-quanxianliebiao">&nbsp;</span>权限列表
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="订阅">
            <el-menu-item index="listSubscription"><span class="iconfont icon-dingyue">&nbsp;</span>订阅列表
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont icon-shezhi">&nbsp;</i>
            <span slot="title">系统管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">反馈</template>
            <el-menu-item index="listFeedback"><span class="iconfont icon-yijian">&nbsp;</span>意见列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="组件">
            <el-menu-item index="listComponents"><span class="iconfont icon-zujian-yewu">&nbsp;</span>组件列表
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">版本</template>
            <el-menu-item index="newVersion"><span class="iconfont icon-bianji">&nbsp;</span>版本发布</el-menu-item>
            <el-menu-item index="listVersion"><span class="iconfont icon-1">&nbsp;</span>版本历史</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <!-- 菜单end -->
  </section>
</template>

<script>
  export default {
    name: "Menus",
    computed: {
      collapse: function () {
          return this.$store.state.System.menuCollapse
      }
    },
    methods: {
      /**
       * 菜单点击事件
       */
      menuSelect: function (index, indexPath) {
        this.$router.push({
          name: index
        })
      }
    }
  }
</script>

<style scoped>

</style>
