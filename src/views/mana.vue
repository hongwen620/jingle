<template>
  <div class="mana">
    <div class="header"><van-tabs v-model="activeName" class="manaa" sticky title-style="font-size='3rem'" offset-top="0rem">
  <van-tab title="商品" name="a" class="tab1" >
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
  <van-swipe-item><img :src="v.img" alt="" v-for="(v,i) in  arr" :key="i"></van-swipe-item>
  <van-swipe-item><img :src="v.img" alt="" v-for="(v,i) in  arr" :key="i"></van-swipe-item>
</van-swipe>
<div class="xiang" v-for="(v,i) in  arr" :key="i">
  <p>{{v.smalltitle}}</p>
  <p>{{v.title}}</p>
   <p>{{v.name}}</p>
    <p>{{v.middle}}</p>
    <p>{{v.sm}}</p>
    <p>说明书</p>
    <p>{{v.ed}}</p>
   <p>套餐价：<span>{{v.price}}</span></p>
   <p>{{v.logo}}</p> 
</div>
<div class="ding">
  <img src="logoo.png" alt="" class="logo">
  <p>满78包邮，2-4天达送达</p>
  <p>本商品由叮当商城旗舰店为您服务</p>
  <p><van-icon name="ellipsis" /></p>
</div>
<div class="guige" v-for="(v,i) in  arr" :key="i">
  规格：
{{v.guige}}
</div>
<div class="haoping">
  <p>好评度</p>
  <p>0条评价&gt;</p>
</div>
<div class="gengduo" v-for="(v,i) in  arr" :key="i">
<p>【更多优惠搭配】</p>
<p>套餐一</p>
<p>{{v.yongtu}}</p>
<img :src="v.smallimg" alt="" class="duo">
<p>{{v.middle}}</p>
<p>{{v.pr}}</p>
 <p>套餐价：<span>{{v.price}}</span></p>
</div>
<div class="xiangguan">
  <p>相关商品</p>
  <van-tabs v-model="active" class="lie" >
  <van-tab title="精选" class="img2" >
    <div class="img3" v-for="(v,i) in  this.$store.getters.arr2" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div>
    </van-tab>
  <van-tab title="性功能障碍" class="xing">  
    <div class="img4" v-for="(v,i) in  this.$store.getters.arr3" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div></van-tab>
  <van-tab title="补肾壮阳">   
      <div class="img5" v-for="(v,i) in  this.$store.getters.arr4" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div></van-tab>
  <van-tab title="前列腺">   
       <div class="img5" v-for="(v,i) in  this.$store.getters.arr5" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div></van-tab>
  <van-tab title="滋阴补肾">   
       <div class="img6" v-for="(v,i) in  this.$store.getters.arr2" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div></van-tab>
</van-tabs>
</div>
  </van-tab>
  <van-tab title="详情" name="b" class="tab2">
    <van-divider>预定流程</van-divider>
  <img v-for="(v,i) in  this.$store.getters.arr" :key="i" :src="v.img" alt="">
  </van-tab>
<div class="content"> <van-tab title="评价" name="c" class="tab3">
    <van-tabs v-model="active" style="border:1rem solid gey;" class="zan">
  <van-tab title="全部（0）"></van-tab>
  <van-tab title="好评（0）"></van-tab>
  <van-tab title="中评（0）"></van-tab>
  <van-tab title="差评（0）"></van-tab>
  <p>暂无评价~</p>
</van-tabs>

  </van-tab></div>
 <div @click="fun()" >  <van-icon name="bars" class="icon" sticky/>  </div>
</van-tabs></div>
<div class="last"> 
     <p @click="funb()">
       <van-icon name="shopping-cart-o" />
       <span>清单列表</span></p>
    <p>咨询医生开药</p>
    </div>
  </div>
