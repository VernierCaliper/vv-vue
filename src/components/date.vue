<template>
  <div class="yequan-date">
    <div class="yequan-date-box">
      <span class="date-prev" @click="changDate('prev')">上一月</span>
      <span class="date-choose" @click="selectShowState">{{select.year}}-{{select.month | addZero}}</span>
      <span class="date-next" @click="changDate('next')">下一月</span>
    </div>
    <div class="choose-date-box" v-show="selectIsShow" @click="maskClose">
      <div class="choose-date" v-show="selectIsShow">
        <div class="choose-year" ref="year">
          <ul>
            <li v-for="(item,index) in 20"
                :year="2018 - index"
                @click="chooseYear($event)"
                :class="{active:select.year===2018 - index}">
              {{2018 - index}}
            </li>
          </ul>
        </div>
        <div class="choose-month" ref="month">
          <ul>
            <li v-for="(item,index) in monthArr"
                :month="index+1"
                @click="chooseMonth($event)"
                :class="{active:index===select.month-1}">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "date",
      data(){
        return{
          select:{
            year:'',
            month:'',
            result:''
          },
          selectIsShow:true,
          monthArr:[
            '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',
          ]
        }
      },
      props:{
        now:{
          default:new Date().getTime()
        }
      },
      mounted:function () {
        this.getAllDate(this.now);
      },
      methods:{
        //获取年月日
        getAllDate:function (time) {
          const date = new Date(time);
          this.select = {
            year:date.getFullYear(),
            month:date.getMonth()+1,
            result:date.getFullYear() + '-' + (date.getMonth()+1>9?date.getMonth()+1:'0'+(date.getMonth()+1))
          };
          this.$emit('selectDate', this.select.result)
          this.$nextTick(()=>{
            this.selectShowState()
          })
        },
        //上一月和下一月
        changDate:function (method) {
          if(method === 'prev'){
            this.select.month--;
            if(this.select.month<1){
              this.select.month = 12;
              this.select.year--;
            }
          }else if(method === 'next'){
            this.select.month++;
            if(this.select.month>12){
              this.select.month = 1;
              this.select.year++;
            }
          }
          this.selectIsShow = false
          this.select.result = this.select.year + '-' + (this.select.month>9?this.select.month:'0'+this.select.month)
          this.$emit('selectDate', this.select.result)
        },
        //点击选择日期，滚动当前选择的日期到顶部
        selectShowState:function () {
          const Year = this.$refs.year;
          const Month = this.$refs.month;
          const Y = Year.getElementsByClassName('active')[0].innerHTML;
          Year.scrollTop = (2018- Y) * 40;
          Month.scrollTop = (this.select.month - 1) * 40;
          this.selectIsShow = !this.selectIsShow
        },
        //选择year
        chooseYear:function (event) {
          this.select.year = parseInt(event.currentTarget.getAttribute('year'))
          this.select.result = this.select.year + '-' + (this.select.month>9?this.select.month:'0'+this.select.month)
        },
        //选择month
        chooseMonth:function () {
          this.select.month = parseInt(event.currentTarget.getAttribute('month'))
          this.select.result = this.select.year + '-' + (this.select.month>9?this.select.month:'0'+this.select.month)
          this.selectIsShow = false;
          //滚动当前选择的日期到顶部
          const Year = this.$refs.year;
          const Month = this.$refs.month;
          const Y = Year.getElementsByClassName('active')[0].innerHTML;
          Year.scrollTop = (2018- Y) * 40;
          Month.scrollTop = (this.select.month - 1) * 40;
          this.$emit('selectDate', this.select.result)
        },
        //点击蒙层关闭
        maskClose:function (event) {
          if(event.target.className === 'choose-date-box'){
            this.selectIsShow = !this.selectIsShow
          }
        }
      },
      filters:{
        addZero:function (num) {
          return num>9?num:'0'+num
        }
      }
    }
</script>

<style>
  .yequan-date{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 100;
  }
  .yequan-date-box{
    width: 100%;
    height: 100%;
    line-height: 50px;
    box-shadow: 0px -2px 9px -3px rgba(0,0,0,0.5);
    box-sizing: border-box;
    color: #aaa;
  }
  .date-prev{
    width: 30%;
    float: left;
    text-align: center;
    box-sizing: border-box;
    border-image: linear-gradient(0deg, transparent, #aaa, transparent) 1;
    border-right: 1px solid;
  }
  .date-choose{
    width: 40%;
    float: left;
    text-align: center;
    box-sizing: border-box;
    border-image: linear-gradient(0deg, transparent, #aaa, transparent) 1;
    border-right: 1px solid;
  }
  .date-next{
    width: 30%;
    float: left;
    text-align: center;
    box-sizing: border-box;
  }
  .choose-date-box{
    position: absolute;
    width: 100vw;
    height: calc(100vh - 50px);
    background: rgba(0,0,0,0.4);
    left: 0;
    top: calc(-100vh + 50px);
  }
  .choose-date{
    position: absolute;
    width: 100%;
    height: 260px;
    left: 0;
    bottom: 0;
    background: #0fc37c;
    animation: selectShow .3s linear;
  }
  @keyframes selectShow {
    0%{
      height: 0;
    }
    100%{
      height: 260px;
    }
  }
  .choose-date div{
    width: 50%;
    float: left;
    height: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  .choose-date div.choose-year{
    border-right: 1px solid #aaa;
  }
  .choose-date li{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
  .choose-date li.active{
    background: blueviolet;
    border-radius: 5px;
  }
</style>
