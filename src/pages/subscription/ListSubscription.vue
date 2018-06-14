<template>
  <section>
    <el-card shadow="hover">
      <el-select placeholder="请选择" v-model="status">
        <el-option label="全部" value="0,1"></el-option>
        <el-option label="正常" value="0"></el-option>
        <el-option label="冻结" value="1"></el-option>
      </el-select>
      <el-table :data="subscriptionList" class="wd98p mt10" highlight-current-row>
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
            <el-button size="mini" :type="scope.row.status==0?'danger':'success'">{{scope.row.status==0?'冻结':'解冻'}}</el-button>
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
  </section>
</template>

<script>
  export default {
    name: "ListSubscription",
    data() {
      return {
        status: '0,1',
        columns: [
          {
            prop: 'email',
            label: '邮箱',
            width: 500
          },
          {
            prop: 'status',
            label: '状态',
            width: 100,
            formatter: function (row) {
              let result = ''
              if (row.status == '0') {
                result = '正常'
              } else if (row.status == 1) {
                result = '冻结'
              }
              return result
            }
          },
          {
            prop: 'createTime',
            label: '订阅时间'
          }
        ],
        subscriptionList: [
          {
            id: 1,
            status: 0,
            email: 'wkwenka@gmail.com',
            createTime: '2018-06-13 14:32:00'
          },
          {
            id: 2,
            status: 1,
            email: 'wenkawk@163.com',
            createTime: '2018-06-13 14:32:00'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
