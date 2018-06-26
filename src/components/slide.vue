<template>
  <div class="yq_slide">
    <slot/>
  </div>
</template>
<script>
  export default {
    name: 'slide',
    data(){
      return{

      }
    }
  }
</script>
<style>
  .yq_slide {
    width: 100%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    z-index: 10;
    height: 100%;
  }
  .yq_slide img {
    display: block;
  }
</style>
