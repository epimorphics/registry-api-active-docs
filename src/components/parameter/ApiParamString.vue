<template>
  <div class='c-api-param c-api-param--string'>
    <el-checkbox v-model='checked' v-on:change='enableOption'>{{ apiParam.displayName() }}</el-checkbox>
    <el-input v-model='value' size='small' v-bind:disabled='!checked' v-on:change='updateOption'></el-input>
  </div>
</template>

<script>
  import updateOptionMixin from './update-option-mixin';

  export default {

    data: () => ({
      checked: false,
      value: '',
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
};
</script>

<style lang='scss' scoped>
  .c-api-param--string {
    .el-input {
      max-width: 180px;
    }

    .el-input__inner {
      display: inline-block;
    }
  }

</style>
