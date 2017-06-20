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
    <h3>API parameters</h3>
    <ul v-for='apiParam in operation.apiParameters()'>
      <li>
        <api-parameter v-bind:apiParam='apiParam'></api-parameter>
      </li>
    </ul>
    <p>
      URI [{{ computedURI }}]
    </p>
  </section>
  <section class='c-api-operation-description no-selection' v-else>
    <p>Please choose an API operation</p>
  </section>
</template>

<script>
  import ApiParameter from './ApiParameter';

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
    },
  };
</script>

<style>
</style>
