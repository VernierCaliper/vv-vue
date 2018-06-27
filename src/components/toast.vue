<template>
  <section class="toast-container">
    <div class="toast" v-bind:class="[visible?'yequan-fade-in':'yequan-fade-out']">
      <span>{{message}}</span>
    </div>
  </section>
</template>

<script>
    export default {
      name: "toast",
      data() {
        return{
          visible: true,
          message: ""
        }
      }
    }
</script>

<style scoped>
  @keyframes yequan-fade-in{
    0%{
      opacity: 0;
      transform: translateY(-60px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes yequan-fade-out{
    0%{
      opacity: 1;
      transform: translateY(0px);
    }
    100%{
      opacity: 0;
      transform: translateY(60px);
    }
  }
  .toast-container{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    box-sizing: border-box;
  }
  .toast-container.toast-top{
    align-items: flex-start;
  }
  .toast-container.toast-center{
    align-items: center;
  }
  .toast-container.toast-bottom{
    align-items: flex-end;
  }
  .toast{
    height: 35px;
    padding: 0 30px;
    line-height: 35px;
    text-align: center;
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    opacity: 0;
  }
  .yequan-fade-in{
    animation: yequan-fade-in 0.3s forwards;
  }
  .yequan-fade-out{
    animation: yequan-fade-out 0.3s forwards;
  }
</style>
