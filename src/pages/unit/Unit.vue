<template>
  <section>
    <draggable v-model="myArray" :options='{animation:300,handle:".item-card"}'>
      <template v-for="item in myArray">
        <el-card :key="item.id" class="item" shadow="hover">
          <div slot="header" class="item-card cursor-move cursor-point-color-theme">
            <span>组件{{item.name}}</span>
          </div>
          <div v-for="o in 4" :key="o">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </template>
    </draggable>
  </section>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: "Unit",
    components: {
      draggable
    },
    data() {
      return {
        myArray: [
          {
            id: 0,
            name: 'name1'
          },
          {
            id: 2,
            name: 'name2'
          },
          {
            id: 3,
            name: 'name3'
          },
          {
            id: 4,
            name: 'name4'
          },
          {
            id: 5,
            name: 'name5'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .item {
    width: calc(25% - 12px);
    height: 500px;
    float: left;
    margin: 10px 5px;
  }

  .sortable-ghost {
    background-color: rgba(85, 172, 238, .1);
  }

  .cursor-move {
    cursor: move;
  }

  @media all and (max-width: 1000px) {
    .item {
      width: calc(50% - 12px);
    }
  }

  @media all and (max-width: 720px) {
    .item {
      width: 98%;
      margin: auto 0;
      float: none;
    }
  }
</style>
