<template>
  <section id='results-view' class='c-api-results-view'>
    <h3>API preview</h3>
    <div class='c-api-results-view--uri'>
      Endpoint URI
      <div class='c-api-results-view--uri-group'>
        <code>{{ computedURI }}</code>
        <el-button id='copy-button' size='small' type='primary' title='Copy to clipboard'>
          <icon name="clipboard"></icon>
        </el-button>
      </div>
    </div>
    <div class='c-api-results-view--actions'>
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
  import ApiOutputDisplay from './ApiOutputDisplay';

  export default {
    computed: {
      computedURI() {
        return this.$store.getters.apiEndpoint;
      },
    },
    components: {
      'api-output-display': ApiOutputDisplay,
    },
    methods: {
      invokeAPI() {
        invokeApiEndpoint({
          endpoint: this.computedURI,
          store: this.$store,
        });
      },
    },
    mounted() {
      ZeroClipboard.config({ swfPath: 'static/ZeroClipboard.swf' });

      const zcClient = new ZeroClipboard(document.getElementById('copy-button')); // eslint-disable-line
      zcClient.on('ready', () => {
        zcClient.on('copy', () => {
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
