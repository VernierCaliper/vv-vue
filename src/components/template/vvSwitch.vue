<template>
  <div class="vvSwitch">
    <input type="checkbox" :disabled="disabled" :checked=checked class="vv-switch_input">
    <span class="vv-inactive_text" :style="{color:checked?'#303133':'#409eff'}" v-if="activeText!==''">{{activeText}}</span>
    <div class="switch" @click="switchCheck" :style="{
          width:switchWidth+'px',
          height:switchHeight+'px',
          background:checked?OnColor:OffColor,
          borderRadius:(switchHeight/2)+'px',
          transition:'background-color '+(switchDuration/2)+'ms'
    }">
      <span :style="{
            width:(switchHeight-4)+'px',
            height:(switchHeight-4)+'px',
            borderRadius:(switchHeight-4/2)+'px',
            left:checked?(switchWidth-switchHeight+2)+'px':'2px',
            transition:'left '+(switchDuration)+'ms'
      }">
      </span>
    </div>
    <span class="vv-active_text" :style="{color:checked?'#409eff':'#303133'}"  v-if="inactiveText!==''">{{inactiveText}}</span>
  </div>
</template>

<script>
  export default {
    name: "vvSwitch",
    data() {
      return {
        checked:false
      }
    },
    model: {
      prop: 'status',
      event: 'checkend'
    },
    props:{
      status:{
        default:true,
        type:Boolean
      },
      switchWidth:{
        default:60,
        type:[String, Number]
      },
      switchHeight:{
        default:30,
        type:[String, Number]
      },
      OnColor:{
        default:'#0fc37c',
        type:String
      },
      OffColor:{
        default:'#ff4949',
        type:String
      },
      switchDuration:{
        default:400,
        type:[String, Number]
      },
      disabled:{
        default:false,
        type:Boolean
      },
      activeText:{
        default:'',
        type:String
      },
      inactiveText:{
        default:'',
        type:String
      },
    },
    mounted: function () {
      this.checked = this.status
    },
    methods: {
      switchCheck:function () {
        if(this.disabled){
          return false
        }
        this.checked = !this.checked;
        this.$emit('checkend', !this.status);
      }
    }
  }
</script>

<style scoped>
  .vvSwitch{
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 30px;
    vertical-align: middle;
    color: #303133;
  }
  .vv-switch_input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .vvSwitch .vv-inactive_text{
    margin-right: 10px;
  }
  .vvSwitch .vv-active_text{
    margin-left: 10px;
  }
  .switch{
    transition: background-color .4s;
    transition-delay: 200ms;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
  }
  .switch span{
    box-sizing: border-box;
    border: 1px solid #dfdfdf;
    display: inline-block;
    width: 26px;
    height: 26px;
    border-radius: 15px;
    background: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    transition: left 400ms;
  }
</style>
