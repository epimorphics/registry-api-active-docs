<template>
  <div class='c-api-param c-api-param--boolean'>
    <el-checkbox v-model='checked' size='small' v-on:change='enableOption' v-html='apiParam.displayName()'></el-checkbox>
  </div>
</template>

<script>
  import updateOptionMixin from './update-option-mixin';

  export default {
    data: () => ({
      checked: false,
    }),
    props: [
      'apiParam',
    ],
    methods: {
      ...updateOptionMixin,
      optionValue: () => true,
    },
    mounted() {
      this.checkDefaultValue();
    },
  };
</script>

<style>
</style>
