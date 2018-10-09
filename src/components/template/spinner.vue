<template>
    <div class="yequan-spinner" :style="{width: spinnerSize + 'px',height: spinnerSize + 'px'}">
      <div class="spinner-container yequan-container1">
        <div :style="{backgroundColor:spinnerColor}" class="circle1"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle2"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle3"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle4"></div>
      </div>
      <div class="spinner-container yequan-container2">
        <div :style="{backgroundColor:spinnerColor}" class="circle1"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle2"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle3"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle4"></div>
      </div>
      <div class="spinner-container yequan-container3">
        <div :style="{backgroundColor:spinnerColor}" class="circle1"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle2"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle3"></div>
        <div :style="{backgroundColor:spinnerColor}" class="circle4"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "spinner",
      data() {
          return {

          }
      },
      props:{
        spinnerColor:{
          default:"#000"
        },
        spinnerSize:{
          default:20
        }
      },
      mounted: function () {

      },
      methods: {

      }
    }
</script>

<style>
  .yequan-spinner {
    position: relative;
  }
  .yequan-container1 > div, .yequan-container2 > div, .yequan-container3 > div {
    width: 6px;
    height: 6px;
    background-color: #aaaaaa;
    border-radius: 100%;
    position: absolute;
    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
    animation: bouncedelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .yequan-spinner .spinner-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .yequan-container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  .yequan-container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }

  .circle1 { top: 0; left: 0; }
  .circle2 { top: 0; right: 0; }
  .circle3 { right: 0; bottom: 0; }
  .circle4 { left: 0; bottom: 0; }

  .yequan-container2 .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .yequan-container3 .circle1 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .yequan-container1 .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .yequan-container2 .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  .yequan-container3 .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }

  .yequan-container1 .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }

  .yequan-container2 .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }

  .yequan-container3 .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }

  .yequan-container1 .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }

  .yequan-container2 .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }

  .yequan-container3 .circle4 {
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
