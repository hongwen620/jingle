
<template>
  <div class="shop">
    <div class="content">   
      <div class="top">
       <div class="top1">   <van-icon name="location-o" color="#fff"/>
       <p>青年路103号&gt;</p></div>
    <div class="top2">
        <van-search v-model="value" placeholder="隐形眼镜" shape="round"/>
    </div>

   </div>   
   <div class="first">  <van-swipe class="my-swipe" :autoplay="3000" >
  <van-swipe-item><img src="home1.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="home2.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="home3.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="hom4.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="home5.jpg" alt=""></van-swipe-item>
</van-swipe></div>

<ul class="imgs">
    <li v-for="(v,i) in arr2" :key="i" @click="fun()">
        <img :src="v.img" alt="" >
    </li>
</ul>
<div class="hao"><van-notice-bar left-icon="volume-o" :scrollable="false" >
  <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
    <van-swipe-item> 云闪付支付全场满53立减20同享任意优惠！</van-swipe-item>
    <van-swipe-item>自营店铺单店满78免运费,全国配送</van-swipe-item>
  </van-swipe>
</van-notice-bar></div>

<div  class="homeone">
  <img v-for="(v,i) in arr" :key="i" :src="v.img" alt="">
</div>
<div class="miao">
  <span class="sha">秒杀</span>
 <van-count-down :time="time" class="miaosha">
  <template #default="timeData">
     <span class="block">{{ timeData.days }}</span>
    <span class="colon">天</span>
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">时</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">分</span>
    <span class="block">{{ timeData.seconds }}</span>
    <span class="colon">秒</span>
  </template>
</van-count-down>
<div class="imgl">
  <Hf :slidedata="imglista"/>
</div>
</div>
<div class="second">
  <h4>品牌专区</h4>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(v,h) in imgurl" :key="h">
    <img :src="v.img" alt="">
  </van-swipe-item>
</van-swipe>
</div><Hf :slidedata="imglistb"/>
<div class="last">
  <van-tabs v-model="active" scrollspy sticky>
  <van-tab title="热销推荐"><Bf :homedata="imga"/></van-tab>
  <van-tab title="女性健康"><Bf :homedata="imgb"/></van-tab>
  <van-tab title="营养保健"><Bf :homedata="imgc"/></van-tab>
  <van-tab title="儿童健康"><Bf :homedata="imgd"/></van-tab>
</van-tabs></div>
<van-divider :style="{ color: '#888', borderColor: '#888', padding: '0 16px' }" class="ll">京ICP 14046980号</van-divider>

</div>
 <Bottombar/>
  </div>
</template>

<script>
import {homeone} from "api/homeapi.js"
import  Bottombar from "com/bottombar.vue"
import Hf from "com/homefu.vue"
import Bf from "com/homebfu.vue"
export default {
methods: {
  fun(){
    this.$router.push("/manbing")
  }
},
  components:{
    Bottombar,Hf,Bf
  },
    data() {
    return {
      value: '',
       arr:[],
       imglist:[],
       imgurl:[],
       img:[],
       arr2:[],
       time: 30 * 60 * 60 * 1000,
       active: 2,
    };
    
  },
  computed: {
    imglista(){
      return this.imglist.slice(0,38)
    },
    imglistb(){
      return this.imglist.slice(39,51)
    },
      imga(){
      return this.img.slice(0,3)
    },
    imgb(){
      return this.img.slice(3,5)
    },  imgc(){
      return this.img.slice(5,7)
    },
    imgd(){
      return this.img.slice(7,8)
    }
  },
  mounted() {
      this.$store.dispatch("homelink"),
      homeone().then((ok)=>{
    console.log(ok)
    this.arr=ok.data.arr;
    this.arr2=ok.data.arr2;
     this.imglist=ok.data.imglist;
      this.imgurl=ok.data.imgurl;
      this.img=ok.data.img;

})
  },
  filters:{
    "sl"(val){
      if(val.length>11){
        return val.substr(0,11)+"..."
      }else{
        return val
      }
    }
  }
}
</script>

<style scoped>
.hao{
  width: 100%;
  margin: 16.6875rem 0rem 0rem -0.5rem;
      
}
.ll{
  background-color: #efeff4;
  height: 1.875rem;
}
.second   .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 1.25rem;
    line-height: 9.375rem;
    text-align: center;
    background-color: #39a9ed;
  }

  .second img{
    width: 100%;
    height: 8.4375rem;
  }
  .second .my-swipe .van-swipe-item{
    line-height: 0rem;
  }
  .second h4{
margin-left: 8.625rem;
margin-bottom: 1.25rem;
  }
  .colon {
    display: inline-block;
    margin: 0 0.25rem;
    color: #000;
  }
  .block {
    display: inline-block;
    width: 1.375rem;
    color: #fff;
    font-size: 0.75rem;
    text-align: center;
    background-color: #000;
  }
.miaosha{
  display: inline;
}
.miao .sha{
  font-size: 1rem;
  margin-left: 0.9375rem;
  font-weight: bold;
  margin-right: 0.625rem;
}
.content{
  margin-bottom: 4rem;
}
body {
background-color: #efeff4;
width: 100%;
height: 100%;
}
.top{
    height: 2.9375rem;
    width: 100%;
    padding: 0.1875rem;
    line-height:2.9375rem;
    background-color: #e94544;
    position: fixed;
    top: 0;
    z-index: 1111;
    display:flex;
    justify-content: space-around;
}
.van-search__content--round{
    background-color:#fff;
}
.top2 .van-search{
    padding: 0; 
    margin-top: 1.1875rem;
    border-radius: 1.25rem;
    height: 0.625rem;
    width: 12.5rem;
}

.homeone img:nth-of-type(1){
  width: 13.0625rem;
height: 11.25rem;
}
.homeone img:nth-of-type(2),.homeone img:nth-of-type(3){
  width: 9.9375rem;
  float: right;
height: 5.75rem;
}
.homeone img:nth-of-type(3){
margin-top: -5.9375rem;
}
p{
    display: inline;
    color: #fff;
    font-size: 0.9375rem;
}
.first .my-swipe .van-swipe-item {
    color: #fff;
  margin-top: 3.375rem;
  }
.first .van-swipe-item img{
    width: 100%;
    height: 7.8125rem;
}
.first .van-swipe-item{
     width: 100%;
     height: 7.875rem;
}
.shop .first .van-swipe__indicators{
    bottom: 0.625rem;
}
/* .shop  .first .van-swipe__indicators .van-swipe__indicator{
    width: 1.25rem;
    height: 25rem;
    border-radius: 0rem;
} */
.shop .van-swipe__indicators .van-swipe__indicator--active{
    background-color: red;
    color: red;
}
.imgs li{
    float: left;
}
.imgs img{
width: 4.6875rem;
height: 5.375rem;

}
  .notice-swipe {
    height: 2.5rem;
    line-height: 2.5rem;
        color: #e94544;
  }
</style>