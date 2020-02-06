<template>
  <div class="main-layout">
    <router-view name="header"/>
    <main>
      <fade-transition :duration="250" mode="out-in" name="page">
        <router-view/>
      </fade-transition>
    </main>
    <router-view name="footer"/>
  </div>
</template>

<script>

  import { FadeTransition } from 'vue2-transitions'

  export default {
    name: 'MainLayout',
    components: {
      FadeTransition
    }
  }
</script>