</template>
<script>
import {manbing} from "@/api/manbingapi.js"  
// import {mana} from "api/manaapi.js"
export default {
  components:{

  },
  data() {
    return {
      activeName: 'a',
      arr:[]
    };
  },
  mounted() { 
     
      manbing().then((ok)=>{
      console.log(ok)
          this.arr = ok.data.arr2.filter((v,i)=>{
              if(i == this.$route.params.xiao){
                  return v
              }
          })
          console.log(this.arr)
      }),
      this.$store.dispatch("manb")
      this.$store.dispatch("manc")
      this.$store.dispatch("mand")
      this.$store.dispatch("mane")
      this.$store.dispatch("manf")
     
  },
  methods: {
    fun(){
      this.$router.go(-1)
    },
    funb(){
      this.$router.push("/list")}
    
  },
}
</script>

<style scoped>

.img2 .img,.img3 .img,.img4 .img,.img5 .img,.img6 .img{
  width:7.6875rem;
  height: 7.25rem;
  margin-left: 1.25rem;
  margin-bottom: 0.1875rem;
}
.img2 .xuan,.img3 .xuan,.img4 .xuan,.img5 .xuan,.img6 .xuan{
    margin: -5.625rem 0.625rem 0.625rem 10.9375rem;
}

.lie span{
display: block;


}
.lie span:nth-of-type(2){
    color: #e94444;
     font-size: 1rem;
}
.lie span:nth-of-type(3){

font-size: 0.875rem;
    text-decoration: line-through;
        color: #888;
}
.xiangguan p{
    margin-left: 0.875rem;
     border-bottom: 0.0625rem solid #eee;
    padding: 0.625rem;
}
.gengduo{
     border-bottom: 0.9375rem solid #f5f5f5;
    border-top: 0rem solid #f5f5f5;
}
.gengduo p:nth-of-type(1){
    margin-left: 0.625rem;
     border-bottom: 0.0625rem solid #eee;
    padding: 1rem;
}
.gengduo p:nth-of-type(2){
    margin-left: 1.5rem;
     color: #e94444;
     font-size: 0.8125rem;
     padding: 0.625rem;
        border-bottom: 0.0625rem solid #eee;

}
.gengduo p:nth-of-type(3){
    margin-left:0.875rem;
      color: #888;
         
     font-size: 0.875rem;
     padding: 1.25rem;
}
.gengduo .duo{
  width: 5.9375rem;
  height: 5.8125rem;
  margin-left: 2.375rem;
  margin-top:-1.25rem;
}
.gengduo p:nth-of-type(4){
    margin-left: 1.375rem;
margin-top:0.625rem;
     font-size: 0.875rem;
     padding: 0.9375rem;
}
.gengduo p:nth-of-type(5){
    margin-left: 2.375rem;
    color: #888;
     font-size: 0.9375rem;
     margin-top: -0.5rem;
         border-bottom: 0.0625rem solid #eee;
     
}
.gengduo p:nth-of-type(6){
    margin-left: 1.8125rem;

     font-size: 0.9375rem;
    font-weight: bold;
         padding: 0.625rem;
     
}
.gengduo p:nth-of-type(6) span{
color: #e94444;
font-size: 1.0625rem;
font-weight: bold;

}
.haoping{
     border-bottom: 0.9375rem solid #f5f5f5;
    border-top: 0rem solid #f5f5f5;
}
.haoping p:nth-of-type(1){
   margin-left: 1.25rem;
    padding:0.75rem;
     font-size:0.875rem;
}
.haoping p:nth-of-type(2){
  float: right;
    padding: 0.625rem;
    margin: -2.5rem 0rem 0rem 0rem;
    color: #888;
}

