# vv-view
### 目前有swiper轮播组件、月份选择、loading加载动画、toast提示信息组件，将会持续更新各种常用组件
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
  //月份选择
    data () {
      return {
        freeMon:''
        }
      },
    methods:{
      picked:function (res) {
        //res为返回的所选择的日期
        this.freeMon = res
      }
    },

    //loading动画方法
      this.$loading()//开启动画
      this.$loading['close']()//关闭动画
    //toast提示框
    你可以直接调用下面的方法
    this.$toast('message') //默认显示位置为center
    或者
    this.$toast[type]('message',duration)
    type string,控制toast提示显示位置，默认为'center'
    type->'top'显示在顶部
    type->'center'显示在中央
    type->'bottom'显示在底部
    
    duration number,提示信息消失时间,默认为2500
    
  ```
  //spinner用法(直接在页面使用的loading)
  >html
  ```
  <spinner :spinnerColor="spinnerColor" :spinnerSize="spinnerSize">

  </spinner>
  ```
  >配置项
  
  spinnerColor -> loading颜色
  
  spinnerSize  &nbsp;&nbsp;-> loading大小(单位：px)
### 截图

![效果](https://s22.postimg.cc/58fehx4a9/20180623135356.png)

### 当然你也可以直接clone本项目，在本地运行查看
* 1.npm install //建议使用cnpm
* 2.npm run dev
