<template>
  <section class='c-api-op-description' v-if='operation'>
    <h2>
      {{ operation.displayName() }}
    </h2>
    <div class='c-api-op-description--endpoint'>
      {{ operation.resource().relativeURI() }}
      <options-switch-compact
        v-bind:options='["get","post","put","patch","delete","head"]'
        v-bind:readOnly='true'
        v-bind:initialValue='operation.action()'
        >
      </options-switch-compact>
    </div>
    <p>
      {{ operation.description() }}
    </p>
  </section>
  <section class='c-api-operation-description no-selection' v-else>
    <p>Please choose an API operation</p>
  </section>
</template>

<script>
  export default {
    computed: {
      operation() {
        return this.$store.state.currentOperation;
      },
    },
  };
</script>

<style>
</style>
