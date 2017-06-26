<template>
  <div class='c-api-output-display'>
    <codemirror v-model='code' :options='editorOptions' ref='codemirror'></codemirror>
  </div>
</template>

<script>
  export default {
    data: () => ({
      editorOptions: {
        tabSize: 2,
        mode: 'text/plain',
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
