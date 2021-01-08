<template>
    <div class="img">
      <div class="img1">
       <img :src="imglist" alt="">
      </div>
      <div class="img2">
      <div>{{smalltitle}}</div>
      <div>{{name}}</div>
      <div>
        <span>{{middle}}</span>
      </div>
      <div>
        <p> {{price2}}</p>
        <p>{{ed}}</p>
      </div>
      <van-icon :name="logo" class="last"/>
     </div>
  </div>
</template>

<script>
export default {
props:{
    smalltitle:String,
     name:String,
      middle:String,
       ed:String,
       logo:String,
       imglist:String,
       price2:String,
}
}
</script>

<style scoped>
.img1 img{
    width: 10rem;
    height: 8.4375rem;
    margin: 0.625rem ;
}
.img{
    display: flex;
    justify-content: space-around;
}
.img2{
    margin-top: 0.625rem;
    line-height: 0.625rem;
}
.img2 div:nth-of-type(1){
    width: 3.25rem;
    height: 1rem;
    background-color: orange;
    color: #fff;
    font-size: 0.5625rem;
    text-align: center;
    border-radius: 0.25rem;
    display: inline-block;
    line-height: 1rem;
}
.img2 div:nth-of-type(2){
  display: inline;
    font-size: 0.875rem;
    line-height: 1.4375rem;
 

}
.img2 div:nth-of-type(3){

margin-top: 0.625rem;
 font-size: 0.625rem;
display: block;
}
.img2 div:nth-of-type(3) span{
    display: inline;
    color: red;
border: 0.0625rem solid red;
}
.img2 div:nth-of-type(4){
display: flex;
 font-size: 1rem;
 margin-top: 1.875rem;
}
.img2 div:nth-of-type(4) p:nth-of-type(1){

color: red;
margin-right:1.0625rem;

}
.img2 div:nth-of-type(4) p:nth-of-type(2){

font-size: 0.875rem;
    text-decoration: line-through;
        color: #888;
}
.last{
    width: 1.625rem;
    height: 1.5625rem;
    background-color: red;
    float: right;
    border-radius: 1.25rem;
    margin: -1.125rem 0.625rem 0.625rem 0.625rem;
    text-align: center;
    line-height: 1.5625rem
}
</style>