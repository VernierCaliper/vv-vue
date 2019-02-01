<template>
  <div class="message-box-ex common">
    <button class="message-box_btn" @click="messageBoxTest">测试</button>
  </div>
</template>

<script>
  export default {
    name: "message-box-ex",
    data() {
      return {}
    },
    mounted: function () {

    },
    methods: {
      messageBoxTest: function () {
        this.$messageBox({
          message:'这是测试文本',
          showCancelBtn:true
        }).then(action => {
          if(action === 'confirm'){
            alert('点击确定')
          }else {
            alert('点击取消')
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .message-box_btn {
    display: block;
    width: 100px;
    height: 60px;
    margin: 20px auto;
    border-radius: 4px;
    font-size: 18px;
    color: #0fc37c;
    background: #fff;
  }
</style>
