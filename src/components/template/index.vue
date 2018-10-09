<template>
  <div class="index">
    <ul>
      <li style="text-align: left;color: #2c3e50;padding-left: 5px">组件</li>
      <li v-for="item in list" @click="changeExample(item.path)">{{item.name | filterIndex}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list:[

      ]
    }
  },
  mounted:function () {
    this.list = this.$router.options.routes;
  },
  methods:{
    changeExample:function (example) {
      this.$router.push({
        path:example
      })
    }
  },
  filters:{
    filterIndex:function (val) {
      if(val === 'index'){
        return '首页'
      }else {
        return val
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index{
  position: absolute;
  left: 0;
  top: 0;
  width: 26%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  box-shadow: 2px 2px 20px 1px rgba(0,0,0,0.2);
  padding: 0 10px;
  box-sizing: border-box;
}
.index::-webkit-scrollbar {
  width: 1px;
  background-color: #eee;
}

.index::-webkit-scrollbar-track {
  background-color: #eee;
}

.index::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0);
}

.index::-webkit-scrollbar-button:start {
  background-size: 12px 12px;
}

.index::-webkit-scrollbar-button:end {
  background-size: 12px 12px;
}
  .index li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #42b983;
    color: #42b983;
    font-size: 14px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
