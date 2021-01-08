<template>
    <div class="img">
      <router-link :to="{name:'Mana',params:{xiao:i}}">
        <div class="img1">  
        <img :src="img" alt=""></div>
      <div class="img2">
       <div>{{smalltitle}}</div>
       <div>{{title}}</div>
       <div>{{name}}</div>
       <div>{{middle}}</div>
       <div>{{sm|sll}}</div>
       <div>{{ed}}</div>
       <div><p> {{price}}</p>
          <p>{{priced}}</p>
           </div>
      
       <div>{{logo}}</div>
       <div>{{logoa}}</div></div>
         </router-link>
  </div>
</template>

<script>
// import {manbing} from "api/manbingapi.js"
export default {
  methods: {
    funa(i){
      this.$router.push({name:'Mana',params:{xiao:i}})
    }
  },
props:{
    img:String,
    title:String,
    price:String,
      name:String,
    priced:String,
    ed:String,
    logo:String,
      smalltitle:String,
    middle:String,
    sm:String,
    logoa:String,
    i:Number
},
  filters:{
    "sll"(val){
      if(val.length>8){
        return val.substr(0,8)+"..."
      }else{
        return val
      }
    }
  }
}

</script>

<style scoped>
.img1 img{
    width: 7.0625rem;
    height: 6.9375rem;
       position: relative;
margin-right: 0.625rem;
   padding-left:0.625rem ;
}
.img1{
     width:4.375rem;
    height:3.75rem;
   display: inline;
}
.img{
    display: flex;
    justify-content: space-around;
      margin-top: 0.9375rem;
      width: 17.0625rem;
      height: 10.5rem;
      border-bottom: 0.125rem solid gainsboro; 
}
.img2{
margin: -6.875rem 0rem 0rem 8.5625rem; 
width: 9.8125rem;
}
.img2 div:nth-of-type(1){
    width: 1.875rem;
    height: 0.625rem;
    background-color: orange;
    color: #fff;
    font-size: 0.875rem;
    text-align: center;
    border-radius:0.1875rem;
    display: inline;
}
.img2 div:nth-of-type(2){
  display: inline;
    font-size:0.875rem;
}
.img2 div:nth-of-type(3){
 font-size: 0.875rem;
display: inline;
}
.img2 div:nth-of-type(3) span{
    display: inline;
    color: red;
border: 0.0625rem solid red;
}
.img2 div:nth-of-type(4){
display: inline;

  font-size:0.875rem;

}
.img2 div:nth-of-type(5){
display: inline;
 font-size: 0.875rem;


}
.img2 div:nth-of-type(6){

 font-size: 0.9375rem;

}
.img2 div:nth-of-type(7){
display: flex;
 font-size: 0.875rem;
 

}
.img2 div:nth-of-type(7) p:nth-of-type(1){
font-size: 1.0625rem;
font-weight: bold;
color: red;
margin-right: 0.625rem;

}
.img2 div:nth-of-type(7) p:nth-of-type(2){

font-size: 0.875rem;
    text-decoration: line-through;
        color: #888;
        margin-top: 0.125rem;
}
.img2 div:nth-of-type(8){
position: absolute;
 font-size: 0.875rem;
 
  margin: 1.75rem 0rem 0rem -7.875rem;
      color: red;
border: 0.0625rem solid red;
   display: inline;

}
.img2 div:nth-of-type(9){


  position: absolute;
  font-size: 0.875rem;

  margin: 1.75rem 0rem 0rem -3.625rem;
      color: red;
border: 0.0625rem solid red;
   display: inline;

}
</style>