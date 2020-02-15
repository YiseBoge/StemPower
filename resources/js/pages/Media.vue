<template>
  <div>
    <section class="section section-shaped section-lg my-0 py-5">
      <div class="shape shape-style-1 bg-gradient-primary">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div class="container pt-lg-md">
        <div class="row justify-content-center">
          <h1 class="text-white font-weight-light">
            Media
          </h1>
        </div>
      </div>
    </section>
    <div class="container py-5">
      <div class="row mb-4">
        <div class="col-8">
          <h3 class="font-weight-light">
            Check out our Youtube Channel
          </h3>
        </div>
        <div class="col-4">
          <base-button tag="a" href="https://www.youtube.com/channel/UCuzT9QGaRilgE2JKbU9cUOA"
                       class="mb-3 mb-sm-0 btn-sm float-right" type="danger" icon="fa fa-youtube-play"
          >
            Subscribe
          </base-button>
        </div>
      </div>

      <gallery
        :images="images"
        :index="index"
        :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
        @close="index = null"
      />
      <div class="row">
        <div
          v-for="image, imageIndex in images"
          class="image col-md-4 col-sm-12 p-4"
          :style="{ backgroundImage: 'url(' + image.poster + ')', height: '175px' }"
          @click="index = imageIndex"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'
import axios from 'axios'

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
  // mounted () {
  //   axios
  //     .get('https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBevXc4OwTS-QpGqwKRTxWnwMgUamKUvw8&part=snippet&playlistId=UUuzT9QGaRilgE2JKbU9cUOA')
  //     .then(response => console.log(response.items))
  // }
}
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 5px solid #FFFFFF;
  }
</style>
