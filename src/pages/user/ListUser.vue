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
            <span>权限</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="addPermissionDiv = !addPermissionDiv"
                       v-show="!addPermissionDiv">添加权限
            </el-button>
          </div>
          <div>
            <div v-for="(o, index ) in 4" :key="o" class="lh40">
              <span class="theme">#{{index+1}}&nbsp;&nbsp;</span>{{'权限 ' + o }}
            </div>
            <transition name="el-zoom-in-top">
              <div v-show="addPermissionDiv">
                <el-row>
                  <el-col :span="12">
                    <el-select placeholder="请选择取权限" size="mini" v-model="permission">
                      <el-option label="权限1" value="1"></el-option>
                      <el-option label="权限2" value="2"></el-option>
                      <el-option label="权限3" value="3"></el-option>
                      <el-option label="权限4" value="4"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="4" :push="2">
                    <el-button type="primary" size="mini" @click="addPermissionDiv = !addPermissionDiv">确定</el-button>
                  </el-col>
                  <el-col :span="4" :push="2">
                    <el-button size="mini" @click="addPermissionDiv = !addPermissionDiv">取消</el-button>
                  </el-col>
                </el-row>
              </div>
            </transition>
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
        addPermissionDiv: false, //添加权限div控制
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
