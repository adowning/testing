import SignInPage from '../pages/SignInPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import Error404 from '../pages/Error404.vue'
import Dashboard from '../pages/Dashboard.vue'
import Layout from '../layouts/'
import IndexPage from '../pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{ path: '', component: IndexPage }]
  },
  {
    path: '/',
    component: Layout,
    children: [{ path: '/dashboard', component: Dashboard }],
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    component: Layout,
    children: [{ path: '/sign-in', component: SignInPage }]
  },
  {
    path: '/',
    component: Layout,
    children: [{ path: '/sign-up', component: SignUpPage }]
  },
  {
    path: '/',
    component: Layout,
    children: [{ path: '/404', component: Error404 }]
  },
  {
    path: '/',
    component: Layout,
    children: [{ path: '*', component: Error404 }]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
