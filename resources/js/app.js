import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import Argon from '~/plugins/argon-kit'
import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false
Vue.use(Argon)
/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
