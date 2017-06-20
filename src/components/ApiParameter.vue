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
      <api-param-number v-bind:apiParam='apiParam'></api-param-number>
    </template>
    <template v-else-if="componentType === 'datetime'">
      <api-param-date-time v-bind:apiParam='apiParam'></api-param-date-time>
    </template>
    <template v-else-if="componentType === 'date'">
      <api-param-date v-bind:apiParam='apiParam'></api-param-date>
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
  import ApiParamNumber from './parameter/ApiParamNumber';
  import ApiParamDate from './parameter/ApiParamDate';
  import ApiParamDateTime from './parameter/ApiParamDateTime';

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
      'api-param-number': ApiParamNumber,
      'api-param-date': ApiParamDate,
      'api-param-date-time': ApiParamDateTime,
    },
  };
</script>

<style>
</style>
