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
  import { LOAD_API_MODEL } from '@/store/mutation-types';

  export default {
    components: {
      'active-api-index': ActiveApiIndex,
    },
    computed: {
      endpoints() {
        const api = this.$store.state.apiModel;
        return api.resources ? api.resources() : [];
      },
    },
    mounted() {
      ApiModelLoader
        .load()
        .then((api) => {
          this.$store.commit(LOAD_API_MODEL, api);
        });
    },
  };
</script>

<style>
</style>
