<template>
  <div class='c-api-param c-api-param--date'>
    <el-checkbox v-model='checked' v-on:change='enableOption'>{{ apiParam.displayName() }}</el-checkbox>
    <el-date-picker v-model='value' type='datetime' size='small' v-bind:disabled='!checked' v-on:change='updateOption'></el-date-picker>
  </div>
</template>

<script>
  import moment from 'moment';
  import updateOptionMixin from './update-option-mixin';

  export default {
    data: () => ({
      checked: false,
      value: null,
    }),
    props: [
      'apiParam',
    ],
    methods: {
      ...updateOptionMixin,
      optionValue() {
        const d = this.value;
        return d && moment(d).toISOString();
      },
    },
  };
</script>

<style lang='scss' scoped>
</style>
