import Landing from '../pages/Landing2'
import Profile from '../pages/Profile'
import AppHeader from '../layouts/AppHeader'
import AppFooter from '../layouts/AppFooter'
import Login from '../pages/Login'
import Register from '../pages/Register'
import About from '../pages/About'
import Media from '../pages/Media'
import News from '../pages/News'
import Leadership from '../pages/Leadership'
import Staff from '../pages/Staff'
import Partners from '../pages/Partners'

function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  // { path: '/', name: 'welcome', component: page('welcome.vue') },

  {
    path: '/',
    name: 'welcome',
    components: {
      header: AppHeader,
      default: Landing,
      footer: AppFooter
    }
  },
  {
    path: '/about',
    name: 'about',
    components: {
      header: AppHeader,
      default: About,
      // footer: AppFooter
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      header: AppHeader,
      default: Login,
      footer: AppFooter
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      header: AppHeader,
      default: Register,
      footer: AppFooter
    }
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      header: AppHeader,
      default: Profile,
      footer: AppFooter
    }
  },
  {
    path: '/news',
    name: 'news',
    components: {
      header: AppHeader,
      default: News
      // footer: AppFooter
    }
  },
  {
    path: '/media',
    name: 'media',
    components: {
      header: AppHeader,
      default: Media
      // footer: AppFooter
    }
  },
  {
    path: '/leadership',
    name: 'leadership',
    components: {
      header: AppHeader,
      default: Leadership
      // footer: AppFooter
    }
  },
  {
    path: '/staff',
    name: 'staff',
    components: {
      header: AppHeader,
      default: Staff
      // footer: AppFooter
    }
  },
  {
    path: '/partners',
    name: 'partners',
    components: {
      header: AppHeader,
      default: Partners
      // footer: AppFooter
    }
  },

  // { path: '/login', name: 'login', component: page('Login') },
  // { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  { path: '*', component: page('errors/404.vue') }
]
