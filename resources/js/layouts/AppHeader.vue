<template>
  <header class="header-global">
    <base-nav class="navbar-main" effect="light" expand transparent type="">
      <router-link class="navbar-brand mr-lg-5" slot="brand" to="/">
        <img alt="logo" src="img/brand/white.png">
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src="img/brand/blue.png">
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"/>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a class="nav-link" data-toggle="dropdown" href="#" role="button" slot="title">
            <i class="ni ni-ui-04 d-lg-none"/>
            <span class="nav-link-inner--text">Components</span>
          </a>
          <div class="dropdown-menu-inner">
            <a class="media d-flex align-items-center"
               href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
            >
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship"/>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                  world's most popular framework for building responsive sites.</p>
              </div>
            </a>
            <a class="media d-flex align-items-center"
               href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
            >
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-ui-04"/>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Components</h5>
                <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                  compiling Scss, change brand colors and more.</p>
              </div>
            </a>
          </div>
        </base-dropdown>
        <base-dropdown class="nav-item" tag="li">
          <a class="nav-link" data-toggle="dropdown" href="#" role="button" slot="title">
            <i class="ni ni-collection d-lg-none"/>
            <span class="nav-link-inner--text">Examples</span>
          </a>
          <router-link class="dropdown-item" to="/landing">
            Landing
          </router-link>
          <router-link class="dropdown-item" to="/profile">
            Profile
          </router-link>
          <router-link class="dropdown-item" to="/login">
            Login
          </router-link>
          <router-link class="dropdown-item" to="/register">
            Register
          </router-link>
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a class="nav-link nav-link-icon" data-toggle="tooltip" href="https://www.facebook.com/creativetim"
             rel="noopener"
             target="_blank" title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square"/>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" data-toggle="tooltip"
             href="https://www.instagram.com/creativetimofficial" rel="noopener" target="_blank"
             title="Follow us on Instagram"
          >
            <i class="fa fa-instagram"/>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" data-toggle="tooltip" href="https://twitter.com/creativetim" rel="noopener"
             target="_blank" title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square"/>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" data-toggle="tooltip"
             href="https://github.com/creativetimofficial/vue-argon-design-system" rel="noopener" target="_blank"
             title="Star us on Github"
          >
            <i class="fa fa-github"/>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <a class="btn btn-neutral btn-icon" href="https://www.creative-tim.com/product/vue-argon-design-system"
             rel="noopener"
             target="_blank"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-cloud-download mr-2"/>
            </span>
            <span class="nav-link-inner--text">Download</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
  import BaseNav from '~/components/BaseNav'
  import BaseDropdown from '~/components/BaseDropdown'
  import CloseButton from '~/components/CloseButton'

  export default {
    components: {
      BaseNav,
      CloseButton,
      BaseDropdown
    }
  }
</script>
<style>
</style>
