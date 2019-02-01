<template>
  <div class="slider-ex common">
    <slider style="margin: 50px auto" v-model="res">

    </slider>
  </div>
</template>

<script>
  export default {
    name: "slider-ex",
    data() {
      return {
        res:0
      }
    },
    mounted: function () {

    },
    methods: {
      result:function (res) {
        // this.res = res
      }
    }
  }
</script>

<style scoped>

</style>
