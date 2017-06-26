<template>
  <div class='c-api-output-display'>
    <codemirror v-model='code' :options='editorOptions' ref='codemirror'></codemirror>
  </div>
</template>

<script>
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/turtle/turtle');

  const EDITOR_FORMATS = {
    json: 'application/json',
    rdf: 'application/xml',
    ttl: 'text/turtle',
  };

  export default {
    data: () => ({
      editorOptions: {
        tabSize: 2,
        mode: 'application/xml',
        lineNumbers: true,
        line: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
      },
    }),
    computed: {
      code() {
        return this.$store.state.apiResult;
      },
      editorFormat() {
        const format = this.$store.getters.apiResultFormat || 'text/plain';
        return EDITOR_FORMATS[format] || format;
      },
      editor() {
        return this.$refs.codemirror.editor;
      },
    },
    watch: {
      editorFormat(format) {
        console.log(`changing mode to ${format}`);
        this.editor.setOption('mode', format);
      },
    },
  };
</script>

<style>
  #codemirror {
    width: 100%;
    min-height: 10em;
    border: 1px solid blue;
  }
</style>