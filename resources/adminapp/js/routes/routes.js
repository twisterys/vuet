import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'authors',
        name: 'authors.index',
        component: () => import('@cruds/Authors/Index.vue'),
        meta: { title: 'cruds.author.title' }
      },
      {
        path: 'authors/create',
        name: 'authors.create',
        component: () => import('@cruds/Authors/Create.vue'),
        meta: { title: 'cruds.author.title' }
      },
      {
        path: 'authors/:id',
        name: 'authors.show',
        component: () => import('@cruds/Authors/Show.vue'),
        meta: { title: 'cruds.author.title' }
      },
      {
        path: 'authors/:id/edit',
        name: 'authors.edit',
        component: () => import('@cruds/Authors/Edit.vue'),
        meta: { title: 'cruds.author.title' }
      },
      {
        path: 'books',
        name: 'books.index',
        component: () => import('@cruds/Books/Index.vue'),
        meta: { title: 'cruds.book.title' }
      },
      {
        path: 'books/create',
        name: 'books.create',
        component: () => import('@cruds/Books/Create.vue'),
        meta: { title: 'cruds.book.title' }
      },
      {
        path: 'books/:id',
        name: 'books.show',
        component: () => import('@cruds/Books/Show.vue'),
        meta: { title: 'cruds.book.title' }
      },
      {
        path: 'books/:id/edit',
        name: 'books.edit',
        component: () => import('@cruds/Books/Edit.vue'),
        meta: { title: 'cruds.book.title' }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
