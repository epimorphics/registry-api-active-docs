<template>
  <section class='c-api-op-description' v-if='operation'>
    <h2>
      {{ operation.displayName() }}
    </h2>
    <p>
      {{ operation.description() }}
    </p>
    <p>
      <span>HTTP</span>
      <span class='c-api-op-description--endpoint'>
        <options-switch-compact
          v-bind:options='["get","post","put","patch","delete","head"]'
          v-bind:readOnly='true'
          v-bind:initialValue='operation.action()'
          >
        </options-switch-compact>
        to URL:
        <code>
          {{ operation.resource().relativeURI() }}
        </code>
      </span>
    </p>
    <h3>API parameters</h3>
    <el-row>
      <ul class='c-api-parameters-list u-list-unstyled'>
        <template v-for='apiParam in operation.apiParameters()'>
          <el-col :sm='24' :md='12'>
            <li>
              <api-parameter v-bind:apiParam='apiParam'></api-parameter>
            </li>
          </el-col>
        </template>
      </ul>
    </el-row>
    <api-results-viewer></api-results-viewer>
  </section>
  <section class='c-api-operation-description no-selection' v-else>
    <p>Please choose an API operation</p>
  </section>
</template>

<script>
  import ApiParameter from './ApiParameter';
  import ApiResultsViewer from './ApiResultsViewer';

  export default {
    computed: {
      operation() {
        return this.$store.state.currentOperation;
      },
      computedURI() {
        return this.$store.getters.apiEndpoint;
      },
    },
    components: {
      'api-parameter': ApiParameter,
      'api-results-viewer': ApiResultsViewer,
    },
  };
</script>

<style lang='scss' scoped>
  @import "../styles/_common.scss";

   .c-api-op-description {
     h3 {
       margin: 20px 0 0 0;
     }
   }

  .c-api-parameters-list {
    margin-top: 0;

    li {
      line-height: 2.5em;
    }
  }
</style>
