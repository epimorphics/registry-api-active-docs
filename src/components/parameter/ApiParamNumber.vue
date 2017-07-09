<template>
  <div class='c-api-param c-api-param--number'>
    <el-checkbox v-model='checked' v-on:change='enableOption'>{{ apiParam.displayName() }}</el-checkbox>
    <el-input-number v-model='value' size='small' v-bind:disabled='!checked' v-on:change='updateOption'></el-input-number>
  </div>
</template>

<script>
  import updateOptionMixin from './update-option-mixin';

  export default {
    data: () => ({
      checked: false,
      value: 0,
    }),
    props: [
      'apiParam',
    ],
    methods: {
      ...updateOptionMixin,
      optionValue() {
        return this.value;
      },
    },
    mounted() {
      this.checkDefaultValue();
    },
  };
</script>

<style lang='scss' scoped>
  .c-api-param--number > .el-input-number {
    vertical-align: middle !important;
  }
</style>
