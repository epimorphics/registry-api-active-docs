<template>
  <div class='c-active-api-index'>
    <h2>API operations</h2>
    <ul class='c-active-api-index--list'>
      <template v-for="resource in resources">
        <li v-for="method in resource.methods()" class='c-api-method'>
          <active-api-index-entry v-bind:operation='method' v-on:change='onSelectOperation'> </active-api-index-entry>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash';
  import * as mutations from '@/store/mutation-types';
  import ActiveApiIndexEntry from './ActiveApiIndexEntry';

  const URL_QUERY_PARAM = 'url';
  const METHOD_QUERY_PARAM = 'method';

  /**
   * Find an existing operation based on query parameters in the URL
   * @param {object} query Given URL query parameters
   */
  function findSelectedOp(query, resources) {
    const qUrl = query[URL_QUERY_PARAM];
    const qMethod = query[METHOD_QUERY_PARAM];

    if (qUrl && qMethod) {
      const selectedResource = _.find(resources, resource => resource.relativeURI() === qUrl);
      if (selectedResource) {
        return _.find(selectedResource.methods(), method => method.action() === qMethod);
      }
    }

    return null;
  }

  export default {
    props: ['resources'],
    components: {
      'active-api-index-entry': ActiveApiIndexEntry,
    },
    methods: {
      onSelectOperation(operation) {
        const resource = operation.resource();

        this.$store.commit(mutations.CLEAR_API_PARAMS);
        this.$store.commit(mutations.SELECT_OPERATION, operation);
        this.$store.commit(mutations.SET_API_ABSOLUTE_URI, resource.absoluteURI());

        // push this new selection state to the current route
        this.setCurrentRoute(resource.relativeURI(), operation.action());
        this.clearCurrentResults();
      },
      setCurrentRoute(uri, methodName) {
        this.$router.push({ query: {
          [URL_QUERY_PARAM]: uri,
          [METHOD_QUERY_PARAM]: methodName,
        } });
      },

      /** Auxilliary method to clear the output components when the user state changes */
      clearCurrentResults() {
        this.$store.commit(mutations.CLEAR_API_RESULT);
        this.$store.commit(mutations.CLEAR_API_RETURN_HEADERS);
      },
    },
    watch: {
      resources() {
        const selectedOperation = findSelectedOp(this.$route.query, this.resources);

        if (selectedOperation) {
          this.onSelectOperation(selectedOperation);
        }
      },
    },
  };
</script>

<style lang='scss'>
  @import "../styles/_common.scss";

  .c-active-api-index {
    border: 1px solid $el-border-grey;
    margin: 20px 0 0 0;

    h2 {
      background-color: $grey-1;
      color: white;
      font-size: 17px;
      margin: 0;
      padding: 4px;
    }

    &--list {
      @extend .u-list-unstyled;
      margin: 0;
      padding: 0;
    }
  }
</style>
