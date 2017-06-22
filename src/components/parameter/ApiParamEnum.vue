<template>
  <div class='c-api-param c-api-param--enum'>
    <el-checkbox v-model='checked' v-on:change='enableOption'>{{ apiParam.displayName() }}</el-checkbox>
    <options-switch-compact
      v-bind:options='apiParam.enumValues()'
      v-bind:initialValue='null'
      v-bind:disabled='!checked'
      v-bind:size='"small"'
      v-on:change='cacheAndUpdateOption'
    >
    </options-switch-compact>
  </div>
</template>

<script>
  import { UNSELECT_API_PARAM } from '@/store/mutation-types';
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
        return this.value;
      },
      cacheAndUpdateOption(value) {
        this.$store.commit(UNSELECT_API_PARAM, this.apiParam.name());
        this.$set(this, 'value', value);
        this.updateOption();
      },
    },
  };
</script>

<style>
</style>
