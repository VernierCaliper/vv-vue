<template>
  <div class="action-sheet" v-show="selfFlag" @click="checkActionShow">
    <div class="vv-action-sheet" :style="{bottom:selfFlag?'0':'-100%'}">
      <ul>
        <li v-for="(item,key,index) in actionList" @click="doActions(key)">{{item}}</li>
      </ul>
      <div class="vv-cancel">
        取消
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "action-sheet",
    data() {
      return {
        selfFlag:false
      }
    },
    props:{
      actionShow:false,
      actionList:{
        default() {
          return {
            reply:'回复',
            back:'返回',
            print:'打印',
          }
        }
      }
    },
    watch:{
      actionShow:function (newVal,oldVal) {
        this.selfFlag = newVal
      }
    },
    mounted: function () {
    },
    methods: {
      checkActionShow:function () {
        this.selfFlag = !this.selfFlag;
        this.$emit('closeAction',false)
      },
      doActions:function (actionName) {
        this.$emit('doAction',actionName)
      }
    }
  }
</script>

<style scoped>
  .action-sheet{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.2);
  }
  .vv-action-sheet {
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    bottom: -100%;
    text-align: center;
    transition: bottom .3s;
  }

  .vv-action-sheet ul {
    width: 96%;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
  }
  .vv-action-sheet li{
    list-style: none;
    padding: 11px 15px;
    border-bottom: 1px solid #c8c7cc;
    color: #007aff;
    font-size: 20px;
    cursor: pointer;
  }
  .vv-cancel{
    padding: 11px 0px;
    color: #007aff;
    font-size: 20px;
    background: #fff;
    width: 96%;
    margin: 10px auto;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
