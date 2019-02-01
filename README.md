# vv-view
### 目前有swiper轮播组件、月份选择、loading加载动画、toast提示信息组件、messageBox确认取消弹窗、switch开关、slide滑块等，将会持续更新各种常用组件
## 安装
npm install vv-vue --save

cnpm install vv-vue --save //淘宝镜像

### 使用
 * 1.引用
  > main.js
 ```
  import vvView from 'vv-vue'
  
  import '../node_modules/vv-vue/dist/style.css'
  
  Vue.use(vvView);
 ```
 * 2.使用
 > html
 ```
 //swiper用法
 <swiper :options="options">
     <slide v-for="(item,index) in list" :key="item.id"
            v-bind:style="{background:'url('+ item.img +') no-repeat center / cover'}">
     </slide>
 </swiper> //注：我个人习惯使用背景图片，也可以在slide之间写你自己的代码
 //月份选择组件
 <date @selectDate="picked">

 </date>
 //loading动画组件，spinnerColor:loading颜色
 <spinner :spinner-color="spinnerColor"></spinner>
 ```
 * 3.添加options
 > JavaScript
  ```
  //swiper用法 
  data () {
    return {
        list:[
          {
            img:'/static/list1.jpg',
            id:1
          },
          {
            img:'/static/list2.jpg',
            id:2
          },
          {
            img:'/static/list3.jpg',
            id:3
          }
        ],
        options:{
            autoplay:true,//是否自动播放，默认true
            duration:500,//过度时长，单位ms,默认500
            interval:2000,//自动播放间隔时长，单位ms,默认2500
            showPagenation:true,//是否显示index dots,默认true
            notActiveClass:'',//index dots 的类名，默认使用的是yq_pagenation_item，可添加自己的类名，记得使用！important覆盖我的样式，但请注意style如果使用了scope,那么css样式不会生效，但class依然会添加
            activeClass:'yq_swiper_active',//index dots 当前的类名，默认yq_swiper_active
            index:1,//加载默认显示的第一张slide，默认1
        },
      }
      }

    //loading动画方法
      this.$loading()//开启动画
      this.$loading['close']()//关闭动画
    //toast提示框
    你可以直接调用下面的方法
    this.$toast('message') //默认显示位置为center
    或者
    this.$toast[type]('message',duration)
    其中type为string,控制toast提示显示位置，默认为'center'，有三个可选值
    type->'top'显示在顶部
    type->'center'显示在中央
    type->'bottom'显示在底部
    
    duration为number,提示信息消失时间,默认为2500
    
  ```
  //spinner用法(相当于直接在页面中任何位置使用的loading)
  >html
  ```
  <spinner :spinnerColor="spinnerColor" :spinnerSize="spinnerSize">

  </spinner>
  ```
  >配置项
  
  spinnerColor -> loading颜色
  
  spinnerSize  &nbsp;&nbsp;-> loading大小(单位：px，默认20px)
  
  //switch用法
  >html
  ```
    <vv-switch
        switchWidth=60
        switchHeight=30
        OnColor="#0fc37c"
        OffColor="#ff4949"
        switchDuration=400
        active-text="开"
        inactive-text="关"
        v-model="status"
    >
    </vv-switch>
  ```
  //slider用法
  >html
  ```
    <vv-slider
               :width="200"
               :height="6"
               :trackColor="'#e4e7ed'"
               :bar-color="'red'"
               :dots-color="'red'"
               :min="20"
               :max="80"
               v-model="res">
    </vv-slider>
  ```
  >注意
  1.绑定的res值，不要小于min，或者大于max
  
  2.bar-color和dots-color如果只设置一个选项，则两者共用同一颜色，当然也可以分开传入不同颜色（如果你觉得好看的话，这样的需求应该不太可能，但我还是保留了可分开配置不同颜色的功能，万一呢...）
  

  
### 截图

### 当然你也可以直接clone本项目，在本地运行查看，工程中的example目录即是调用各个组件的示例
* 1.npm install //建议安装使用cnpm
* 2.npm run dev
