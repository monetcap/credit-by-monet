import Vue from 'vue'
import Vuikit from 'vuikit';
// eslint-disable-next-line
import VuikitTheme from '@vuikit/theme';

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuikit);

new Vue({
  render: h => h(App),
}).$mount('#app')
