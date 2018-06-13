<template>
  <section>
    <el-row>
      <el-col :span="16">
        <el-card shadow="hover">
          <el-table :data="commentList" class="wd98p" highlight-current-row>
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
                <el-button
                  size="mini">编辑
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
      <el-col :span="7" :push="1">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>敏感词汇</span>
          </div>
          <div class="textcenter">
            <span v-for="word in sensitiveWords" class="inline-block cursor-point cursor-point-color-theme"
                  :style="word.style">
              {{word.name}}
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import * as util from '../../common/randomUtil'

  export default {
    name: "reviewComment",
    data() {
      return {
        sensitiveWords: [
          {
            name: 'TMD'
          },
          {
            name: 'SB'
          },
          {
            name: '傻逼'
          }
        ],
        columns: [
          {
            prop: 'userName',
            label: '用户名',
            width: 80
          },
          {
            prop: 'context',
            label: '评论内容'
          },
          {
            prop: 'title',
            label: '文章标题',
            width: 180
          },
          {
            prop: 'status',
            label: '审核状态',
            width: 80,
            formatter: function (cellValue) {
              let result = ''
              if (cellValue == 0) {
                result = '待审核'
              } else if (cellValue == 1){
                result = '通过'
              } else if (cellValue == -1){
                result = '未通过'
              }else {
                result = '待审核'
              }
              return result
            }
          }
        ],
        commentList: [
          {
            userName: '文卡',
            context: '这篇文章详细讲述了在SpringCloud中使用 ribbon+restTemplate 请求其他服务。',
            title: 'SpringCloud之服务消费者使用ribbon+restTemplate',
            createTime: '2018-06-13 16:41:00'
          }
        ]
      }
    },
    created: function () {
      this.refreshWords()
    },
    methods: {
      refreshWords: function () {
        let sensitiveWords = this.sensitiveWords
        this.sensitiveWords = []
        sensitiveWords.forEach(tag => {
          tag.style = {
            color: util.getRandomColor(),
            fontSize: util.getRandomSize(),
            marginLeft: util.getRandomSize()
          }
        })
        //打乱顺序
        sensitiveWords.sort(function () {
          return 0.5 - Math.random()
        })
        this.sensitiveWords = sensitiveWords
      }
    }
  }
</script>

<style scoped>

</style>
