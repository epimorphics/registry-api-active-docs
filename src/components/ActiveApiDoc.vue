<template>
  <div class="o-container">
    <env-registry-header />
    <el-row>
      <el-col :sm='{span: 24, offset: 0}' :md='{span: 18, offset: 0}' :lg='{span: 16, offset: 2}'>
        <h2>Environment Registry API: active documentation sandbox</h2>
        <p>
          The environment registry manages collections of controlled terms and codelists
          for the Defra family of organizations. Read more
          <a href='/registry/ui/api-documentation'>about the API</a>, or try out
          sample API calls below.
        </p>
      </el-col>
    </el-row>
    <el-row :gutter='15'>
      <el-col :md='{span: 6, offset: 0}' :lg='{span: 4, offset: 2}' :sm='24' class='o-index-container'>
        <active-api-index v-bind:resources='endpoints'></active-api-index>
      </el-col>
      <el-col :md='{span: 18, offset: 0}' :lg='{span: 16, offset: 0}' :sm='24' class='o-api-description-container'>
        <api-op-description></api-op-description>
      </el-col>
    </el-row>
    <env-registry-footer />
  </div>
</template>

<script>
  import ApiModelLoader from '@/services/api-model-loader';
  import ActiveApiIndex from '@/components/ActiveApiIndex';
  import ApiOpDescription from '@/components/ApiOpDescription';
  import EnvRegistryHeader from '@/components/EnvRegistryHeader';
  import EnvRegistryFooter from '@/components/EnvRegistryFooter';

  import { LOAD_API_MODEL } from '@/store/mutation-types';

  export default {
    components: {
      'active-api-index': ActiveApiIndex,
      'api-op-description': ApiOpDescription,
      'env-registry-header': EnvRegistryHeader,
      'env-registry-footer': EnvRegistryFooter,
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
