<template>
  <div class="me">
     <div class="mea">
       <img src="me1.png" alt="">
       <p class="number">17393185073</p>
       <p>未绑定</p>
       <p><span>药师咨询</span>
         </p>
       <div class="mea1">
         <span>普通会员</span>
         <span>叮当币：66&nbsp;&gt;</span>
       </div>
     </div>
     <div class="meb">
       <div class="meb1">
         <p>我的订单</p>
         <p>查看全部订单&nbsp;&gt;</p>
       </div>
   <ul class="wode">
    <li v-for="(v,i) in this.$store.getters.arra" :key="i">
       <img :src="v.img" alt="">
       <p>{{v.title}}</p>
    </li>
   </ul>
<div class="mec">
  <div class="mec1">  <span>常用工具</span></div>
 <ul class="changyong" @click="fun()">
    <li v-for="(s,a) in this.$store.getters.arrb" :key="a">
       <img :src="s.img" alt="">
       <p>{{s.title}}</p>
    </li>
  
   </ul>

</div>
<div class="content">
      <div class="listc"> <img src="list.png" alt="">  </div>
    <div class="content">  
       <div class="listd" v-for="(v,i) in  this.$store.getters.list1" :key="i">
        <img :src="v.img" alt="">
       <div>{{v.smalltitle}}</div>
       <div>{{v.name}}</div>
       <div> 
         <span>{{v.middle}}</span></div>
       <div>
        <p> {{v.price2}}</p>
        <p>{{v.ed}}</p>
       </div>
       <van-icon :name="v.logo" class="last"/>
     </div>
    </div>
</div>
     </div>
 <Bottombar/>
  </div>
</template>

<script>
import  Bottombar from "com/bottombar.vue"
export default {
  
props:{
id:Number

},
  components:{
    Bottombar
  },
  mounted() {
  this.$store.dispatch("me")
  this.$store.dispatch("list")
  },
   methods: {
    // fun(id){
    //   console.log(id)
    //   this.$router.push({name:'Dizhi',params:{dz:id}})
    // }
    fun(){
      this.$router.push("/dizhi")
    }
  },

}
</script>

<style scoped>
.listc img{
  width: 100%;
} 
.listd{
  margin: 0.3125rem 0rem 0rem 0rem;
  width: 40.8%;
  height: 18.4375rem;
    padding: 0.625rem;
    background-color: #fff;
    margin-bottom: 0.625rem;
    position: relative;
    padding: 0.9375rem;
 
    
}
.listd div:nth-of-type(1){
   width: 0.625rem;
    height:0.625rem;
    background-color: orange;
    color: #fff;
    font-size:0.8125rem;
    text-align: center;
    border-radius: 0.125rem;
    display: inline;
}
.listd div:nth-of-type(2){
margin-left: 0.375rem;
font-size: 0.8125rem;

display: inline;
}
.listd div:nth-of-type(3){
font-size: 0.875rem;
/* margin-left: 0.375rem; */


}
.listd div:nth-of-type(3) span{
    display: inline;
    color: red;
border: 1.12px solid red;
}
.listd div:nth-of-type(4){

display: inline;
}
.listd div:nth-of-type(4) p:nth-of-type(1){

color: red;
margin-right: 0.625rem;

}
.last{
    width: 1.625rem;
    height: 1.5625rem;
    background-color: red;
    float: right;
    border-radius: 1.25rem;
    margin: -1.4375rem 0.625rem 0.625rem 0.625rem;
    text-align: center;
    line-height: 1.5625rem
}
.listd div:nth-of-type(4) p:nth-of-type(2){

font-size: 0.8125rem;
    text-decoration: line-through;
        color: #888;
}
.content{
display: flex;
justify-content: space-between;
flex-wrap: wrap;
     background-color: #efeff4;
     margin-bottom: 4.0625rem;
}
.listd img{
  width: 9.6875rem;
  height: 9.9375rem;
}
.meb .wode{
  display: flex;
  justify-content: space-around;
  padding: 0.625rem;
  text-align: center;
    border-bottom: 0.875rem solid #eee;
   
}
.changyong{
    display: flex;
  padding: 0.625rem;

    border-bottom: 0.875rem solid #eee;
    flex-wrap: wrap;
}
.changyong li{
  width: 3.5rem;
  margin-left: 1.8125rem;
  margin-bottom: 0.625rem;
}
.meb .wode img{
  width: 0.9375rem;
  height: 0.9375rem;
}
.changyong img{
    width: 1.25rem;
  height: 1.25rem;
}

.meb .wode p,.changyong p{
  font-size:0.8125rem;
  
}
.changyong p{
  margin-left: -0.625rem;
}
.meb1 p:nth-of-type(1),.mec1 span{
      font-size: 0.9375rem;
    color: #333;
    font-weight: bold;
    margin-left: 1.125rem
    
}
.meb1,.mec1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 2.8125rem;
  height: 2.8125rem;
  border-bottom:0.0625rem solid #eee;
  background-color: #fff;
 

}
.meb1 p:nth-of-type(2){
      font-size: 0.8125rem;
    color: #8e8e93;
    font-weight: 400;
     margin-right: 0.625rem;
}
.me{
      background: #efeff4;
      width: 100%;
      height: 100%;
}
.meb{
  width: 100%;
  height: 5rem;
    background-color: #fff
}
.mea{
  width: 100%;
  height: 9.6875rem;
  background: linear-gradient(90deg,#ed7a7a,#e94544);
  position: relative;
}
.mea img{
  width: 3.75rem;
  height: 3.75rem;
  border-radius:3.125rem;
  margin: 1.625rem 0rem 0rem 1.5625rem;
}
.mea .number{
      color: #fff;
   font-size: 1rem;
    line-height: 2.25rem;
   margin: -3.6875rem 0rem 0rem 5.9375rem;
}
.mea p:nth-of-type(2){
      color: #fff;
    font-size: 1rem;
    line-height: 2.25rem;
    margin: -0.75rem 0rem 0rem 5.9375rem;
}
.mea p:nth-of-type(3){
  width: 6.5rem;
  height: 2.25rem;
   margin: -3rem 0rem 0rem 16.875rem;
        background-color: rgba(0,0,0,.08);
        text-align: center;
        line-height: 2.25rem;
        border-top-left-radius: 0.9375rem;
          border-bottom-left-radius: 0.9375rem;
}
.mea p:nth-of-type(3) span{
      color: #fff;
    font-size: 1rem;
    line-height:2.25rem;

}
.mea1{
    background: linear-gradient(90deg,#5b5655,#251f1f);
    height: 3.125rem;
    position: absolute;
    bottom: 0;
    left: 1.125rem;
    width: 21.125rem;
    border-top-left-radius:0.625rem;
    border-top-right-radius: 0.625rem;
    display: flex;
    justify-content: space-between;
}
.mea1 span{
  line-height: 3.25rem;
  color: #cbb579;
      font-size: 0.8125rem;
      font-weight: 700;
}
.mea1 span:nth-of-type(1){
  margin-left: 0.625rem;
}
.mea1 span:nth-of-type(2){
  margin-right: 0.625rem
}
</style>