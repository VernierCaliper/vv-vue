import swiper from './template/swiper'
import slide from './template/slide'
import toast from './template/toast'
import messageBox from './template/messageBox'
import loading from './template/loading'
import spinner from './template/spinner'
import vvSwitch from './template/vvSwitch'
import actionSheet from './template/actionSheet'
import slider from './template/slider'
import '@/assets/css/touchimg.css'
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
  //滑块
  Vue.component(slider.name,slider);
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
    let loadingComponents = new loadingController();
    let loadingTpl = loadingComponents.$mount().$el;
    Vue.prototype.$loading = (params)=>{
      if(!params){
        params = {
          text:'加载中',
          textColor:'#409eff',
          size:'normal',
          spinnerColor:'#409eff'
        }
      }
      loadingComponents.text = params.text?params.text:'加载中';
      loadingComponents.textColor = params.textColor?params.textColor:'#409eff';
      loadingComponents.size = params.size?params.size:'normal';
      loadingComponents.spinnerColor = params.spinnerColor?params.spinnerColor:'#409eff';
      document.body.appendChild(loadingTpl);
    };
    Vue.prototype.$loading['close'] = (callback)=>{
      document.body.removeChild(loadingTpl);
      if(callback){
        callback && callback()
      }
    }
  }
  //messageBox
  {
    let messageBoxController = Vue.extend(messageBox);
    let messageBoxComponents = new messageBoxController();
    let messageBoxTpl = messageBoxComponents.$mount().$el;
    Vue.prototype.$messageBox = (params)=>{
      if(params){
        messageBoxComponents.message = params.message?params.message:'请传入相应参数';
        messageBoxComponents.showCancelBtn = params.showCancelBtn
      }else {
        messageBoxComponents.message = '请传入相应参数'
      }
      document.body.appendChild(messageBoxTpl);
      return messageBoxComponents.messageMethods()
        .then(val => {
          return Promise.resolve(val);
        })
        .catch(err => {
          return Promise.reject(err)
        })
    };
  }
  //图片点击放大全局指令
  {
    Vue.directive('touchimg',{
      inserted:function (ele,data) {
        ele.onclick = function () {
          console.log(ele.tagName)
          if(ele){
            var imgBox = document.createElement('div');
            imgBox.className = 'touch-img-box';
            var showImg = document.createElement('img');
            showImg.src = ele.getAttribute('src');
            showImg.className = 'touch-img';
            imgBox.appendChild(showImg);
            document.body.appendChild(imgBox);
            imgBox.onclick = function () {
              document.body.removeChild(imgBox)
            }
          }
        }
      }
    })
  }
};
// Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default{
  install,
}
