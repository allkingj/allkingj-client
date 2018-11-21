module.exports = {
  proxy: {
    '/api': {    //将www.exaple.com印射为/api
        target: 'http://127.0.0.1:3000/api',  // 接口域名
        ws: true,
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            '^/api': ''   //需要rewrite的,
        }
    }
  }
}
