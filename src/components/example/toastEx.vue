<template>
    <div class="toast-ex common">
      <button @click="toastEx">TOAST</button>
      <button @click="toastExTop">TOP</button>
      <button @click="toastExBottom">BOTTOM</button>
    </div>
</template>

<script>
  export default {
    name: "toast-ex",
    data() {
      return {}
    },
    mounted: function () {

    },
    methods: {
      toastEx:function () {
        this.$toast('这是一条测试信息','center')
      },
      toastExBottom:function () {
        this.$toast['bottom']('这是一条测试信息',2000)
      },
      toastExTop:function () {
        this.$toast['top']('这是一条测试信息',2000)
      },
    }
  }
</script>

<style scoped>

</style>
