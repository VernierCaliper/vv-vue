import swiper from './template/swiper'
import slide from './template/slide'
import toast from './template/toast'
import loading from './template/loading'
import spinner from './template/spinner'
import vvSwitch from './template/vvSwitch'
import actionSheet from './template/actionSheet'
const install = function (Vue,options) {
  if(install.installed) return;
  //swiper
  Vue.component(swiper.name,swiper);
  Vue.component(slide.name,slide);
  //spinner
  Vue.component(spinner.name,spinner);
  //switch开关
  Vue.component(vvSwitch.name,vvSwitch);
  //操作列表
  Vue.component(actionSheet.name,actionSheet);
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
};
// Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default{
  install,
}
