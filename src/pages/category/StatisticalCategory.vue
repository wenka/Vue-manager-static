<template>
  <section>
    <el-row>
      <el-col :span="16">
        <el-card shadow="hover">
          <el-table :data="categoryList" class="wd98p" highlight-current-row>
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
            <el-table-column label="操作" width="150" align="center">
              <template slot-scope="scope">
                <!--@click="handleEdit(scope.$index, scope.row)"-->
                <el-button
                  size="mini"
                  >编辑
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
            <span>Spring</span>
          </div>
          <div v-for="(o, index ) in 4" :key="o" class="lh40">
            <span class="theme">#{{index+1}}&nbsp;&nbsp;</span>{{'文章标题 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>

  export default {
    name: "StatisticalCategory",
    data() {
      return {
        columns: [
          {
            prop: 'name',
            label: '类别'
          },
          {
            prop: 'count',
            label: '文章数',
            width: 100
          },
          {
            prop: 'createTime',
            label: '创建时间',
            width: 280
          }
        ],
        categoryList: [
          {
            id: 1,
            name: 'Spring',
            count: 10,
            createTime: '2018-06-13 14:32:00'
          },
          {
            id: 2,
            name: 'Hibernate',
            count: 5,
            createTime: '2018-06-12 14:32:00'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
