<template>
  <div id="app" style="padding-bottom: 300px;">
    <h3>Performace Test</h3>
    <div>
      <div style="width:840px; margin: 0 auto;">
        <div style="width:49%; display:inline-block; vertical-align: top;">
          <p style="text-align:left">
            <button @click="fillData">Add files to folder</button>
            <input type="text" v-model="filesToAdd"/>
          </p>
          <v-jstree :data="data3"
                    show-checkbox
                    multiple
                    allow-batch
                    :allow-transition="false"
                    whole-row
                    @item-click="itemClick"
                    ref="tree3"></v-jstree>

        </div>
        <div style="width:50%; display:inline-block;">
                    <textarea style="height:300px; width:100%;">
                      {{data3}}
                    </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        data3: [
          {'text': 'root'}
        ],
        filesToAdd: 1,
        filesToAddIndex: 0
      }
    },
    methods: {
      itemClick (node) {
        this.editingNode = node
        this.editingItem = node.model
        console.log(node.model.text + ' clicked !')
      },
      fillData: function () {
        if (this.editingItem.id !== undefined) {
          for (var i = 0; i < this.filesToAdd; i++) {
            this.filesToAddIndex++
            this.editingItem.addChild({
              text: 'File' + this.filesToAddIndex,
              icon: 'fa fa-file icon-state-danger'
            })
          }
        }
      }
    }
  }
</script>

<style>
</style>
