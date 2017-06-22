<template>
  <section id='results-view' class='c-api-results-view'>
    <h3>API preview</h3>
    <div class='c-api-results-view--uri'>
      Endpoint URI:
      <div class='c-api-results-view--uri-group'>
        <code>{{ computedURI }}</code>
        <el-button @click='copyUriToClipboard' id='copy-button'>
          button
        </el-button>
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
      /** Event handler for clicking on the load-to-clipboard button */
      copyUriToClipboard() {
        console.log('copy to clipboard not implemented yet');
      },
    },
    mounted() {
      console.log('Setting up zcclient');
      const zcClient = new ZeroClipboard(document.getElementById('copy-button')); // eslint-disable-line
      // zcClient.on('ready', () => {
      //   console.log('zcclient ready');
      //   zcClient.on('copy', (event) => {
      //     console.log('zcclient on copy');
      //     event.clipboardData.setdData('text/plain', 'this is only a test');
      //   });
      //   zcClient.on('aftercopy', (copyEvent) => {
      //     console.log('zcclient on aftercopy');
      //     copyEvent.target.style.display = 'none'; // eslint-disable-line no-param-reassign
      //     console.log('Copied to clipboard');
      //   });
      // });
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
