//import '../css/main.css'
import Vue from 'vue'
import App from './App/app.vue'

var obj = {
    foo: 'bar'
}

//Vue.component('example-component', require('./App/app.vue')).default

new Vue({
    el: '#app',
    render: h => h(App),
})

console.log('Im from source!');