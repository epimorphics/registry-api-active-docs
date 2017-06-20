<template>
  <div class='c-api-param c-api-param--enum'>
    <el-checkbox v-model='checked'>{{ apiParam.displayName() }}</el-checkbox>
    <options-switch-compact
      v-bind:options='apiParam.enumValues()'
      v-bind:initialValue='null'
      v-bind:disabled='!checked'
      v-bind:size='"small"'
    >
    </options-switch-compact>
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
