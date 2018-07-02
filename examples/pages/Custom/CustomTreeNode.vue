<template>
  <div style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl">
    <i :class="vm.themeIconClasses" role="presentation" v-if="!data.loading"></i>
    {{data.text}}
    <button style="border: 0px; background-color: transparent; cursor: pointer;"
            @click="customItemClick(vm, data, $event)"><i class="fa fa-remove"></i></button>
  </div>
</template>

<script>
  export default {
    name: 'CustomTreeNode',
    props: ['vm', 'data']
  }
</script>

<style scoped>

</style>
