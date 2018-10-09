<template>
    <div class="date-ex common">
      <date @selectDate="picked">

      </date>
      <h2>注：目前该组件仅仅只是用于公司项目中，还未设置各配置项，后期修改</h2>
      <span class="date-result">日期选择结果：<span>{{freeMon}}</span></span>
    </div>
</template>

<script>
export default {
  name: "date-ex",
  data() {
    return {
      freeMon:''
    }
  },
  mounted: function () {

  },
  methods: {
    picked:function (res) {
      //res为返回的所选择的日期
      this.freeMon = res;
    }
  }
}
</script>

<style scoped>
  h2{
    text-indent: 2em;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .date-result{
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
  }
  .date-result span{
    color: #0fc37c;
  }
</style>
