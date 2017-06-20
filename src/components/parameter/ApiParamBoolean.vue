<template>
  <div class='c-api-param c-api-param--boolean'>
    <el-checkbox v-model='checked' size='small'>{{ apiParam.displayName() }}</el-checkbox>
  </div>
</template>

<script>
  export default {
    data: () => ({
      checked: false,
    }),
    props: [
      'apiParam',
    ],
  };
</script>

<style>
</style>
