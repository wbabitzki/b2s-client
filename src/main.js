import Vue from 'vue'
import VTooltip from 'v-tooltip'
import App from './App.vue'
import serviceContainer from './service-container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faExclamationCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VTooltip)

Vue.config.productionTip = false;

new Vue({
  provide: serviceContainer,
  render: h => h(App)
}).$mount('#app')
