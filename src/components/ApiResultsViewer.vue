<template>
  <section id='results-view' class='c-api-results-view'>
    <h3>API preview</h3>
    <div class='c-api-results-view--uri'>
      Endpoint URI
      <el-button id='copy-button' size='small' type='primary' title='Copy to clipboard'>
        <icon name="clipboard"></icon>
      </el-button>
      <div class='c-api-results-view--uri-group'>
        <code>{{ computedURI }}</code>
      </div>
    </div>
  </section>
</template>

<script>
  import ZeroClipboard from 'zeroclipboard';

  export default {
    computed: {
      computedURI() {
        return this.$store.getters.apiEndpoint;
      },
    },
    components: {
    },
    methods: {
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
