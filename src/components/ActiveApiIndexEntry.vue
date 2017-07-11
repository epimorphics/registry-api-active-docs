<template>
  <div class='c-api-index-entry' v-bind:class='{ "u-selected": isSelected }'>
    <button class='c-api-operation' v-on:click='select'>
      <div class='c-api-operation--name-container'>
        <div class='c-api-operation--action'>
          {{ operation.action() }}
        </div>
        <div class='c-api-operation--name'>
          {{ operation.displayName() }}
        </div>
      </div>
    </button>
  </div>
</template>

<script>
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
        this.$emit('change', this.operation);
      },
    },
  };
</script>

<style lang='scss'>
   @import '../styles/_common.scss';
   $index-row-height: 40px;

  .u-selected {
    background-color: $yellow;

    &:before {
      content: '\f105';
      color: white;
      font-family: FontAwesome;
      font-size: 30px;
      top: 50%;
      left: 0;
      position: absolute;
      margin-top: -15px;
    }
  }

  .c-api-index-entry {
    min-height: $index-row-height;
    border: 0;
    border-bottom: 1px solid $el-border-grey;
    padding: 0 0 0 20px;
    margin: 0;
    position: relative;
  }

  .c-api-operation {
    width: 100%;
    height: $index-row-height;
    background-color: white;
    text-align: left;
    padding: 3px;
    border: 0;

    &--name-container {
      position: relative;
      height: 100%;
    }

    &--name {
      padding-right: 40px;
      font-size: 14px;
    }

    &:hover {
      background-color: lighten($yellow, 25%);
    }
  }

  .c-api-operation--action {
    background-color: $brown;
    color: white;
    text-transform: uppercase;
    padding: 4px;
    font-size: 90%;
    top: 0px;
    right: 0;
    position: absolute;
  }
</style>
