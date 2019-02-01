<template>
    <div class="swiper-ex common">
      <swiper :options="options" @transtionend="getIndex">
        <slide v-for="(item,index) in list" :key="item.id"
               v-bind:style="{background:'url('+ item.img +') no-repeat center / cover'}">
        </slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: "swiper-ex",
  data() {
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
    }
  },
  mounted: function () {

  },
  methods: {
    getIndex:function (index) {

    },
  }
}
</script>

<style scoped>
.swiper-ex{
  /*width: 100%;*/
  height: 180px;
}
</style>
