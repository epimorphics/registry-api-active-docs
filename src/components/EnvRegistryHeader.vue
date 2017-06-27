<template>
  <nav class="c-env-registry-header">
    <h1>Environment Registry</h1>
    <el-menu theme="dark" :default-active="activeIndex"mode="horizontal">
      <el-menu-item index="1"><a href=''>Browse</a></el-menu-item>
      <el-menu-item index="2"><a href=''>About</a></el-menu-item>
      <el-submenu index="3">
        <template slot="title">Advanced</template>
        <el-menu-item index="3-1"><a href='/registry/ui/login?return=https://environment-registry.epimorphics.net/registry/'>Login</a></el-menu-item>
        <el-menu-item index="3-2"><a href='/registry/ui/api-documentation'>API documentation</a></el-menu-item>
        <el-menu-item index="3-3"><a href='/registry/?showStatus=accepted'>Show all entries</a></el-menu-item>
        <el-menu-item index="3-4"><a href='/registry/ui/actions/check-page'>Check URI</a></el-menu-item>
        <el-menu-item index="3-5"><a href='/registry/ui/sparql-form'>SPARQL</a></el-menu-item>
      </el-submenu>
    </el-menu>
  </nav>
</template>

<script>
  export default {
  };
</script>

<style lang='scss' scoped>
  .c-env-registry-header {
    color: white;
    background-color: black;

    > * {
      display: inline-block;
      vertical-align: middle;
      margin-left: 2em;
    }

    .el-menu--horizontal.el-menu--dark {
      background-color: black;

      .el-menu-item {
        color: white !important;
      }
    }

  }
</style>
