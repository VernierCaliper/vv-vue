<template>
  <div class="switch-ex common">
    <vv-switch :options="options" @checkend="getFlag" style="margin: 100px auto">

    </vv-switch>
    <div class="switch-result">
      switch组件当前处于
      <span>{{res}}</span>
      状态
    </div>
  </div>
</template>

<script>
  export default {
    name: "switch-ex",
    data() {
      return {
        res:'打开',
        options:{
          Width:60,
          Height:30,
          OnColor:'#ffffff',
          OffColor:'#0fc37c',
        }
      }
    },
    mounted: function () {

    },
    methods: {
      getFlag:function (val) {
        this.res = val?'打开':'关闭'
      }
    }
  }
</script>

<style scoped>
.switch-ex{
  margin: 0 auto;
}
  .switch-result{
    text-align: center;
    font-size: 16px;
    color: #0fc37c;
  }
  .switch-result span{
    color: crimson;
    font-weight: bolder;
  }
</style>
