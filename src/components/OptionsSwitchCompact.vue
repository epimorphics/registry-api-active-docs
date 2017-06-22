<template>
  <el-radio-group v-model='optionValue' v-bind:disabled='false' v-on:change='onChange'>
    <template v-for='opt in options'>
      <el-radio-button v-bind:label='opt' size='size' v-bind:disabled='disabled'></el-radio-button>
    </template>
  </el-radio-group>
</template>

<script>
  export default {
    data: () => ({ optionValue: '' }),
    props: [
      'options',
      'initialValue',
      'readOnly',
      'size',
      'disabled',
    ],
    watch: {
      initialValue(v) {
        this.initialiseModel(v);
      },
    },
    mounted() {
      this.initialiseModel(this.initialValue);
    },
    methods: {
      initialiseModel(v) {
        this.$set(this, 'optionValue', v);
      },
      onChange() {
        this.$emit('change', this.optionValue);
      },
    },
  };
</script>

<style>
</style>
