<template>
  <footer class="footer align-bottom bg-gradient-primary mt-5">
    <!-- <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
    <div class="container container-lg">
      <div class="row row-grid align-items-center">
        <div class="col-lg-7">
          <h3 class="text-white font-weight-light mb-2">
            Address
          </h3>
          <h4 class="mb-0 font-weight-light text-white">
            Stem Power Inc.
          </h4>

          <h4 class="mb-0 font-weight-light text-white">
            81 Washington Street, Suite 308
          </h4>

          <h4 class="mb-0 font-weight-light text-white">
            Salem, MA, 01970
          </h4>
          <h4 class="mb-0 font-weight-light text-white">
            U.S.A
          </h4>
        </div>
        <!-- <div class="col-lg-4">
                    <h3 class="text-primary font-weight-light mb-2">Contact us</h3>
                    <h4 class="mb-0 font-weight-light">+ 1 703-463-4468</h4>

                    <h4 class="mb-0 font-weight-light"> info@stempower.org</h4>
                </div> -->
       <div class="col-lg-5 text-lg-center btn-wrapper mt-4">
          <a target="_blank" rel="noopener" href="https://twitter.com/stempowerusa"
             class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Follow us"
          >
            <i class="fa fa-twitter" />
          </a>
          <a target="_blank" rel="noopener" href="https://www.facebook.com/STEMpower"
             class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Like us"
          >
            <i class="fa fa-facebook-square" />
          </a>
          <a target="_blank" rel="noopener" href="https://www.instagram.com/stempower_africa"
             class="btn btn-neutral btn-icon-only btn-instagram btn-lg btn-round" data-toggle="tooltip"
             data-original-title="Follow us"
          >
            <i class="fa fa-instagram" />
          </a>
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/gfct-stempower-807902196"
             class="btn btn-neutral btn-icon-only btn-linkedin btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Follow us on Linkedin"
          >
            <i class="fa fa-linkedin" />
          </a>
          <a target="_blank" rel="noopener" href="https://telegram.me/STEMpower_PR"
             class="btn btn-neutral btn-icon-only btn-telegram btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Talk to us on Telegram"
          >
            <i class="fa fa-telegram" />
          </a>
          <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCuzT9QGaRilgE2JKbU9cUOA"
             class="btn btn-neutral btn-icon-only btn-youtube btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Subscribe on Youtube"
          >
            <i class="fa fa-youtube-play" />
          </a>
        </div>
      </div>
      <hr>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright text-white">
            <!-- &copy; {{year}} -->
            <p>© 2020, STEMpower. All Rights Reserved</p>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a href="https://www.stempower.org" class="nav-link" target="_blank" rel="noopener"><i class="fa fa-phone" /> + 1 703-463-4468</a>
            </li>
            <li class="nav-item">
              <a href="https://www.stempower.org" class="nav-link" target="_blank" rel="noopener"><i class="fa fa-envelope-o" /> info@stempower.org
                Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style>
</style>
