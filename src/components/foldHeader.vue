<template>
  <div class="yequan-fold-header" @click="changeFoldState">
    <slot/>
  </div>
</template>

<script>
    export default {
      name: "fold-header",
      data() {
        return {
          isFold:false
        }
      },
      mounted:function () {

      },
      methods:{
        changeFoldState:function () {
          this.isFold = !this.isFold;
        }
      }
    }

</script>

<style scoped>
  .yequan-fold-header{
    width: 100%;
    height: 40px;
    background: #0fc37c;
  }
</style>
