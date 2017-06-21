<template>
  <div class='c-api-param c-api-param--boolean'>
    <el-checkbox v-model='checked' size='small' v-on:change='enableOption'>{{ apiParam.displayName() }}</el-checkbox>
  </div>
</template>

<script>
  import { SELECT_API_PARAM, UNSELECT_API_PARAM } from '@/store/mutation-types';
  import util from 'util';

  export default {
    data: () => ({
      checked: false,
    }),
    props: [
      'apiParam',
    ],
    methods: {
      enableOption() {
        const op = this.checked ? SELECT_API_PARAM : UNSELECT_API_PARAM;
        console.log(`#enableOption ${util.inspect({ [this.apiParam.name()]: true })}`);
        this.$store.commit(op, { [this.apiParam.name()]: true });
      },
    },
  };
</script>

<style>
</style>
