/**
* 路由信息
*/

const routes = [
  {
    path: '/', // 根目录
    component: require('@/view').default,
    redirect: '/home/index',
    children: [
      {
        path: 'home', // 主页
        component: require('@/view/home').default,
        redirect: 'home/index',
        children: [
          {
            path: 'index',
            name: 'Home',
            component: require('@/view/home/index').default
          }
        ]
      },
      {
        path: 'entry', // 登录/注册
        name: 'Entry',
        component: require('@/view/entry').default,
        redirect: 'entry/login',
        children: [
          {
            path: 'login',
            name: 'Login',
            component: require('@/view/login').default
          },
          {
            path: 'register',
            name: 'Register',
            component: require('@/view/register').default
          }
        ]
      }
    ]
  }
]

export default routes
