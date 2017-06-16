<template>
  <ul>
    <template v-for="resource in resources">
      <li v-for="method in resource.methods()" class='c-api-method'>
        <active-api-index-entry v-bind:operation='method'> </active-api-index-entry>
      </li>
    </template>
  </ul>
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

<style>
</style>
