import swiper from './swiper'
import slide from './slide'
const install = function (Vue) {
  if(install.installed) return;
  Vue.component(swiper.name,swiper);
  Vue.component(slide.name,slide)
}
// Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default{
  install,
  swiper,
  slide
}
