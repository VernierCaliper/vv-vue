<template>
  <div class="message-box">
    <div class="message-box_content">
      <div class="message-box_title">标题</div>
      <div class="message-box_tips">{{message}}</div>
      <div class="message-box_btn">
        <div class="btn cancel" v-if="showCancelBtn" @click="cancel">取消</div>
        <div class="btn confirm" @click="confirm">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message-box",
    data() {
      return {
        message:'测试',
        showCancelBtn:true,
        resolve:'',
        reject:'',
        promise:''
      }
    },
    mounted: function () {
    },
    methods: {
      cancel:function () {
        this.remove();
        this.resolve('cancel')
      },
      confirm:function () {
        this.remove();
        this.resolve('confirm')
      },
      remove:function () {
        document.body.removeChild(this.$el)
      },
      messageMethods:function () {
        this.promise = new Promise((resolve,reject)=>{
          this.resolve = resolve;
          this.reject = reject;
        });
        return this.promise
      }
    }
  }
</script>

<style scoped>
  .message-box{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.4);
  }
  .message-box_content{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 250px;
    min-height: 100px;
    background: #fff;
    border-radius: 5px;
    padding-bottom: 15px;
  }
  .message-box_title{
    width: 100%;
    font-size: 18px;
    color:#1f1e1e;
    text-align: center;
  }
  .message-box_tips{
    width: 100%;
    min-height: 20px;
    color: #b1a9a9;
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
  }
  .message-box_btn{
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .message-box_btn .btn{
    width: 50%;
    height: 25px;
    line-height: 25px;
    text-align: center;
  }
</style>
