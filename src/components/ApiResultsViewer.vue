<template>
  <section id='results-view' class='c-api-results-view'>
    <h3>API preview</h3>
    <div class='c-api-results-view--uri'>
      Endpoint URI:
      <div class='c-api-results-view--uri-group'>
        <code>{{ computedURI }}</code>
        <el-button type='primary' size='small' v-on:click='copyUriToClibboard'>
          <icon name='clipboard'></icon>
        </el-button>
      </div>
    </div>
  </section>
</template>

<script>

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
      copyUriToClibboard() {
        console.log('copy to clipboard not implemented yet');
      },
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
