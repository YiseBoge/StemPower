<template>
  <div class="row">
    <div class="col-md-3">
      <card :title="$t('settings')" class="settings-card">
        <ul class="nav flex-column nav-pills">
          <li :key="tab.route" class="nav-item" v-for="tab in tabs">
            <router-link :to="{ name: tab.route }" active-class="active" class="nav-link">
              <fa :icon="tab.icon" fixed-width/>
              {{ tab.name }}
            </router-link>
          </li>
        </ul>
      </card>
    </div>

    <div class="col-md-9">
      <transition mode="out-in" name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'auth',

    computed: {
      tabs () {
        return [
          {
            icon: 'user',
            name: this.$t('profile'),
            route: 'settings.profile'
          },
          {
            icon: 'lock',
            name: this.$t('password'),
            route: 'settings.password'
          }
        ]
      }
    }
  }
</script>

<style>
  .settings-card .card-body {
    padding: 0;
  }
</style>
