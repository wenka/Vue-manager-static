<template>
  <section>
    <el-row>
      <el-col :span="16">
        <el-card shadow="hover">
          <el-table :data="permissionList" class="wd98p" highlight-current-row>
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
            <span>新增权限</span>
          </div>
          <el-form>
            <el-form-item label="权限名">
              <el-input placeholder="请输入新权限"></el-input>
            </el-form-item>
            <el-form-item label="权限值">
              <el-input placeholder="请输入权限值"></el-input>
            </el-form-item>
            <el-form-item class="textcenter">
              <el-button type="primary" size="mini">确定</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "ListPermission",
    data() {
      return {
        columns: [
          {
            prop: 'name',
            label: '权限名',
            width: 100
          },
          {
            prop: 'value',
            label: '权限值'
          },
          {
            prop: 'createTime',
            label: '加入时间',
            width: 280
          }
        ],
        permissionList: [
          {
            id: 1,
            name: '增加文章',
            value: 'article:add',
            createTime: '2018-06-13 14:32:00'
          },
          {
            id: 2,
            name: '增加类别',
            value: 'category:add',
            createTime: '2018-06-13 14:32:00'
          },
          {
            id: 3,
            name: '增加权限',
            value: 'permission:add',
            createTime: '2018-06-13 14:32:00'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
