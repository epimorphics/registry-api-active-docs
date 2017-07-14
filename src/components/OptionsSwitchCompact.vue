<template>
  <div class='c-options-switch'>
    <template v-if='readOnly'>
      <ul class='c-options-switch--readonly'>
        <template v-for='opt in options'>
          <li class='c-options-switch--readonly-item' v-bind:class='(opt === optionValue) ? "active" : ""'>
            {{ opt }}
          </li>
        </template>
      </ul>
    </template>
    <template v-else>
      <el-radio-group v-model='optionValue' v-bind:disabled='false' v-on:change='onChange'>
        <template v-for='opt in options'>
          <el-radio-button v-bind:label='opt' size='size' v-bind:disabled='disabled'></el-radio-button>
        </template>
      </el-radio-group>
    </template>
  </div>
</template>

<script>
  export default {
    data: () => ({ optionValue: '' }),
    props: [
      'options',
      'initialValue',
      'readOnly',
      'size',
      'disabled',
    ],
    watch: {
      initialValue(v) {
        this.initialiseModel(v);
      },
    },
    mounted() {
      this.initialiseModel(this.initialValue);
    },
    methods: {
      initialiseModel(v) {
        this.$set(this, 'optionValue', v);
      },
      onChange() {
        this.$emit('change', this.optionValue);
      },
    },
  };
</script>

<style lang='scss'>
  @import '../styles/_common.scss';

  $borderColor: $el-border-grey;
  $radius: 4px;

  .c-options-switch {
    display: inline-block;

    &--readonly {
      border: 1px solid $borderColor;
      border-radius: $radius;
      margin: 0;
      padding-left: 0;
    }

    &--readonly-item {
      display: inline-block;
      padding: 4px 8px;
      border-left: 1px solid $borderColor;
      text-transform: uppercase;
      font-size: 80%;
    }

    &--readonly-item.active {
      background-color: $brown;
      color: white;
    }

    &--readonly-item:first-child {
      border-left: none;
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
    }

    &--readonly-item:last-child {
      border-top-right-radius: $radius;
      border-bottom-right-radius: $radius;
    }
  }

  .el-radio-button__inner {
    padding: 6px 15px;
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: $white;
    background-color: $yellow;
    border-color: darken($yellow, 20%);
    box-shadow: -1px 0 0 0 darken($yellow, 20%);
  }

</style>
