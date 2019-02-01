<template>
    <div class="loading-ex common">
      <button @click="loadingEx">LOADING</button>
    </div>
</template>

<script>
    export default {
      name: "loading-ex",
      data() {
        return {}
      },
      mounted: function () {

      },
      methods: {
        loadingEx:function () {
          this.$loading({
            text:'加载中',
            textColor:'#409eff',
            size:'normal',
            spinnerColor:'#409eff'
          });
          setTimeout(()=>{
            this.$loading['close'](()=>{
              console.log('消失')
            })
          },2000)
        }
      }
    }
</script>

<style scoped>

</style>
