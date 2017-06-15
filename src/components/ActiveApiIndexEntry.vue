<template>
  <div class='c-api-index-entry'>
    <button class='c-api-operation--name' v-on:click='select'>
      {{ operation.displayName() }}
    </button>
    <span class='c-api-operation-action'>
      {{ operation.action() }}
    </span>
  </div>
</template>

<script>
  import { SELECT_OPERATION } from '@/store/mutation-types';

  export default {
    props: ['operation'],
    methods: {
      /** User has clicked the button to select this operation */
      select() {
        this.$store.commit(SELECT_OPERATION, this.operation);
      },
    },
  };
</script>

<style>
</style>
