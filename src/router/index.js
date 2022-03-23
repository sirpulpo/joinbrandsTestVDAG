import Vue from 'vue';
import VueRouter from 'vue-router';
import moment from 'moment';
import AuthService from '../services/auth.service';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('@/views/auth/SignUp.vue'),
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/views/auth/SignIn.vue'),
  },
  {
    path: '/lost-password',
    name: 'LostPassword',
    component: () => import('@/views/auth/LostPassword.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('@/views/auth/ChangePassword.vue'),
  },
  {
    path: '/sign-out',
    name: 'SignOut',
    component: () => import('@/views/auth/SignOut.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const public_pages = ['/', '/sign-up', '/sign-in', '/lost-password'];
  const auth_required = !public_pages.includes(to.path);
  let logged_in = localStorage.getItem('accsstkn') ? true : false;
  const timeOut = localStorage.getItem('timeOut')
    ? moment(new Date(localStorage.getItem('timeOut')))
    : null;
  const now = moment();
  const diff = timeOut ? now.diff(timeOut) : null;

  // TimeOut
  if ((timeOut === null || (diff > 0))) {
    AuthService.logout();
    logged_in = false;
  }
  // SignIn
  if (auth_required && !logged_in) next({ name: 'SignIn' });
  else if (!auth_required && logged_in) next({ name: 'Profile' });
  else next();
});

export default router;
