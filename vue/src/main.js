import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let environment = process.env.NODE_ENV
if (environment === 'development') {
  Vue.prototype.$themeRoot = 'http://devthemes.joshuasiegal.com/'
  Vue.prototype.$dataRoot = 'http://devdata.joshuasiegal.com/'
  Vue.prototype.$staticRoot = 'http://devstatic.joshuasiegal.com/'
} else if (environment === 'production') {
  Vue.prototype.$themeRoot = 'https://themes.joshuasiegal.com/'
  Vue.prototype.$dataRoot = 'https://data.joshuasiegal.com/'
  Vue.prototype.$staticRoot = 'https://static.joshuasiegal.com/'
}

new Vue({
  render: h => h(App)
}).$mount('#app')
