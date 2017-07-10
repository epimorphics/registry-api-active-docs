<template>
  <div class='c-api-param c-api-param--enum'>
    <el-checkbox v-model='checked' v-on:change='enableOption'>{{ apiParam.displayName() }}</el-checkbox>
    <options-switch-compact
      v-bind:options='apiParam.enumValues()'
      v-bind:initialValue='value'
      v-bind:disabled='!checked'
      v-bind:size='"small"'
      v-on:change='updateOption'
    >
    </options-switch-compact>
  </div>
</template>

<script>
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
    },
    mounted() {
      this.checkDefaultValue();
    },
  };
</script>

<style>
</style>
