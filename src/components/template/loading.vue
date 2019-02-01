<template>
  <div class="AjaxLoading" id="AjaxLoading">
    <div class="spinner" :class="size==='normal'||size==='middle'||size==='big'?'spinner-'+size:'spinner-normal'">
      <div class="spinner-container container1">
        <div class="circle1" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle2" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle3" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle4" :style="{backgroundColor:spinnerColor}"></div>
      </div>
      <div class="spinner-container container2">
        <div class="circle1" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle2" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle3" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle4" :style="{backgroundColor:spinnerColor}"></div>
      </div>
      <div class="spinner-container container3">
        <div class="circle1" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle2" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle3" :style="{backgroundColor:spinnerColor}"></div>
        <div class="circle4" :style="{backgroundColor:spinnerColor}"></div>
      </div>
    </div>
    <span class="loading-text" :style="{color:textColor}">{{text}}</span>
  </div>
</template>

<script>
    export default {
      name: "loading",
      data() {
        return {
          text:'加载中',
          textColor:'#409eff',
          size:'normal',
          spinnerColor:'#409eff'
        }
      },
      mounted:function () {

      }
    }
</script>

<style>
  .AjaxLoading{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 100000;
    animation: opacity .4s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @keyframes opacity {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  .loading-text{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
  }
  .spinner-normal {
    width: 20px;
    height: 20px;
    position: relative;
  }
  .spinner-middle {
    width: 30px;
    height: 30px;
    position: relative;
  }
  .spinner-big {
    width: 40px;
    height: 40px;
    position: relative;
  }
  .container1 > div, .container2 > div, .container3 > div {
    width: 6px;
    height: 6px;
    background-color: #409eff;

    border-radius: 100%;
    position: absolute;
    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
    animation: bouncedelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .spinner .spinner-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  .container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }

  .circle1 { top: 0; left: 0; }
  .circle2 { top: 0; right: 0; }
  .circle3 { right: 0; bottom: 0; }
  .circle4 { left: 0; bottom: 0; }

  .container2 .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .container3 .circle1 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .container1 .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .container2 .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  .container3 .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }

  .container1 .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }

  .container2 .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }

  .container3 .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }

  .container1 .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }

  .container2 .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }

  .container3 .circle4 {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }

</style>
