<template>
  <section>
    <el-row>
      <el-col :span="replyDiv?16:24">
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
              :width="column.width"
              :formatter="column.formatter">
            </el-table-column>
            <el-table-column label="操作" width="150" align="center">
              <template slot-scope="scope">
                <!--@click="handleEdit(scope.$index, scope.row)"-->
                <el-button type="success"
                  size="mini" @click="replyDiv = !replyDiv">回复
                </el-button>
              </template>
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
      <el-col :span="replyDiv?7:0" :push="replyDiv?1:0">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>回复</span>
          </div>
          <div>
            <el-row>
              <el-col :span="24">
                <el-input placeholder="请输入回复内容"></el-input>
              </el-col>
              <el-col :span="24" class="mt20" >
                <el-button type="primary" size="mini" @click="replyDiv = !replyDiv">确定</el-button>
                <el-button size="mini" @click="replyDiv = !replyDiv">取消</el-button>
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
    name: "Feedback",
    data() {
      return {
        replyDiv: false, //添加权限div控制
        permission: null,
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
            prop: 'feedback',
            label: '意见'
          },
          {
            prop: 'reply',
            label: '回复',
            formatter: function (row) {
              return row.cellValue?row.cellValue: '暂无'
            }
          },
          {
            prop: 'createTime',
            label: '时间',
            width: 280
          }
        ],
        userList: [
          {
            id: 1,
            name: '文卡',
            email: 'wkwenka@gmail.com',
            feedback: '系统样式很好看，但是功能不完全，希望多多改善！',
            createTime: '2018-06-13 14:32:00'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
