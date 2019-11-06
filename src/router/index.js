import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Application from '../components/Application.vue'
import Config from '../components/Config.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/index',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/application',
        name: 'Application',
        component: Application
    }, {
        path: '/config',
        name: 'Config',
        component: Config
    }]
})