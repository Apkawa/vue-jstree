<template>
  <div id="app" style="padding-bottom: 300px;">
    <h2>Async Loading</h2>
    <div>
      <div style="width:840px; margin: 0 auto;">
        <div style="width:49%; display:inline-block; vertical-align: top;">
          <v-jstree
            :data="asyncData"
            :async="loadData"
            show-checkbox multiple allow-batch whole-row
            @item-click="itemClick"
            ref="tree2"></v-jstree>
        </div>
        <div style="width:50%; display:inline-block; vertical-align: top;">
        <textarea style="height:300px; width:100%;">
          {{asyncData}}
        </textarea>
        </div>
      </div>
    </div>
    <h2>Async Operation</h2>
    <div>
      <div style="width:840px; margin: 0 auto; height: 300px;">
        <button @click="refreshNode">
          refreshAsyncNode
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        searchText: '',
        editingItem: {},
        editingNode: null,
        itemEvents: {
          mouseover: function () {
            console.log('mouseover')
          },
          contextmenu: function () {
            console.log(arguments[2])
            arguments[2].preventDefault()
            console.log('contextmenu')
          }
        },
        asyncData: [],
      }
    },
    methods: {
      itemClick (node) {
        this.editingNode = node
        this.editingItem = node.model
        console.log(node.model.text + ' clicked !')
      },
      refreshNode: function () {
        this.asyncData = [
          this.$refs.tree2.initializeLoading()
        ]
        this.$refs.tree2.handleAsyncLoad(this.asyncData, this.$refs.tree2)
      },
      loadData: function (oriNode, resolve) {
        const id = oriNode.data.id ? oriNode.data.id : 0
        setTimeout(() => {
          let data = []
          if (id > 200) {
            data = []
          }
          else {
            data = [
              {
                'text': 'New Item 1...' + id, 'isLeaf': id > 100
              },
              {
                'text': 'New Item 2...' + id, 'isLeaf': id > 100
              }
            ]
          }
          resolve(data)
        }, 500)
      },
    }
  }
</script>

<style>
</style>
