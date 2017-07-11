<template>
  <el-input v-model='value' size='small' v-on:change='onChange' class='c-segment-variable-editor'>
    <template slot='prepend'><code>{{ segment }} = </code></template>
  </el-input>
</template>

<script>
  import { SET_API_SEGMENT_VARIABLE } from '@/store/mutation-types';

  export default {
    data: () => ({
      value: '',
    }),
    props: [
      'segment',
    ],
    methods: {
      onChange(value) {
        this.$store.commit(SET_API_SEGMENT_VARIABLE, { [this.segment]: value });
      },
    },
  };
</script>

<style lang='scss'>
  @import "../styles/_common.scss";

  .c-segment-variable-editor {
    margin-bottom: 10px;

    .el-input-group__prepend {
      color: $black;
    }
  }
</style>
