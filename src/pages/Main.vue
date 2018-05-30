<template>
  <section>
    <el-container style="height: 100vh">
      <!-- 菜单begin -->
      <el-aside :width="collapse?'64px':'300px'" class="overflow-hidden border-right border-color-theme">
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
            <el-col :span="22">
              <div style="padding: 24px">
                <el-breadcrumb separator="/">
                  <template v-for="item in breadcrumbs">
                      <el-breadcrumb-item v-if="item.name" :to="{ name: item.name }" :key="item.label">
                        <span class="cursor-point cursor-point-color-theme">{{item.label}}</span>
                      </el-breadcrumb-item>
                    <el-breadcrumb-item v-else :key="item.label">
                      <span>{{item.label}}</span>
                    </el-breadcrumb-item>
                  </template>
                </el-breadcrumb>
              </div>
            </el-col>
          </el-row>
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
  export default {
    name: "Main",
    data() {
      return {
        collapse: false,
      }
    },
    computed: {
      breadcrumbs: function () {
        console.log(this.$store.state.System.breadcrumbs)
        return this.$store.state.System.breadcrumbs
      }
    },
    methods: {
      /**
       * 控制菜单展开-合并
       */
      menuIconClick: function () {
        this.collapse = !this.collapse
      },
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
