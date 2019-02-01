<template>
  <div class="switch-ex common">
    <vv-switch
      switchWidth=60
      switchHeight=30
      OnColor="#0fc37c"
      OffColor="#ff4949"
      switchDuration=400
      active-text="开"
      inactive-text="关"
      v-model="status"
      style="margin: 30px auto">
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
        res: '打开',
        status:false,
        Width: 60,
        Height: 30,
        OnColor: '#0fc37c',
        OffColor: '#ff4949',
        duration: 400,
      }
    },
    mounted: function () {

    },
    methods: {
      getFlag: function (val) {
        console.log(val);
        this.res = val ? '打开' : '关闭'
      }
    }
  }
</script>

<style scoped>
  .switch-ex {
    margin: 0 auto;
  }

  .switch-result {
    text-align: center;
    font-size: 16px;
    color: #0fc37c;
  }

  .switch-result span {
    color: crimson;
    font-weight: bolder;
  }
</style>
