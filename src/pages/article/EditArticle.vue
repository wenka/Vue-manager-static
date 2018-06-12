<template>
  <section>
    <el-row>
      <el-col :span="18">
        <mavon-editor :ishljs="true" class="word-pad wd100p" v-model="originContent" :subfield="subfield"
                      v-on:subfieldToggle="subfieldToggle"
                      @change="contentChangeHandle" style="min-height: 750px"></mavon-editor>
      </el-col>
      <el-col :span="6">
        <div class="wd98p floatRight">
          <!-- 发布操作面板begin -->
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <span class="iconfont icon-fabu">&nbsp;发布</span>
            </div>
            <div>
              <el-form>
                <el-form-item>
                  <label slot="label">状态</label>
                  <el-select v-model="status" placeholder="请选择" size="mini">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <div class="textright">
                    <el-button type="primary" plain size="mini">发布</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
          <!-- 发布操作面板end -->

          <!-- 类别选择面板begin -->
          <el-card class="mt10" shadow="hover">
            <div slot="header" class="clearfix">
              <span class="iconfont icon-gongzuotai-leibie">&nbsp;类别</span>
            </div>
            <div>
              <el-form>
                <el-form-item>
                  <label slot="label">类别</label>
                  <el-select v-model="category" placeholder="请选择" size="mini" @change="categoryChange" filterable>
                    <el-option
                      v-for="item in categorys"
                      :key="item.id"
                      :label="item.name"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
          <!-- 类别选择面板end -->

          <!-- 标签面板begin -->
          <el-card class="mt10" shadow="hover">
            <div slot="header" class="clearfix">
              <span class="iconfont icon-biaoqian101">&nbsp;标签</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="addNewTag" v-show="!newTagDiv">新增
              </el-button>
            </div>
            <div>
              <el-form>
                <el-form-item>
                  <label slot="label">标签</label>
                  <el-select v-model="tag" placeholder="请选择" size="mini" @change="tagChange" multiple filterable>
                    <el-option
                      v-for="item in tags"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>

              <transition name="el-zoom-in-top">
                <div v-show="newTagDiv">
                  <el-row>
                    <el-col :span="12">
                      <el-input size="mini" placeholder="请输入新标签"></el-input>
                    </el-col>
                    <el-col :span="4" :push="2">
                      <el-button type="primary" size="mini"  @click="addNewTag">确定</el-button>
                    </el-col>
                    <el-col :span="4" :push="2">
                      <el-button size="mini" @click="addNewTag">取消</el-button>
                    </el-col>
                  </el-row>
                </div>
              </transition>

            </div>
          </el-card>
          <!-- 标签面板end -->
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: "NewArticle",
    components: {
      mavonEditor
    },
    data() {
      return {
        originContent: '',
        htmlContent: '',
        subfield: false,
        options: [
          {
            label: '保存草稿',
            value: 0
          },
          {
            label: '立即发布',
            value: 1
          }
        ],
        status: 0, // 文章状态
        categorys: [
          {
            id: 1,
            name: 'Spring'
          },
          {
            id: 2,
            name: 'Vue'
          },
          {
            id: 3,
            name: '程序人生'
          }
        ], // 文章类别
        category: null,
        tags: [
          {
            id: 1,
            name: 'AOP'
          },
          {
            id: 2,
            name: 'IOC'
          },
          {
            id: 3,
            name: 'MVVM'
          },
          {
            id: 4,
            name: '单例'
          }
        ],
        tag: [],
        newTagDiv: false
      }
    },
    methods: {
      /**
       * 监听单双栏回调事件
       */
      subfieldToggle: function (e) {
        this.subfield = e
      },
      /**
       *
       * @param v1 md元数据
       * @param v2 html解析数据
       */
      contentChangeHandle: function (v1, v2) {
        this.htmlContent = v2
      },
      /**
       * 类别选择更改事件
       *
       * @param v
       */
      categoryChange: function (v) {
        console.log(v)
      },
      /**
       * 标签选择更改事件
       *
       * @param v
       */
      tagChange: function (v) {
        console.log(v)
      },
      /**
       * 新增标签div 控制
       */
      addNewTag: function () {
        this.newTagDiv = !this.newTagDiv
      }
    }
  }
</script>

<style scoped>

</style>
