<template>
  <div class='c-api-param c-api-param--boolean'>
    <el-checkbox v-model='checked' size='small' v-on:change='enableOption'>{{ apiParam.displayName() }}</el-checkbox>
  </div>
</template>

<script>
  import { SELECT_API_PARAM, UNSELECT_API_PARAM } from '@/store/mutation-types';

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
        this.$store.commit(op, { [this.apiParam.name()]: true });
      },
    },
  };
</script>

<style>
</style>
