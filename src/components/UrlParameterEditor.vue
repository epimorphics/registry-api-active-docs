<template>
  <el-input v-model='value' size='small' v-on:change='onChange' class='c-url-parameter-editor'>
    <template slot='prepend'><code>{{ urlParameter }} = </code></template>
  </el-input>
</template>

<script>
  import { SET_URL_PARAMETER } from '@/store/mutation-types';

  export default {
    data: () => ({
      value: '',
    }),
    props: [
      'urlParameter',
    ],
    methods: {
      onChange(value) {
        this.$store.commit(SET_URL_PARAMETER, { [this.urlParameter]: value });
      },
    },
  };
</script>

<style lang='scss'>
  @import "../styles/_common.scss";

  .c-url-parameter-editor {
    margin-bottom: 10px;

    .el-input-group__prepend {
      color: $black;
    }
  }
</style>
