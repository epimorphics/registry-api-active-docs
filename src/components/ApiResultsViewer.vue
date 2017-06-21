<template>
  <section id='results-view' class='c-api-results-view'>
    <h3>API preview</h3>
    <div class='c-api-results-view--uri'>
      URI: <code>{{ computedURI }}</code>
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
  };

</script>

<style>
</style>
