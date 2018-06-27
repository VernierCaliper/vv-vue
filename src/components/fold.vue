<template>
    <div class="yequan-fold">
      <slot name="header"/>
      <slot name="list"/>
    </div>
</template>

<script>
    export default {
      name: "fold",
      data(){
        return{
          text:'1111'
        }
      },
      props:{
        test:{
          default:'asd'
        }
      },
      mounted:function () {

      },
      methods:{

      }
    }
</script>

<style scoped>
  .yequan-fold{
    width: 100%;
  }


</style>
