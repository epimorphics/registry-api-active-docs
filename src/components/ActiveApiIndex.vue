<template>
  <ul>
    <li v-for="resource in resources">
      {{ resource }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['resources'],
    mounted: () => {
      console.log('ActiveApiIndex mounted');
    },
  };
</script>

<style>
</style>
