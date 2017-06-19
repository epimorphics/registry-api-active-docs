<template>
  <div class="c-api-param c-api-param--string">
    <el-checkbox v-model="checked">{{ apiParam.displayName() }}</el-checkbox>
    <el-input v-model="value"></el-input>
  </div>
</template>

<script>
  export default {
    data: () => ({
      checked: false,
      value: '',
    }),
    props: [
      'apiParam',
    ],
  };
</script>

<style>
  .c-api-param--string .el-input {
    max-width: 180px;
  }

  .c-api-param--string .el-input__inner {
    display: inline-block;
  }
</style>
