import Vue from 'vue'
import App from './component/app'

if (process.env.NODE_ENV === 'production') {
  require('./util/pwa')
}

new Vue({
  el: '#app',
  render: h => h(App)
})
