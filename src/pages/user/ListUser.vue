<template>
  <section>
    <el-row>
      <el-col :span="16">
        <el-card shadow="hover">
          <el-table :data="userList" class="wd98p" highlight-current-row>
            <el-table-column
              type="index"
              align="center"
              width="50">
            </el-table-column>
            <el-table-column
              v-for="column in columns"
              :key="columns.prop"
              show-overflow-tooltip
              align="center"
              :prop="column.prop"
              :label="column.label"
              :width="column.width">
            </el-table-column>
          </el-table>

          <div class="textright mt20">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </el-card>
      </el-col>
      <el-col :span="7" :push="1">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>文章</span>
          </div>
          <div v-for="(o, index ) in 4" :key="o" class="lh40">
            <span class="theme">#{{index+1}}&nbsp;&nbsp;</span>{{'文章标题 ' + o }}
          </div>
        </el-card>

        <el-card shadow="hover" class="mt10">
          <div slot="header" class="clearfix">
            <span>评论</span>
          </div>
          <div v-for="(o, index ) in 4" :key="o" class="lh40">
            <span class="theme">#{{index+1}}&nbsp;&nbsp;</span>{{'评论 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "ListUser",
    data() {
      return {
        columns: [
          {
            prop: 'name',
            label: '用户名',
            width: 100
          },
          {
            prop: 'email',
            label: '邮箱',
            width: 180
          },
          {
            prop: 'permissions',
            label: '权限'
          },
          {
            prop: 'count',
            label: '评论数',
            width: 80
          },
          {
            prop: 'createTime',
            label: '加入时间',
            width: 280
          }
        ],
        userList: [
          {
            id: 1,
            name: '文卡',
            email: 'wkwenka@gmail.com',
            permissions: '增加文章，修改文章，修改权限，增加权限',
            count: 10,
            createTime: '2018-06-13 14:32:00'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
