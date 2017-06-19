<template>
  <div class="c-api-parameter">
    <template v-if="componentType === 'string'">
      A string component named {{ apiParam.displayName() }}
    </template>
    <template v-else-if="componentType === 'boolean'">
      A boolean component named {{ apiParam.displayName() }}
    </template>
    <template v-else-if="componentType === 'enum'">
      An enum component named {{ apiParam.displayName() }}
    </template>
    <template v-else-if="componentType === 'number'">
      A number component named {{ apiParam.displayName() }}
    </template>
    <template v-else-if="componentType === 'datetime'">
      A datetime component named {{ apiParam.displayName() }}
    </template>
    <template v-else-if="componentType === 'date'">
      A date component named {{ apiParam.displayName() }}
    </template>
    <template v-else>
      {{ apiParam.displayName() }} -- {{ apiParam.componentType() }}
    </template>
  </div>
</template>

<script>
  export default {
    props: [
      'apiParam',
    ],
    computed: {
      componentType() {
        return this.apiParam.componentType();
      },
    },
  };
</script>

<style>
</style>
