<template>
  <section class='c-api-op-description' v-if='operation'>
    <h2>
      {{ operation.displayName() }}
    </h2>
    <p v-html='operation.description()'>
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
    <template v-if='urlParameters.length > 0'>
      <ul class='c-url-parameters'>
        <li><p>URL template parameters:</p></li>
        <li v-for='urlParam in urlParameters' v-bind:key='`${operation.key()}-${urlParam}`'>
          <url-parameter-editor v-bind:urlParameter='urlParam'></url-parameter-editor>
        </li>
      </ul>
    </template>
    <h3>API parameters</h3>
    <el-row>
      <ul class='c-api-parameters-list u-list-unstyled'>
        <template v-for='apiParam in operation.apiParameters()'>
          <li>
            <el-col :sm='24' :md='12'>
              <api-parameter v-bind:apiParam='apiParam'></api-parameter>
            </el-col>
          </li>
        </template>
      </ul>
    </el-row>
    <api-results-viewer></api-results-viewer>
  </section>
  <section class='c-api-op-description no-selection' v-else>
    <p>Please choose an example API operation</p>
  </section>
</template>

<script>
  import ApiParameter from './ApiParameter';
  import ApiResultsViewer from './ApiResultsViewer';
  import UrlParameterEditor from './UrlParameterEditor';

  export default {
    computed: {
      operation() {
        return this.$store.state.currentOperation;
      },
      computedURI() {
        return this.$store.getters.apiEndpoint;
      },
      urlParameters() {
        return this.$store.state.currentOperation.resource().urlParameters();
      },
    },
    components: {
      'api-parameter': ApiParameter,
      'api-results-viewer': ApiResultsViewer,
      'url-parameter-editor': UrlParameterEditor,
    },
  };
</script>

<style lang='scss' scoped>
  @import "../styles/_common.scss";

   .c-api-op-description {
     margin-left: 15px;

     &.no-selection {
        font-style: italic;
        color: $grey-1;
        margin-top: 2em;
     }

     h3 {
       margin: 20px 0 0 0;
     }
   }

  .c-api-parameters-list {
    margin-top: 0;

    li {
      line-height: 35px;
    }
  }

  .c-url-parameters {
    list-style: none;
  }
</style>
