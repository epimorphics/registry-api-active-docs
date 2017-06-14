<template>
  <ul>
    <li v-for="resource in resources">
      <ul>
        <li v-for="method in resource.methods()" class='c-api-method'>
          <button class='c-api-method--name'>
            {{ method.displayName() }}
          </button>
          <span class='c-api-method-action'>
            {{ method.action() }}
          </span>
        </li>
      </ul>
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
