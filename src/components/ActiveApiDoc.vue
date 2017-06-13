<template>
  <el-row>
    <el-col :span='6' class='o-index-container'>
      <active-api-index v-bind:resources='resources'></active-api-index>
    </el-col>
    <el-col :span='18' class='o-api-description-container'>
      Details will go here
    </el-col>
  </el-row>
</template>

<script>
  import ApiModelLoader from '@/services/api-model-loader';
  import ActiveApiIndex from '@/components/ActiveApiIndex';

  export default {
    data: () => ({ api: ApiModelLoader.load() }),
    computed: {
      resources: () => {
        console.log('computing property resources');
        return this.api ? this.api.resources() : [];
      },
    },
    components: {
      'active-api-index': ActiveApiIndex,
    },
    mounted: () => {
      console.log('ActiveApiDoc mounted');
    },
  };
</script>

<style>
</style>
