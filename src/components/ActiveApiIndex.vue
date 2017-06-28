<template>
  <div class='c-active-api-index'>
    <h2>API endpoints</h2>
    <ul class='c-active-api-index--list'>
      <template v-for="resource in resources">
        <li v-for="method in resource.methods()" class='c-api-method'>
          <active-api-index-entry v-bind:operation='method'> </active-api-index-entry>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import ActiveApiIndexEntry from './ActiveApiIndexEntry';

  export default {
    props: ['resources'],
    components: {
      'active-api-index-entry': ActiveApiIndexEntry,
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
