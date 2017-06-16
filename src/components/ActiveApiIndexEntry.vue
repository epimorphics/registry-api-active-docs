<template>
  <div class='c-api-index-entry' v-bind:class='{ "u-selected": isSelected }'>
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
    computed: {
      isSelected() {
        const op = this.$store.state.currentOperation;
        return op && (op.key() === this.operation.key());
      },
    },
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
  .u-selected {
    background-color: #c0d0c0;
  }
</style>
