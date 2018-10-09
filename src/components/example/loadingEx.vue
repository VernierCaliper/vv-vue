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
          this.$loading();
          setTimeout(()=>{
            this.$loading['close']()
          },2000)
        }
      }
    }
</script>

<style scoped>

</style>
