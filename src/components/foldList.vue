<template>
  <div class="yequan-fold-content" v-show="isFold">
    <slot/>
  </div>
</template>

<script>
    export default {
        name: "fold-list",
        data() {
            return {
              isFold:true
            }
        },
        mounted: function () {

        },
        methods: {}
    }
</script>

<style scoped>
  .yequan-fold-content{
    width: 100%;
    background: yellow;
    overflow: hidden;
  }
</style>
