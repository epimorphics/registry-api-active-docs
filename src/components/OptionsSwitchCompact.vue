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

<style lang='scss' scoped>
  $borderColor: rgb(191, 203, 217);
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
      padding: 5px 10px;
      border-left: 1px solid $borderColor;
    }

    &--readonly-item.active {
      background-color: green;
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
</style>
