<template>
  <div id="app" style="padding-bottom: 300px;">
    <h2>Custom Tree Item</h2>
    <div>
      <div style="width:840px; margin: 0 auto;">
        <div style="width:49%; display:inline-block; vertical-align: top;">
          <v-jstree :data="data"
                    :item-events="itemEvents"
                    show-checkbox
                    multiple
                    allow-batch
                    whole-row
                    draggable
                    @item-click="itemClick"
                    @item-drag-start="itemDragStart"
                    @item-drag-end="itemDragEnd"
                    @item-drop-before="itemDropBefore"
                    @item-drop="itemDrop">
            <template scope="props">
              <custom-tree-node :vm="props.vm" :data="props.model"></custom-tree-node>
            </template>
          </v-jstree>
        </div>
        <div style="width:50%; display:inline-block;">
        <textarea style="height:300px; width:100%;">
          {{data}}
        </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomTreeNode from './CustomTreeNode'
  export default {
    name: 'app',
    components: {CustomTreeNode},
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
        data: [
          {
            'text': 'Same but with checkboxes',
            'children': [
              {
                'text': 'initially selected',
                'selected': true
              },
              {
                'text': 'custom icon',
                'icon': 'fa fa-warning icon-state-danger'
              },
              {
                'text': 'initially open',
                'icon': 'fa fa-folder icon-state-default',
                'opened': true,
                'children': [
                  {
                    'text': 'Another node'
                  }
                ]
              },
              {
                'text': 'custom icon',
                'icon': 'fa fa-warning icon-state-warning'
              },
              {
                'text': 'disabled node',
                'icon': 'fa fa-check icon-state-success',
                'disabled': true
              }
            ]
          },
          {
            'text': 'Same but with checkboxes',
            'opened': true,
            'children': [
              {
                'text': 'initially selected',
                'selected': true
              },
              {
                'text': 'custom icon',
                'icon': 'fa fa-warning icon-state-danger'
              },
              {
                'text': 'initially open',
                'icon': 'fa fa-folder icon-state-default',
                'opened': true,
                'children': [
                  {
                    'text': 'Another node'
                  }
                ]
              },
              {
                'text': 'custom icon',
                'icon': 'fa fa-warning icon-state-warning'
              },
              {
                'text': 'disabled node',
                'icon': 'fa fa-check icon-state-success',
                'disabled': true
              }
            ]
          },
          {
            'text': 'And wholerow selection'
          },
          {
            'text': 'drag disabled',
            'icon': 'fa fa-warning icon-state-danger',
            'dragDisabled': true
          },
          {
            'text': 'drop disabled',
            'icon': 'fa fa-warning icon-state-danger',
            'dropDisabled': true
          }
        ],
      }
    },
    methods: {
      itemClick (node) {
        this.editingNode = node
        this.editingItem = node.model
        console.log(node.model.text + ' clicked !')
      },
      itemDragStart (node) {
        console.log(node.model.text + ' drag start !')
      },
      itemDragEnd (node) {
        console.log(node.model.text + ' drag end !')
      },
      itemDropBefore (node, item, draggedItem, e) {
        if (!draggedItem) {
          item.addChild({
            text: 'newNode',
            value: 'newNode'
          })
        }
      },
      itemDrop (node, item) {
        var sortBy = function (attr, rev) {
          if (rev == undefined) {
            rev = 1
          } else {
            rev = (rev) ? 1 : -1
          }
          return function (a, b) {
            a = a[attr]
            b = b[attr]
            if (a < b) {
              return rev * -1
            }
            if (a > b) {
              return rev * 1
            }
            return 0
          }
        }
        item.children.sort(sortBy('text', true))
        console.log(node.model.text + ' drop !')
      },
      inputKeyUp: function () {
        var text = this.searchText
        const patt = new RegExp(text)
        this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function (node) {
          if (text !== '' && node.model !== undefined) {
            const str = node.model.text
            if (patt.test(str)) {
              node.$el.querySelector('.tree-anchor').style.color = 'red'
            } else {
              node.$el.querySelector('.tree-anchor').style.color = '#000'
            } // or other operations
          } else {
            node.$el.querySelector('.tree-anchor').style.color = '#000'
          }
        })
      },
      customItemClick: function (node, item, e) {
        e.stopPropagation()
        var index = node.parentItem.indexOf(item)
        node.parentItem.splice(index, 1)
      },
      customItemClickWithCtrl: function () {
        console.log('click + ctrl')
      },
    }
  }
</script>

<style>
</style>
