<template>
  <div class="index">
    <swiper :options="options">
      <slide v-for="(item,index) in list" :key="item.id"
             v-bind:style="{background:'url('+ item.img +') no-repeat center / cover'}">
      </slide>
    </swiper>
    <date @selectDate="picked">

    </date>
    <!--<fold>-->
      <!--<fold-header slot="header">-->
        <!--<template scope="props">-->
          <!--<p>{{props.test}}</p>-->
        <!--</template>-->
      <!--</fold-header>-->
      <!--<fold-list slot="list">-->
        <!--<span>这是一大段测试问本</span>-->
        <!--<span>这是一大段测试问本</span>-->
        <!--<span>这是一大段测试问本</span>-->
        <!--<span>这是一大段测试问本</span>-->
        <!--<span>这是一大段测试问本</span>-->
        <!--<span>这是一大段测试问本</span>-->
      <!--</fold-list>-->
    <!--</fold>-->
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      options:{
        autoplay:false,
        duration:500,
        interval:2000,
        showPagenation:true,
        notActiveClass:'notActiveClass',
        activeClass:'yq_swiper_active',
        index:1,
      },
      list:[
        {
          img:'/static/list1.jpg',
          id:1
        },
        {
          img:'/static/list2.jpg',
          id:2
        },
        {
          img:'/static/list3.jpg',
          id:3
        }
      ],
      freeMon:'',
    }
  },
  mounted:function () {
    this.$loading();
    setTimeout(()=>{
      this.$loading['close']()
    },2000)
  },
  methods:{
    picked:function (res) {
      this.freeMon = res
      this.$toast['center'](res,2000)
    }
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  width: 100%;
  height: 180px;
}
</style>
