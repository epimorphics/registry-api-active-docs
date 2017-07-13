<template>
  <section id='results-view' class='c-api-results-view'>
    <api-payload-editor v-if='expectsPayload' v-bind:key='key'></api-payload-editor>

    <h3>API preview</h3>
    <div class='c-api-results-view--uri'>
      Endpoint URI
      <div class='c-api-results-view--uri-group'>
        <code>{{ computedURI }}</code>
        <el-button id='copy-button' size='small' type='primary' title='Copy to clipboard'>
          <icon name="clipboard"></icon>
        </el-button>
      </div>
      <el-button type='primary' size='large' v-on:click='invokeAPI'>
        Try it
      </el-button>
    </div>
    <api-output-display></api-output-display>
  </section>
</template>

<script>
  import ZeroClipboard from 'zeroclipboard';
  import invokeApiEndpoint from '@/services/api-invoker';
  import SelectedFormatMixin from '@/services/selected-format-mixin';
  import ContentTypes from '@/models/content-types';
  import ApiOutputDisplay from './ApiOutputDisplay';
  import ApiPayloadEditor from './ApiPayloadEditor';

  export default {
    data: () => ({
    }),
    computed: {
      ...SelectedFormatMixin,
      computedURI() {
        return this.$store.getters.apiEndpoint;
      },
      apiPayload() {
        return this.$store.state.apiPayload;
      },
      apiPayloadMimeType() {
        const cType = this.apiPayload && this.apiPayload.contentType;
        return cType ? ContentTypes.byName(this.apiPayload.contentType).mimeType : null;
      },
      expectsPayload() {
        return this.$store.state.currentOperation.expectsPayload();
      },
      key() {
        return this.$store.state.currentOperation.key();
      },
    },
    components: {
      'api-output-display': ApiOutputDisplay,
      'api-payload-editor': ApiPayloadEditor,
    },
    methods: {
      invokeAPI() {
        invokeApiEndpoint({
          endpoint: this.computedURI,
          acceptType: this.resultMimeType,
          store: this.$store,
          payload: this.apiPayload && this.apiPayload.data,
          payloadContentType: this.apiPayloadMimeType,
        });
      },
    },
    mounted() {
      ZeroClipboard.config({
        swfPath: 'static/ZeroClipboard.swf',
        moviePath: 'static/ZeroClipboard.swf',
        debug: true,
      });

      const zcClient = new ZeroClipboard(document.getElementById('copy-button'));
      zcClient.on('ready', () => {
        console.log('zc client ready');
        zcClient.on('copy', () => {
          console.log('zc client copy');
          ZeroClipboard.setData('text/plain', this.computedURI);
        });
      });
    },
  };

</script>

<style lang='scss' scoped>
  .c-api-results-view--uri-group {
    display: inline-block;;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 4px;
  }
</style>
