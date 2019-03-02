import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _784f088a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _70e6b40a = () => interopDefault(import('../pages/acknowledgements.vue' /* webpackChunkName: "pages/acknowledgements" */))
const _32254d4e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3def77f8 = () => interopDefault(import('../pages/now.vue' /* webpackChunkName: "pages/now" */))
const _2f1f0cf6 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _723ed3f0 = () => interopDefault(import('../pages/readme.vue' /* webpackChunkName: "pages/readme" */))
const _435deaef = () => interopDefault(import('../pages/resume.vue' /* webpackChunkName: "pages/resume" */))
const _410a9fc0 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _38df5300 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _13ce1a8d = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _784f088a,
      name: "about"
    }, {
      path: "/acknowledgements",
      component: _70e6b40a,
      name: "acknowledgements"
    }, {
      path: "/contact",
      component: _32254d4e,
      name: "contact"
    }, {
      path: "/now",
      component: _3def77f8,
      name: "now"
    }, {
      path: "/portfolio",
      component: _2f1f0cf6,
      name: "portfolio"
    }, {
      path: "/readme",
      component: _723ed3f0,
      name: "readme"
    }, {
      path: "/resume",
      component: _435deaef,
      name: "resume"
    }, {
      path: "/services",
      component: _410a9fc0,
      name: "services"
    }, {
      path: "/",
      component: _38df5300,
      name: "index"
    }, {
      path: "/*",
      component: _13ce1a8d,
      name: "all"
    }],

    fallback: false
  })
}
