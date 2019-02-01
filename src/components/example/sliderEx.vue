<template>
  <div class="slider-ex common">
    <vv-slider style="margin: 50px auto"
               :width="200"
               :height="6"
               :trackColor="'#e4e7ed'"
               :bar-color="'red'"
               :dots-color="'red'"
               :min="20"
               :max="80"
               v-model="res">
    </vv-slider>
  </div>
</template>

<script>
  export default {
    name: "slider-ex",
    data() {
      return {
        res:20
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
