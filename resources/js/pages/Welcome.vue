<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 bg-gradient-primary shape-skew">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-8">
                <h1 class="display-2 text-white font-weight-light">
                  Stem Power
                  <span />
                </h1>
                <p class="lead text-white">
                  We are an international, non-profit, non-governmental, aid organization operating in Eastern African countries, with a vision to reach the African continent.
                </p>
                <blockquote class="blockquote text-white font-italic">
                  <p class="mb-0">
                    Inside Every Child is a Scientist, Nurture that Scientist, and you will change the world.
                  </p>
                </blockquote>
                <div class="btn-wrapper">
                  <form id="donate_form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="X4BPRP7CL8J6L">
                    <base-button type="submit" form="donate_form" value="Submit" onclick="document.getElementById('donate_form').submit()"
                                 class="mb-3 mb-sm-0" icon="ni ni-credit-card"
                    >
                      Donate
                    </base-button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4 mt--200">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-badge" type="primary" rounded class="mb-4" />
                  <h6 class="text-primary text-uppercase">
                    About us
                  </h6>
                  <p class="description mt-3">
                    We believe STEM (Science, Technology, Engineering, and Mathematics) education is important to Africa’s long-term development.
                  </p>
                  <base-button tag="a" href="/about" type="primary" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4 mt--200">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-single-copy-04" type="success" rounded class="mb-4" />
                  <h6 class="text-success text-uppercase">
                    News
                  </h6>
                  <p class="description mt-3">
                    Stay in touch with the latest of Stem Power. Learn about all our recent projects, events, celebrations, places we've been. Perhaps you'll find some of them interesting.
                  </p>
                  <base-button tag="a" href="/news" type="success" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4 mt--200">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-spaceship" type="warning" rounded class="mb-4" />
                  <h6 class="text-warning text-uppercase">
                    Leaders
                  </h6>
                  <p class="description mt-3">
                    This organization is founded by Mark Gelfand because of a passion for science&engineering, as well as a desire to give forward.
                  </p>
                  <base-button tag="a" href="/leadership" type="warning" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="img/theme/Science-Museum-1.jpg" class="img-fluid floating rounded shadow-lg">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <icon name="ni ni-satisfied" class="mb-5" size="lg" type="success" shadow
                    rounded
              />
              <h3>Welcome to Stem Power</h3>
              <p>
                For more than a decade, STEMpower founders have been implementing many successful STEM programs in Ethiopia and nearby countries. Pre-university students learn through our hands-on labs, engaging them towards advanced STEM study and careers. STEM enrichment programs bridge genders and ethnicity, fostering peace and development within and among nations.
              </p>
              <div>
                <badge type="success" rounded>
                  Science
                </badge>
                <badge type="success" rounded>
                  Technology
                </badge>
                <badge type="success" rounded>
                  Engineering
                </badge>
                <badge type="success" rounded>
                  Mathematics
                </badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img v-lazy="'img/theme/A-girl-in-the-lab.jpg'" class="card-img-top">
              <blockquote class="card-blockquote">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                     class="svg-bg"
                >
                  <polygon points="0,52 583,95 0,95" class="fill-default" />
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default" />
                </svg>
                <h4 class="display-3 font-weight-bold text-white">
                  Our Vision
                </h4>
                <p class="lead text-italic text-white">
                  Towards a technologically-developed, economically-independent, and self-sustaining Ethiopia-Africa.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded />

              <h3>Our Tasks</h3>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <!--              <a href="#" class="font-weight-bold text-warning mt-5">A beautiful UI Kit for impactful-->
              <!--                websites</a>-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-primary shape-skew">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img src="img/ill/undraw_science_fqhl.svg" class="img-center img-fluid">
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <div>
                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                      rounded
                />
              </div>
              <div class="pl-4">
                <h4 class="display-3 text-white">
                  Our Mission
                </h4>
                <!--                <p class="text-white">-->
                <!--                  We hope to change the country-->
                <!--                </p>-->
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                        rounded
                  />
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">
                    Solving Societal Problems
                  </h5>
                  <p>
                    Hands-on lab-based STEM education emphasizes real-world problem-solving, creativity, and skill-building empowering youth to engineer their homeland away from stubborn poverty.
                  </p>
                  <!--                  <a href="#" class="text-success">Learn more</a>-->
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                        rounded
                  />
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">
                    Strengthening Nations
                  </h5>
                  <p>
                    Engineering skills complete a country's production value chain leading to more exports, less imports, and reduced dependency.
                  </p>
                  <!--                  <a href="#" class="text-warning">Learn more</a>-->
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni ni-active-40" gradient="danger" color="white" shadow
                        rounded
                  />
                </div>
                <div class="pl-4">
                  <h5 class="title text-danger">
                    Implementing Empowerment
                  </h5>
                  <p>
                    Pre-university STEM enrichment enhances education, competency, innovation, and careers on a national scale that "lifts all boats.
                  </p>
                  <!--                  <a href="#" class="text-warning">Learn more</a>-->
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">
              The Leadership
            </h2>
            <p class="lead text-muted">
              This organization is founded by Mark Gelfand because of a passion for science&engineering, as well as a desire to give forward.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'img/people/mark.png'"
                   class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                   style="width: 200px;"
              >
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Mark Gelfand</span>
                  <small class="h6 text-muted">Founder</small>
                </h5>
                <div class="mt-3">
                  <base-button tag="a" href="#" type="warning" icon="fa fa-twitter" rounded
                               icon-only
                  />
                  <base-button tag="a" href="#" type="warning" icon="fa fa-facebook" rounded
                               icon-only
                  />
                  <base-button tag="a" href="#" type="warning" icon="fa fa-dribbble" rounded
                               icon-only
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'img/people/kidist.jpeg'"
                   class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                   style="width: 200px;"
              >
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Kidist Gebreamlak</span>
                  <small class="h6 text-muted">Director | President</small>
                </h5>
                <div class="mt-3">
                  <base-button tag="a" href="#" type="primary" icon="fa fa-twitter" rounded
                               icon-only
                  />
                  <base-button tag="a" href="#" type="primary" icon="fa fa-facebook" rounded
                               icon-only
                  />
                  <base-button tag="a" href="#" type="primary" icon="fa fa-dribbble" rounded
                               icon-only
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'img/people/mike.jpg'"
                   class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                   style="width: 200px;"
              >
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Mike Castricone</span>
                  <small class="h6 text-muted">Director | Treasurer</small>
                </h5>
                <div class="mt-3">
                  <base-button tag="a" href="#" type="info" icon="fa fa-twitter" rounded
                               icon-only
                  />
                  <base-button tag="a" href="#" type="info" icon="fa fa-facebook" rounded
                               icon-only
                  />
                  <base-button tag="a" href="#" type="info" icon="fa fa-dribbble" rounded
                               icon-only
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'img/people/shacharz.png'"
                   class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                   style="width: 200px;"
              >
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Shachar Zahavi</span>
                  <small class="h6 text-muted">Director | Secretary</small>
                </h5>
                <div class="mt-3">
                  <base-button tag="a" href="#" type="success" icon="fa fa-twitter" rounded
                               icon-only
                  />
                  <base-button tag="a" href="#" type="success" icon="fa fa-facebook" rounded
                               icon-only
                  />
                  <base-button tag="a" href="#" type="success" icon="fa fa-dribbble" rounded
                               icon-only
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    <section class="section section-shaped my-0 overflow-hidden">-->
    <!--      <div class="shape shape-style-3 bg-gradient-default shape-skew">-->
    <!--        <span />-->
    <!--        <span />-->
    <!--        <span />-->
    <!--        <span />-->
    <!--      </div>-->
    <!--      <div class="container pt-lg pb-300">-->
    <!--        <div class="row text-center justify-content-center">-->
    <!--          <div class="col-lg-10">-->
    <!--            <h2 class="display-3 text-white">-->
    <!--              Build something-->
    <!--            </h2>-->
    <!--            <p class="lead text-white">-->
    <!--              According to the National Oceanic and Atmospheric Administration,-->
    <!--              Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent-->
    <!--              tihs year down to low ice.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="row row-grid mt-5">-->
    <!--          <div class="col-lg-4">-->
    <!--            <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary" />-->
    <!--            <h5 class="text-white mt-3">-->
    <!--              Building tools-->
    <!--            </h5>-->
    <!--            <p class="text-white mt-3">-->
    <!--              Some quick example text to build on the card title and make up the-->
    <!--              bulk of the card's content.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--          <div class="col-lg-4">-->
    <!--            <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary" />-->
    <!--            <h5 class="text-white mt-3">-->
    <!--              Grow your market-->
    <!--            </h5>-->
    <!--            <p class="text-white mt-3">-->
    <!--              Some quick example text to build on the card title and make up the-->
    <!--              bulk of the card's content.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--          <div class="col-lg-4">-->
    <!--            <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary" />-->
    <!--            <h5 class="text-white mt-3">-->
    <!--              Launch time-->
    <!--            </h5>-->
    <!--            <p class="text-white mt-3">-->
    <!--              Some quick example text to build on the card title and make up the-->
    <!--              bulk of the card's content.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <hr class="my-5">
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h4 class="mb-1">
                Contact Stem Power
              </h4>
              <p class="mt-0">
                Invest in greater access to STEM education!
              </p>
              <base-input class="mt-5"
                          alternative
                          placeholder="Your name"
                          addon-left-icon="ni ni-user-run"
              />
              <base-input alternative
                          placeholder="Email address"
                          addon-left-icon="ni ni-email-83"
              />
              <base-input class="mb-4">
                <textarea class="form-control form-control-alternative" name="name" rows="4"
                          cols="80" placeholder="Type a message..."
                />
              </base-input>
              <base-button type="primary" round block size="lg">
                Send Message
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <!--            <h2 class="display-3">-->
            <!--              Our Partners-->
            <!--              <span class="text-success">Design System for Bootstrap 4?</span>-->
            <!--            </h2>-->
            <div class="text-center">
              <h2 class="display-4 mb-5">
                Our Partners
              </h2>
              <div class="row justify-content-center">
                <div class="col-lg-2 col-4">
                  <a href="http://www.mcit.gov.et/" target="_blank" data-toggle="tooltip"
                     data-original-title="Ethiopian Ministry of Innovation and Technology"
                  >
                    <img v-lazy="'img/brand/partners/mint.jpeg'"
                         class="img-fluid"
                    >
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a href="https://mfa.gov.il/" target="_blank" data-toggle="tooltip"
                     data-original-title="Israel Ministry of Foreign Affairs"
                  >
                    <img v-lazy="'img/brand/partners/israel-ministry-of-foreign-affairs.jpg'"
                         class="img-fluid opacity-5"
                    >
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a href="https://en.unesco.org/" data-toggle="tooltip"
                     data-original-title="UNESCO"
                  >
                    <img v-lazy="'img/brand/partners/unesco.png'"
                         class="img-fluid  opacity-5"
                    >
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a href="https://au.int/" target="_blank" data-toggle="tooltip"
                     data-original-title="African Union"
                  >
                    <img v-lazy="'img/brand/partners/African-Union.png'"
                         class="img-fluid"
                    >
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a href="https://www.technion.ac.il/" target="_blank" data-toggle="tooltip"
                     data-original-title="Technion - Israel Institute of Technology"
                  >
                    <img v-lazy="'img/brand/partners/Technion_official_seal.png'"
                         class="img-fluid opacity-5"
                    >
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a href="https://www.madatech.org.il/" target="_blank" data-toggle="tooltip"
                     data-original-title="Madatech"
                  >
                    <img v-lazy="'img/brand/partners/madatech.png'"
                         class="img-fluid opacity-5"
                    >
                  </a>
                </div>
              </div>
              <p class="lead">
                We work in contact with a lot of other organizations that support us.
              </p>
              <div class="btn-wrapper">
                <a href="/partners"
                   class="btn btn-primary mb-3 mb-sm-0"
                >See More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg pt-0">
      <div class="container">
        <card gradient="primary"
              no-body
              shadow-size="lg"
              class="border-0"
        >
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white font-weight-light">
                  Make sure you support our cause
                </h3>
                <!--                <p class="lead text-white mt-3">-->
                <!--                  I will be the leader of a company that ends up being-->
                <!--                  worth billions of dollars, because I got the answers. I understand culture.-->
                <!--                </p>-->
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <base-button tag="a" href="https://www.paypal.com/donate/?token=LDCiXx5XFTCXaHUzXME70TX4PLriXjTKpSZiVOgpQZPmCBuEmTCUa1Jo8Upf79gdZ_YNom&country.x=US&locale.x=US"
                             type="white" block
                >
                  Donate
                </base-button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>
