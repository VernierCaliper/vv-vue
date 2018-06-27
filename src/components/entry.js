import swiper from './swiper'
import slide from './slide'
import date from './date'
import toast from './toast'
import loading from './loading'
import fold from './fold'
// import foldHeader from './foldHeader'
// import foldList from './foldList'
const install = function (Vue,options) {
  if(install.installed) return;
  //swiper
  Vue.component(swiper.name,swiper);
  Vue.component(slide.name,slide);
  //月份选择
  Vue.component(date.name,date);
  //折叠panel
  Vue.component(fold.name,fold);
  // Vue.component(foldHeader.name,foldHeader);
  // Vue.component(foldList.name,foldList);
  //toast
  {
    let defaultOpt = {
      defaultType:'center',
      duration:2500
    };
    for (let property in options){
      defaultOpt[property] = options[property]
    }
    Vue.prototype.$toast = (mes,type,duration)=>{
      if(type){
        if(typeof type === 'number'){
          defaultOpt.duration = type
        }else {
          defaultOpt.defaultType = type
        }
      }
      if(duration){
        defaultOpt.duration = duration
      }
      if(document.getElementsByClassName('toast-container').length){
        return
      }
      let ToastController = Vue.extend(toast);
      let toastTpl = new ToastController().$mount();
      toastTpl.$el.className+=' toast-'+defaultOpt.defaultType;
      toastTpl.message = mes;
      toastTpl.visible = true;
      document.body.appendChild(toastTpl.$el);
      setTimeout(()=>{
        toastTpl.visible = false;
      },defaultOpt.duration);
      setTimeout(()=>{
        document.body.removeChild(toastTpl.$el);
      }, defaultOpt.duration + 300)
    };
    ['bottom', 'center', 'top'].forEach(type => {
      Vue.prototype.$toast[type] = (tips,duration) => {
        return Vue.prototype.$toast(tips,type,duration)
      }
    })
  }
  //loading
  {
    let loadingController = Vue.extend(loading);
    let loadingTpl = new loadingController().$mount();
    Vue.prototype.$loading = ()=>{
      document.body.appendChild(loadingTpl.$el);
    };
    Vue.prototype.$loading['close'] = ()=>{
      document.body.removeChild(loadingTpl.$el)
    }
  }
  //折叠panel
  {

  }

};
// Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default{
  install,
  swiper,
  slide,
  date
}
