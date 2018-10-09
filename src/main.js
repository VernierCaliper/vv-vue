// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vvView from '@/components/entry'

Vue.use(vvView);
Vue.config.productionTip = false;
let timer = null;
const errorHandler = (error, vm ,info)=>{
  if(!window.erudaIsInit){
    timer = setInterval(()=>{
      if(window.erudaIsInit){
        clearInterval(timer);
        console.error(vm);
        console.error('当前报错组件名：' + vm.$options.name);
        console.error('当前抛出的错误' + error);
        console.error('当前抛出错误的钩子函数' + info);
      }
    },1000);
  }else {
    console.error(vm);
    console.error('当前报错组件名：' + vm.$options.name);
    console.error('当前抛出的错误' + error);
    console.error('当前抛出错误的钩子函数' + info);
  }
};
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error)=> errorHandler(error,this);
/* eslint-disable no-new */
  new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
