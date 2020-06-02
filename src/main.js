import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import VueLazyload from 'vue-lazyload' // 图片懒加载

// 图片懒加载
Vue.use(VueLazyload, {
     loading:require('@/assets/imgs/loading-svg/loading-bars.svg'),
    //  loading: require('img/loading.png'),//加载中图片，一定要有，不然会一直重复加载占位图
    //  error: require('@/assets/imgs/banner-1.png')  //加载失败图片
});

// mock开关
const mock = true
if(mock){
  require('./mock/api')
}

// axios 基础参数设置
axios.defaults.baseURL = '/api' // 根据跨域方式设置（该项目用的是代理方式解决跨域）
                                // 如果是CORS跨域，这里可能是'http://imooc.com'
axios.defaults.timeout = 8000 // 超时时间最好设置七八秒
// 接口错误拦截
// 对表单等验证较多的，可以用request.use拦截处理
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status === 0){ // 接口返回正确，res.data是后端返回的值
    return res.data
  } else if(res.status === 10) { // 未登录状态
    window.location.href('/#/login') // 这里用的是哈西路由，一定写完整的路由
                                    //用window写跳转，这里不能用vue的路由跳转（vue路由跳转是页面直接的跳转？？这里不太懂）
  }else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios) // 将axios挂载到实例VueAxios上，在调用时可直接用this，不需要每个页面都导入axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
