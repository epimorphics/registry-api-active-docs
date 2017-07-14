<template>
  <footer class="o-footer">
    <el-row :gutter="10">
      <el-col :lg='{span: 10, offset: 2}' :md='{span: 12, offset: 0}' :sm='{span: 24, offset: 0}'>
        <div class="">
          <div class="c-footer-credits">
            <h4 class="">Support</h4>
            <p>
              To contact the Environment Agency, please use
              <a class="indicator i18n" href="https://www.gov.uk/government/organisations/environment-agency#org-contacts">our contacts page.</a>
            </p>
            <p>
              If you notice a problem with the data provided by this site, please <a href="mailto:data.info@environment-agency.gov.uk">send us an email</a>.
            </p>
            <p>
              Find out about the <a href="/cookies">use of cookies</a> on this site.
            </p>
          </div>
        </div>
      </el-col>

      <el-col :lg='{span: 10, offset: 0}' :md='{span: 12, offset: 0}' :sm='{span: 24, offset: 0}'>
        <h4>About this page</h4>
        <p>
          All content is available under the
          <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>,
          except where otherwise stated
        </p>
        <p class="c-footer-epimorphics">
          <span class="i18n">Design and development by</span>
          <a href="http://www.epimorphics.com">Epimorphics</a>.
        </p>
      </el-col>

    </el-row>
  </footer>
</template>

<script>
  export default {
  };
</script>

<style lang='scss'>
  @import '../../node_modules/govuk_frontend_toolkit/stylesheets/_colours.scss';
  $semi-black: #101010;

  footer {
    background-color: $grey-2;
    color: $semi-black;
    padding: 20px 10px 10px;

    border-top: 15px solid $department-for-environment-food-rural-affairs;
    margin-top: 10px;

    a, a:hover {
      color: $black;
      text-decoration: underline;
    }

    .c-footer-epimorphics {
      color: $semi-black;

      a, a:hover {
        color: inherit;
      }
    }
  }
</style>
