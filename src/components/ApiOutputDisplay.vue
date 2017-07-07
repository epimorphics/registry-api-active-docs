<template>
  <div class='c-api-output-display'>
    <template v-if='this.showReturnContent'>
      <h3>API output</h3>
      <codemirror v-model='code' :options='editorOptions' ref='codemirror'></codemirror>
    </template>
    <div class='c-api-output-display--headers'>
      <h4>Returned HTTP headers</h4>
      <pre class='c-api-output-display--headers-listing'>{{ this.apiReturnHeaders }}</pre>
    </div>
  </div>
</template>

<script>
  import SelectedFormatMixin from '@/services/selected-format-mixin';

  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/turtle/turtle');

  /** Set the editor options, given a currently selected format */
  function setEditorOptions(editor, format) {
    editor.setOption('mode', format);
  }

  export default {
    data: () => ({
      editorOptions: {
        tabSize: 2,
        mode: 'application/javascript',
        lineNumbers: true,
        line: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        readOnly: true,
      },
      tableData: [],
      tableColumns: [],
    }),
    computed: {
      ...SelectedFormatMixin,
      code() {
        return this.$store.state.apiResult;
      },
      editor() {
        return this.$refs.codemirror && this.$refs.codemirror.editor;
      },
      apiReturnHeaders() {
        return this.$store.state.apiReturnHeaders;
      },
      showReturnContent() {
        return this.$store.state.currentOperation.expectsContentType();
      },
    },
    watch: {
      resultFormat() {
        if (this.editor) {
          setEditorOptions(this.editor, this.editorMode);
        }
      },
    },
  };
</script>

<style lang='scss'>
  @import '../styles/_common.scss';

  .c-api-output-display {
    .CodeMirror {
      border: 1px solid $el-border-grey;
    }
  }

  .c-api-output-display--headers-listing {
    border: 1px solid $border-colour;
    min-height: 5em;
  }
</style>
