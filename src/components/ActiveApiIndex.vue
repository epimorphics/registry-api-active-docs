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
  import * as mutations from '@/store/mutation-types';
  import ActiveApiIndexEntry from './ActiveApiIndexEntry';

  export default {
    props: ['resources'],
    components: {
      'active-api-index-entry': ActiveApiIndexEntry,
    },
    methods: {
      onSelectOperation(operation) {
        this.$store.commit(mutations.SELECT_OPERATION, operation);

        this.$store.commit(mutations.CLEAR_API_PARAMS);
        const resource = operation.resource();

        this.$store.commit(mutations.SET_API_ABSOLUTE_URI, resource.absoluteURI());
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
