<template>
  <div class='c-api-param c-api-param--date'>
    <el-checkbox v-model='checked'>{{ apiParam.displayName() }}</el-checkbox>
    <el-date-picker v-model='value' type='datetime'></el-date-picker>
  </div>
</template>

<script>
  export default {
    data: () => ({
      checked: false,
      value: null,
    }),
    props: [
      'apiParam',
    ],
  };
</script>

<style lang='scss' scoped>
</style>
