<template>
  <el-row>
    <el-col :span='6' class='o-index-container'>
      <active-api-index v-bind:resources='endpoints'></active-api-index>
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
    data: () => {     // eslint-disable-line
      return { api: {} };
    },
    components: {
      'active-api-index': ActiveApiIndex,
    },
    computed: {
      endpoints() {
        return this.api.resources ? this.api.resources() : [];
      },
    },
    mounted() {
      ApiModelLoader
        .load()
        .then((api) => {
          this.api = api;
        });
    },
  };
</script>

<style>
</style>
