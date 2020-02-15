<template>
  <header class="header-global">
    <base-nav class="navbar-main pt-4" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand" to="/">
        <img src="img/brand/white.png" alt="logo" style="height: 45px">
      </router-link>

      <div slot="content-header" slot-scope="{closeMenu}" class="row">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src="img/brand/green.png">
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu" />
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-planet d-lg-none" />
            <span class="nav-link-inner--text">Discover</span>
          </a>
          <div class="dropdown-menu-inner">
            <a href="/about"
               class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                <i class="ni ni-badge" />
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-success mb-md-1">About us</h6>
                <p class="description d-none d-md-inline-block mb-0">Get to know us better.</p>
              </div>
            </a>
            <a href="/news"
               class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-single-copy-04" />
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">News</h5>
                <p class="description d-none d-md-inline-block mb-0">Keep up with our latest developments.</p>
              </div>
            </a>
            <a href="/media"
               class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-danger rounded-circle text-white">
                <i class="ni ni-button-play" />
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-danger mb-md-1">Media</h5>
                <p class="description d-none d-md-inline-block mb-0">Explore our videos that announce our progress.</p>
              </div>
            </a>
          </div>
        </base-dropdown>
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <!--            <i class="ni ni-single-02 d-lg-none" />-->
            <i class="fa fa-users d-lg-none" />
            <span class="nav-link-inner--text">People</span>
          </a>
          <div class="dropdown-menu-inner">
            <a href="/leadership"
               class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship" />
                <!--                <i class="fa fa-user-circle d-lg-none"/>-->
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Leadership</h6>
                <p class="description d-none d-md-inline-block mb-0">Our leaders keeping us up.</p>
              </div>
            </a>
            <a href="/staff"
               class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-default rounded-circle text-white">
                <!--                <i class="ni ni-ui-04" />-->
                <i class="fa fa-users" />
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-default mb-md-1">Staff</h5>
                <p class="description d-none d-md-inline-block mb-0">The backbones of our operations.</p>
              </div>
            </a>
            <a href="/partners"
               class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                <!--                <i class="ni ni-ui-04" />-->
                <i class="fa fa-handshake-o" />
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-info mb-md-1">Partners</h5>
                <p class="description d-none d-md-inline-block mb-0">Supporters of our cause.</p>
              </div>
            </a>
          </div>
        </base-dropdown>
        <!--        <div class="nav-item">-->
        <!--          <a slot="title" href="/contact" class="nav-link" role="button">-->
        <!--            <i class="ni ni-ui-04 d-lg-none" />-->
        <!--            <span>Contact</span>-->
        <!--          </a>-->
        <!--        </div>-->
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://www.facebook.com/STEMpower" target="_blank" rel="noopener"
             data-toggle="tooltip" title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square" />
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://www.instagram.com/stempower_africa"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram"
          >
            <i class="fa fa-instagram" />
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://twitter.com/stempowerusa" target="_blank" rel="noopener"
             data-toggle="tooltip" title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square" />
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://www.linkedin.com/in/gfct-stempower-807902196"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Go to Linkedin"
          >
            <i class="fa fa-linkedin" />
            <span class="nav-link-inner--text d-lg-none">LinkedIn</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://www.youtube.com/channel/UCuzT9QGaRilgE2JKbU9cUOA"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Subscribe or Youtube"
          >
            <i class="fa fa-youtube-play" />
            <span class="nav-link-inner--text d-lg-none">Youtube</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://telegram.me/STEMpower_PR"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Checkout our Telegram"
          >
            <i class="fa fa-telegram" />
            <span class="nav-link-inner--text d-lg-none">Telegram</span>
          </a>
        </li>
        <!--        <li class="nav-item d-none d-lg-block ml-lg-4">-->
        <!--          <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank" rel="noopener"-->
        <!--             class="btn btn-neutral btn-icon"-->
        <!--          >-->
        <!--            <span class="btn-inner&#45;&#45;icon">-->
        <!--              <i class="fa fa-cloud-download mr-2" />-->
        <!--            </span>-->
        <!--            <span class="nav-link-inner&#45;&#45;text">Donate</span>-->
        <!--          </a>-->
        <!--        </li>-->
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
