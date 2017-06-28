<template>
  <div class='c-api-output-display'>
    <h3>API output</h3>
    <template v-if='editorFormat === "csv"'>
      <el-table v-bind:data='tableData' class='c-api-output-display--table'>
        <template v-for='column in tableColumns'>
          <el-table-column v-bind:prop='column' v-bind:label='column'></el-table-column>
        </template>
      </el-table>
    </template>
    <template v-else>
      <codemirror v-model='code' :options='editorOptions' ref='codemirror'></codemirror>
    </template>
  </div>
</template>

<script>
  import parse from 'csv-parse/lib/sync';
  import _ from 'lodash';

  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/turtle/turtle');

  const EDITOR_FORMATS = {
    json: 'application/javascript',
    rdf: 'application/xml',
    ttl: 'text/turtle',
  };

  /** @return True if the chosen data format is CSV */
  function isCsv(editorFormat) {
    return editorFormat === 'csv';
  }

  /** Set the editor options, given a currently selected format */
  function setEditorOptions(editor, format) {
    editor.setOption('mode', format);
  }

  /** Set the CSV options, given a current CSV encoded as a string */
  function setCsvData(csvData) {
    const ppp = parse; // eslint-disable-line

    const records = parse(csvData, { columns: true });
    this.$set(this, 'tableData', records);

    const sampleRecord = _.first(records) || { noData: true };
    this.$set(this, 'tableColumns', _.keys(sampleRecord));
  }

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
        readOnly: true,
      },
      tableData: [],
      tableColumns: [],
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
        return this.$refs.codemirror && this.$refs.codemirror.editor;
      },
    },
    watch: {
      editorFormat(format) {
        if (!isCsv(format) && this.editor) {
          setEditorOptions(this.editor, format);
        }
      },
      code(code) {
        if (isCsv(this.editorFormat)) {
          setCsvData.call(this, code);
        }
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
