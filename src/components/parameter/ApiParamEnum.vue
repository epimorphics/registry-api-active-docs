<template>
  <div class="c-api-param c-api-param--enum">
    <el-checkbox v-model="checked">{{ apiParam.displayName() }}</el-checkbox>
    <options-switch-compact
      v-bind:options='apiParam.enumValues()'
      v-bind:initialValue='null'
      v-bind:readOnly='false'
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
