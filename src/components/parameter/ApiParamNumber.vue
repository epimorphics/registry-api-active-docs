<template>
  <div class='c-api-param c-api-param--number'>
    <el-checkbox v-model='checked'>{{ apiParam.displayName() }}</el-checkbox>
    <el-input-number v-model='value' size='small' v-bind:disabled='!checked'></el-input-number>
  </div>
</template>

<script>
  export default {
    data: () => ({
      checked: false,
      value: 0,
    }),
    props: [
      'apiParam',
    ],
  };
</script>

<style lang='scss' scoped>
</style>
