<template>
  <div id="app">
      <index></index>
      <router-view/>
  </div>
</template>

<script>
  import index from '@/components/template/index'
  export default {
    name: 'App',
    components:{
      index
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,html{
  position: relative;
  width: 100%;
  height: 100%;
}
#app{
  position: relative;
  width: 100%;
  height: 100%;
}
.vv-phone{
  position: relative;
  background: #111;
  border-radius: 55px;
  box-shadow: 0px 0px 0px 2px #aaa;
  width: 320px;
  height: 568px;
  padding: 105px 25px;
  box-sizing: content-box;
  margin: 0 auto;
}
.vv-phone::before{
  content: '';
  width: 60px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  background: #333;
  top: 50px;
}
.vv-phone::after{
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  left: 50%;
  margin-left: -30px;
  bottom: 20px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 5px solid #333;
}
.vv-container{
  height: 100%;
  display: block;
  width: 100%;
  position: relative;
  background: #fff;
}
.common{
  position: absolute;
  width: 74%;
  height: 100%;
  left: 26%;
  top: 0;
  text-align: center;
}
button{
  display: block;
  width: 100px;
  height: 60px;
  margin: 20px auto;
  border-radius: 4px;
  font-size: 18px;
  color: #0fc37c;
  background: #fff;
}
</style>