.header{
  margin-bottom: 3.3125rem
}
.guige{
   border-bottom: 0.9375rem solid #f5f5f5;
    border-top: 0rem solid #f5f5f5;
    font-size: 0.9375rem;
    margin-left: -0.3125rem;
    padding: 0.625rem 0.625rem 0.625rem 2.3125rem;
}
.ding{
  border-top: 0.9375rem solid #f5f5f5;
  position: relative;
 border-bottom: 0.9375rem solid #f5f5f5;
}
.ding .logo{
  width: 1.875rem;
  height: 1.875rem;
  margin: 0.625rem 0.625rem 0rem  2rem;
}
.ding p:nth-of-type(1){
 color: #e94444;
 display: inline;
position: absolute;
top: 1.0625rem ;
font-size:0.875rem;
}
.ding p:nth-of-type(2){
 margin: 0.625rem 0.625rem 0.625rem  1.9375rem;


font-size: 0.875rem;
}
.ding p:nth-of-type(3){
 margin: -1.4375rem 0.625rem 0.625rem 21.25rem;
font-size: 0.9375rem;


}
.xiang{
  margin: -3.5rem 0rem 0rem 2.5rem;
}
.xiang p:nth-of-type(1){
    width: 0.625rem;
    height:0.625rem;
    background-color: orange;
    color: #fff;
    font-size:0.8125rem;
    text-align: center;
    border-radius: 0.125rem;
    display: inline;
  

}
.xiang p:nth-of-type(2){
margin-left: 0.375rem;
border: 0.0625rem solid gainsboro;

display: inline;
  

}
.xiang p:nth-of-type(3){
margin-left: 0.375rem;

display: inline;
  

}
.xiang p:nth-of-type(4){


display: inline;
  

}
.xiang p:nth-of-type(5){
margin-bottom: 1.25rem;
  font-size: 0.8125rem;

}
.xiang p:nth-of-type(6){
margin:-1.875rem 0.625rem 0.625rem 16.4375rem;
    font-size: 0.8125rem;
    height: 1.25rem;
    text-align: center;
    border: 0.0625rem solid #ddd;
    border-radius: 0.1875rem;
}



.xiang p:nth-of-type(7){
margin-left:-0.0625rem;
font-size: 0.9375rem;
display: inline;
  color: gray;

}
.xiang p:nth-of-type(8) span{
color: #e94444;
font-size: 1.125rem;
font-weight: bold;

}
.xiang p:nth-of-type(9) {
width: 4rem;
border: 0.0625rem solid #e94444;
font-size: 0.9375rem;
color: #e94444;
margin-top:0.9375rem;
margin-bottom: 0.9375rem;
}
.tab3{

       background: #f5f5f5;
       width: 100%;
height: 36.25rem; 
   overflow-y: auto;
    overflow-x: hidden;
}
.tab1{
  overflow-y: auto;
    overflow-x: hidden;
}
.zan p{
  font-size: 0.875rem;
  margin: 12.0625rem 0rem 0rem 9.3125rem;
  color: gray;
}
.van-divider{
  color: #969799;
  background-color: #ebedf0;
  border: 0;
  height: 2.8125rem;
}
.icon{
  position: fixed;
  top: 0.625rem;
 margin: 0.0625rem 0rem 0rem 22.3125rem;
  font-size: 1.25rem;
  z-index: 9999;

}
.last{
    position: fixed;
    bottom: 0;
    width: 100%; 
    
    
}
.last p span{
  display: block;
  margin-top: -2.1875rem;
  font-size: 0.75rem;
}

.last p{
  float: left;
 
  height: 3.25rem;
  text-align: center;
  line-height: 3.25rem;

}
.last p:nth-of-type(1){
  background-color: rgba(255, 255, 255,1);
    width: 60%;
}
.last p:nth-of-type(2){
  float: left;
  width: 40%;
  background-color: rgba(255, 0, 0,.9);
  color: #fff;
 
}
.tab2 img{
  width: 100%;
  /* height: 304px; */
  display: block;
}
.tab2,tab2,tab3{
  overflow-y: auto;
}
.van-button::before{
 border-radius: 0rem;
 background-color: #fff;
}
  .tab1 .my-swipe .van-swipe-item {
    color: #fff;
    line-height: 9.375rem;
    text-align: center;
  }
  .tab1 img{
    width: 80%;
    margin-top: 1rem;
    height: 10.9375rem;
 
  }
.van-tab__text{
    font-size: 1rem;
}
</style>