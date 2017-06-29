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
      <codemirror v-model='payload' :options='payloadEditorOptions' ref='payloadEditor' />
    </div>
  </div>
</template>

<script>
  import ContentTypes from '@/models/content-types';

  export default {
    data: () => ({
      payloadContentType: 'json',
      contentTypes: ContentTypes.all(),
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
    computed: {
      editorFormat() {
        return ContentTypes.byName(this.payloadContentType).codemirrorMode;
      },
      editor() {
        return this.$refs.payloadEditor && this.$refs.payloadEditor.editor;
      },
    },
    methods: {
      updateOption(contentType) {
        this.payloadContentType = contentType;
      },
    },
    watch: {
      editorFormat(format) {
        console.log(`setting format to ${format}`);
        this.editor.setOption('mode', format);
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