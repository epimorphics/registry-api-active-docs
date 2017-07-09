<template>
  <div>
    <nav class="c-env-registry-header">
      <el-row :gutter='0'>
        <el-col :lg='{span: 20, offset: 2}' :md='{span: 24, offset: 0}'>
          <h1 class='c-env-registry-header--menu-item'>Environment Registry</h1>

          <el-menu theme="dark" :default-active="activeIndex"mode="horizontal" class='c-env-registry-header--menu-item'>
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
        </el-col>
      </el-row>
    </nav>
    <el-row>
      <el-col :lg='{span: 20, offset: 2}' :md='{span: 24, offset: 0}'>
        <div class='u-department-colour'></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg='{span: 20, offset: 2}' :md='{span: 24, offset: 0}'>
        <div class='c-phase-identifier'>
          <p>
            <strong class="c-phase-identifier--tag">BETA</strong>
            <span>
              This is a trial service &ndash; your
              <a href='mailto:todo'>feedback</a> will help us to improve it.
            </span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data: () => ({ activeIndex: '-1' }),
  };
</script>

<style lang='scss'>
  @import '~govuk_frontend_toolkit/stylesheets/design-patterns/alpha-beta';

  .c-env-registry-header {
    color: white;
    background-color: black;

    &--menu-item {
      display: inline-block;
      vertical-align: middle;
      margin-right: 2em;
    }

    ul.el-menu--horizontal.el-menu--dark {
      background-color: black;

      >.el-menu-item,
      .el-submenu__title,
      .el-submenu__icon-arrow {
        color: white;

        &:hover {
          background-color: black;
        }
      }

      a {
        text-decoration: none;
      }
    }
  }

  .c-phase-identifier {
    @include phase-banner();

    &--tag {
      @include phase-tag();
    }
  }
</style>
