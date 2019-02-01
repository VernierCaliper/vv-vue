<template>
  <div class="slider" ref="slider" :style="{width:width+'px',height:height+'px',backgroundColor:trackColor}">
    <input type="number" @input="process" class="vv-slide-input">
    <div class="slider-bar" :style="{width:start+'%',backgroundColor:barColor}"></div>
    <div class="slider-dot"
          :style="{left:start+'%'}"
          @touchstart="moverStart"
          @touchmove="slide"
          @touchend="slideEnd"
    >
      <span :style="{border: '2px solid '+dotsColor}"></span>
      <div :class="{isShow:showRes}">{{res}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slider",
    data() {
      return {
        start:0,
        step:1,
        sliderPositionX:0,
        moveStartX:0,
        res:0,
        showRes:false
      }
    },
    model: {
      prop: 'process',
      event: 'slideEnd'
    },
    props:{
      process:{
        default:0,
        type:Number
      },
      width:{
        default:200,
        type:Number
      },
      height:{
        default:6,
        type:Number
      },
      trackColor:{
        default:'#e4e7ed',
        type:String
      },
      barColor:{
        default:'no',
        type:String
      },
      dotsColor:{
        default:'no',
        type:String
      },
      min:{
        default:0,
        type:Number
      },
      max:{
        default:100,
        type:Number
      },
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init:function () {
        this.sliderPositionX = this.$refs.slider.getBoundingClientRect().left;
        this.start = this.process;
        this.res = this.process;
        if(this.dotsColor === 'no' && this.barColor === 'no'){
          this.dotsColor = '#42b983';
          this.barColor = '#42b983';
        }else if(this.dotsColor === 'no' && this.barColor !== 'no'){
          this.dotsColor = this.barColor;
        }else if(this.dotsColor !== 'no' && this.barColor === 'no'){
          this.barColor = this.dotsColor;
        }
      },
      moverStart:function (e) {
        this.showRes = true;
        this.moveStartX = e.touches[0].clientX;
      },
      slide:function (e) {
        this.start = (e.touches[0].clientX - this.sliderPositionX)/this.width*100;
        if(this.start > this.max){
          this.start = this.max
        }else if(this.start < this.min){
          this.start = this.min
        }
        this.res = Math.floor(this.start);
        this.$emit('slideEnd',this.res)
      },
      slideEnd:function () {
        this.showRes = false
      }
    }
  }
</script>

<style scoped>
  .slider {
    width: 200px;
    height: 6px;
    background-color: #e4e7ed;
    border-radius: 3px;
    position: relative;
  }
  .vv-slide-input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .slider-bar{
    position: absolute;
    left: 0;
    top: 0;
    height: 6px;
    background-color: #42b983;
    border-radius: 3px;
  }

  .slider-dot{
    position: absolute;
    left: 0%;
    top: 0;
    width: 16px;
    height: 16px;
    transform: translate3d(-50%,-5px,0);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .slider-dot span{
    width: 12px;
    height: 12px;
    border: 2px solid #42b983;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #ffffff;
  }
  .slider-dot div{
    position: absolute;
    font-size: 12px;
    width: 24px;
    height: 16px;
    background: rgba(0,0,0,.4);
    text-align: center;
    border-radius: 4px;
    left: 50%;
    top: -20px;
    margin-left: -12px;
    color: #ffffff;
    opacity: 0;
    transition: all .4s;
  }
  .slider-dot div.isShow{
    opacity: 1;
  }
  .slider-dot div:before{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width:4px 4px 0;
    border-style:solid;
    border-color:rgba(0,0,0,.4) transparent transparent;
    left: 50%;
    top: 16px;
    margin-left: -4px;
  }
</style>
