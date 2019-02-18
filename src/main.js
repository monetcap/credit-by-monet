import Vue from 'vue'
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
// eslint-disable-next-line
import VuikitTheme from '@vuikit/theme';

import App from './App.vue'


Vue.config.productionTip = false

Vue.use(Vuikit);
Vue.use(VuikitIcons);

new Vue({
  render: h => h(App),
}).$mount('#app')
