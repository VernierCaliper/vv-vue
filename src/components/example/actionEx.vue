<template>
  <div class="action-ex common">
    <div class="button-common" @click="actionSheet">
      ACTIONSHEET
    </div>
    <action-sheet :actionShow="flag" @closeAction="closeAction" @doAction="doActions">

    </action-sheet>
  </div>
</template>

<script>
  export default {
    name: "action-ex",
    data() {
      return {
        flag:false
      }
    },
    mounted: function () {

    },
    methods: {
      actionSheet:function () {
        this.flag = !this.flag
      },
      closeAction:function (val) {
        this.flag = val
      },
      doActions:function (val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>
  .button-common {
    padding: 25px 10px;
    display: inline-block;
    color: #fff;
    border-radius: 10px;
    background-image: linear-gradient(#0fc37c, #0f905d);
    margin: 100px auto;
  }
</style>
