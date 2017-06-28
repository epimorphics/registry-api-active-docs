<template>
  <div class='c-payload-editor'>
    <h4>API payload</h4>
    <p>Add content here to use in POST and PUT operations to perform updates using the API.</p>
    <p>
      Payload content type:
      <options-switch-compact
        v-bind:options='contentTypes'
        v-bind:initialValue='payloadContentType'
        v-bind:size='"small"'
        v-on:change='updateOption'
      >
      </options-switch-compact>
    </p>
    <div class='c-payload-editor--codemirror'>
      <codemirror v-model='payload' :options='payloadEditorOptions' ref='payload-editor' />
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      payloadContentType: 'json',
      contentTypes: ['csv', 'json', 'ttl', 'rdf'],
      payload: '',
      payloadEditorOptions: {
        tabSize: 2,
        mode: 'application/javascript',
        lineNumbers: true,
        line: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
      },
    }),
    methods: {
      updateOption(contentType) {
        this.payloadContentType = contentType;
      },
    },
  };
</script>

<style lang='scss'>
  @import '../styles/_common.scss';

  .c-payload-editor--codemirror .CodeMirror {
    max-height: 100px;
    border: 1px solid $el-border-grey;
  }
</style>
