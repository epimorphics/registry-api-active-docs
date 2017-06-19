<template>
  <div class="c-api-parameter">
    <template v-if="componentType === 'string'">
      <api-param-string v-bind:apiParam='apiParam'></api-param-string>
    </template>
    <template v-else-if="componentType === 'boolean'">
      <api-param-boolean v-bind:apiParam='apiParam'></api-param-boolean>
    </template>
    <template v-else-if="componentType === 'enum'">
      <api-param-enum v-bind:apiParam='apiParam'></api-param-enum>
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
  import ApiParamBoolean from './parameter/ApiParamBoolean';
  import ApiParamEnum from './parameter/ApiParamEnum';
  import ApiParamString from './parameter/ApiParamString';

  export default {
    props: [
      'apiParam',
    ],
    computed: {
      componentType() {
        return this.apiParam.componentType();
      },
    },
    components: {
      'api-param-boolean': ApiParamBoolean,
      'api-param-enum': ApiParamEnum,
      'api-param-string': ApiParamString,
    },
  };
</script>

<style>
</style>
