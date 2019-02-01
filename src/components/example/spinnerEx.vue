<template>
    <div class="spinner-ex common">
      <div id="message">
        <h4>这是第1条信息</h4>
      </div>

      <div class="spinner-wrap" @click="controler">
        <a v-show="!spinnerIsShow">点击加载更多</a>
        <spinner :spinnerColor="spinnerColor" :spinnerSize="spinnerSize" v-show="spinnerIsShow">

        </spinner>
      </div>
    </div>
</template>

<script>
export default {
  name: "spinner-ex",
  data() {
    return {
      spinnerColor:'#0fc37c',
      spinnerSize:80,
      spinnerIsShow:false,
      index:1
    }
  },
  mounted: function () {

  },
  methods: {
    controler:function () {
      if(!this.spinnerIsShow){
        this.spinnerIsShow = true;
        setTimeout(()=>{
          this.index++;
          let dom = document.createElement('h4');
          dom.innerText = '这是第' + this.index + '条信息';
          document.getElementById('message').appendChild(dom);
          this.spinnerIsShow = false;
        },1500)
      }
    }
  }
}
</script>

<style>
.spinner-wrap{
  width: 100%;
  height: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
  h4{
    text-align: center;
    padding: 10px 0;
  }
</style>
