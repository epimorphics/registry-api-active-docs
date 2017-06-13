<template>
  <el-row>
    <el-col :span='6' class='o-index-container'>
      <div class='grid-content'>index will go here</div>
    </el-col>
    <el-col :span='18' class='o-api-description-container'>
      Details will go here
    </el-col>
  </el-row>
</template>

<script>
  import RegistryApi from '@/models/registry-api';

  export default {
    data: () => ({ api: new RegistryApi() }),
    computed: {
      resources: this.api.resources(),
    },
  };
</script>

<style>
</style>
