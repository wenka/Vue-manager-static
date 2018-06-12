<template>
  <section>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in 50" :key="item">
        <el-card class="mt5" shadow="hover">
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <el-tooltip content="SpringCloud之服务消费者使用ribbon+restTemplate" placement="top-start">
                  <div class="overflow-hidden cursor-point cursor-point-color-theme">
                    SpringCloud之服务消费者使用ribbon+restTemplate
                  </div>
                </el-tooltip>
              </el-col>
              <el-col :span="6" :push="2">
                <div class="textright">
                  <el-dropdown size="mini">
                     <span class="el-dropdown-link">
                      <i class="el-icon-more cursor-point theme"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>详情</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </el-col>
            </el-row>
          </div>
          <p class="overflow-hidden-3">
            1.
            产生背景随着越来越多的用户参与，业务场景越来越复杂，传统的单体架构已经难以满足互联网技术的发展要求。主要体现在三个方面：随着业务复杂度的提高，代码的可维护性、扩展性和可读性在降低；维护系统的成本、修改系统的成本在提高。随着云计算、大数据、人工智能的飞速发展，对系统架构也提出了越来越
          </p>
          <div>
            <el-row>
              <el-col :span="12">
                <div class="iconfont icon-xingming ft10 font-minor-color">
                  &nbsp;文卡
                </div>
              </el-col>
              <el-col :span="10" :push="2">
                <div class="el-icon-date ft10 font-minor-color textright">
                  2018-05-24 11:19:50
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "ListArticle"
  }
</script>

<style scoped>

</style>
