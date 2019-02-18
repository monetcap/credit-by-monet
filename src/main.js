import Vue from 'vue'
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import App from './App.vue'

// Linter will complain about this, don't worry
import VuikitTheme from '@vuikit/theme';

Vue.config.productionTip = false

Vue.use(Vuikit);
Vue.use(VuikitIcons);

new Vue({
  render: h => h(App),
}).$mount('#app')
