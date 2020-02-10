<template>
  <div>
    <section class="section-shaped my-0">
      <div class="shape shape-style-1 shape-primary">
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
        <div class="col px-0 my-5">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="display-3  text-white">
                Media
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container py-5">
      <h3>Check out our Youtube Channel</h3>
      <gallery
        :images="images"
        :index="index"
        :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
        @close="index = null"
      />
      <div
        class="image"
        v-for="image, imageIndex in images"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.poster + ')', width: '32%', height: '175px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {

  components: {
    'gallery': VueGallery
  },
  data: function () {
    return {
      images: [
        {
          title: 'STEMpower Ethiopia, Episode 35: Problem Solving Students Innovation',
          href: 'https://youtu.be/HX1mGDkrAhs',
          type: 'text/html',
          youtube: 'HX1mGDkrAhs',
          poster: 'https://img.youtube.com/vi/HX1mGDkrAhs/hqdefault.jpg'
        },
        {
          title: 'STEMpower Ethiopia, Episode 34 Water and Earth Science Training Part II',
          href: 'https://youtu.be/dHwlJOk1YBA',
          type: 'text/html',
          youtube: 'dHwlJOk1YBA',
          poster: 'https://img.youtube.com/vi/dHwlJOk1YBA/hqdefault.jpg'
        },
        {
          title: 'STEMpower Ethiopia, Episode 35: Problem Solving Students Innovation',
          href: 'https://youtu.be/UnLpKXiSMJ4',
          type: 'text/html',
          youtube: 'UnLpKXiSMJ4',
          poster: 'https://img.youtube.com/vi/UnLpKXiSMJ4/hqdefault.jpg'
        }
      ],
      index: null
    }
  }
}
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
