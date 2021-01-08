<template>
  <div class="list">
    <div class="listb">
      <p>清单列表</p>
    </div>
    <div class="lista">
      <img src="list1.png" alt="">
      <p>亲，这里空空的耶，快去挑选吧~</p>
    </div>
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
    <Bottombar/>
  </div>
</template>

<script>
import  Bottombar from "com/bottombar.vue"
export default {
  components:{
    Bottombar
  },
  mounted() {
       this.$store.dispatch("list")
  },
}
</script>

<style scoped>
body,html,.list{
  background-color: #efeff4;
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
border: 0.0625rem solid red;
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
  width: 10.6875rem;
  height: 9.9375rem;
}
.lista{

   background-color: #fff;
   height: 22.8125rem;
}
.lista img{
  width: 7.125rem;
  height: 7.4375rem;
  margin: 8.6875rem 0rem 0rem 9.125rem;
}
.lista p{
margin: 1.625rem 0rem 0.375rem 7.0625rem;
      color: #888;
      font-size:0.75rem;
       background-color: #fff;
}
.listb p{
      font-size: 1.125rem;
    line-height: 1.25rem;
    color: #333;
    text-align: center;
    font-weight: 400;
    padding: 0.625rem;
}
.listb{
  width: 100%;
position: fixed;
background-color: #fff;
border-bottom: 0.0625rem solid #cbcbcb;
z-index: 999;
   
}
.listc{
      width: 100%;
    background-color: #efeff4;
}
.listc img{
  width: 100%;
}
</style>