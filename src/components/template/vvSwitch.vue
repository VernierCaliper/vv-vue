<template>
  <div class="vvSwitch" :style="{width:options.Width+'px',height:options.Height+'px'}">
    <div class="switch" :class="flag?'switch-on':'switch-off'"
         @click="switchCheck"
         :style="{background:flag?options.OnColor:options.OffColor}"
    >
      <span :style="{left:flag?'-1px':(options.Width-options.Height-1)+'px'}"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vvSwitch",
    data() {
      return {
        flag:true,
        offLeft:0
      }
    },
    props:{
      options:{
        default() {
          return{
            Width:60,
            Height:30,
            OnColor:'#ffffff',
            OffColor:'#0fc37c',
          }
        }
      }
    },
    mounted: function () {

    },
    methods: {
      switchCheck:function () {
        this.flag = !this.flag;
        this.$emit('checkend',this.flag)
      }
    }
  }
</script>

<style scoped>
  .vvSwitch{
    width: 60px;
    height: 30px;
    /*cursor: pointer;*/
  }
  .switch{
    transition: background-color .4s;
    transition-delay: .2s;
  }
  .switch-on {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-sizing: border-box;
    border: 1px solid #dfdfdf;
    background: #fff;
    position: relative;
  }
  .switch-off {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-sizing: border-box;
    border: 1px solid #dfdfdf;
    background: #0fc37c;
    position: relative;
  }
  .switch span{
    box-sizing: border-box;
    border: 1px solid #dfdfdf;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #fff;
    position: absolute;
    left: -1px;
    top: -1px;
    transition: left .4s;
  }
</style>
