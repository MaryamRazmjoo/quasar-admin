const routes = [
  {
    path: '/',
    component: () => import('layouts/App'),
    children: [
      {
        path: '/auth',
        component: () => import('layouts/AuthLayout'),
        children: [
          { name: 'login', path: 'login', component: () => import('pages/Auth/Login') },
          { name: 'register', path: 'register', component: () => import('pages/Auth/Register') }
        ]
      },
      {
        path: 'admin',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          { name: 'Admin.Settings', path: 'settings', component: () => import('pages/Admin/Settings') },
          {
            path: 'user',
            component: () => import('pages/Admin/index'),
            children: [
              { name: 'Admin.User.Index', path: 'index', component: () => import('pages/Admin/User/Index') },
              { name: 'Admin.User.Show', path: 'show/:id', component: () => import('pages/Admin/User/Show') }
            ]
          }
        ]
      },
      {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          { name: 'home', path: '/', component: () => import('pages/Index') },
          // {
          //   name: 'user.contents',
          //   path: 'contents',
          //   component: () => import('layouts/UserContentsLayout'),
          //   children: [
          //     { name: 'user.contents.index', path: '/', component: () => import('pages/Contents') },
          //     { name: 'user.contents.show', path: ':content_id', component: () => import('pages/User/Content/Show') },
          //     { name: 'user.contents.list', path: 'content-category-list/:category_id', component: () => import('pages/User/Content/ContentCategoryList') }
          //   ]
          // },
          // {
          //   name: 'user.session',
          //   path: 'session',
          //   component: () => import('layouts/UserLayout'),
          //   children: [
          //     { name: 'user.session.register', path: 'register', component: () => import('pages/User/Session/Register') }
          //   ]
          // },
          { name: 'EntityIndex', path: 'question-bank', component: () => import('pages/QuestionBank') },
          { name: 'EntityShoew', path: 'entity-show', component: () => import('pages/QuestionBank') }
        ]
      },
      // Always leave this as last one,
      // but you can also remove it
      {
        path: '*',
        component: () => import('pages/Error404.vue')
      }
    ]
  }
]

export default routes
