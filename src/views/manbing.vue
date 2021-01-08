<template>
  <div class="man">
      <ul class="man1">
        <li v-for="(v,i) in arr" :key="i">
          <img :src="v.img" alt="">
        </li>
      </ul>
      <div class="man2">
    <van-tabs v-model="active" class="nan">
  <van-tab title="男科用药" class="nan"></van-tab>
  <van-tab title="男科用药"></van-tab>
</van-tabs>
      </div>
<div class="man3">
  <div class="man3a">  
    <van-sidebar v-model="activeKey" v-for="(a,l) in arr1" :key="l" class="man3aa">
  <van-sidebar-item :title="a.title"/>
</van-sidebar></div>
<div class="man3b">
  <img src="man5.jpg" alt="" class="man3ba">
  <div class="man4">
    <!-- <router-link :to="{name:'Manbing',params:{xiaoming:i}}"> -->
      <Mz v-for="(v,i) in arr2" :key="i" :i="i" :img="v.img" :smalltitle="v.smalltitle" :titlel="v.title" :name="v.name" :middle="v.middle" :sm="v.sm" :ed="v.ed" :price="v.price" :priced="v.priced" :small="v.small" :logo="v.logo" :logoa="v.logoa" />
      
    <!-- </router-link> -->

</div>
</div>

</div>

  </div>
</template>

<script>
import Mz from "com/manzi.vue"
import {manbing} from "api/manbingapi.js"
export default {
  // methods: {
  //   funa(i){
  //     this.$router.push({name:'Manbing',params:{xiaoming:i}})
  //   }
  // },
   components:{
   Mz
  },
data() {
  return {
    arr:[],
    arr1:[],
    arr2:[],
     active: 2,
         activeKey: 0,
  }
},
  mounted() {
      manbing().then((ok)=>{
    console.log(ok.data.arr2)
    this.arr=ok.data.arr;
 this.arr1=ok.data.arr1;
  this.arr2=ok.data.arr2;
})
  },
}
</script>

<style scoped>

.man3a,.man2{
    position: sticky;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999;
}
.man{
   z-index: 99999;
}
.van-tabs__nav--line{
      padding-bottom: 1.1875rem;
}
.nan {
  padding-left: 0.625rem;
}
.man3{
  display: flex;
  justify-content: space-between;
}
.man3 .man3ba{
  width:18rem;
  height: 7.8125rem;
}
.van-sticky{
  position: sticky;
}
.van-sidebar-item__text{
  font-size:0.75rem;
}
.man1 img{
  width: 100%;
  display: block;
}
.van-tab .van-tab__text{
  color: red;
  font-size:0.9375rem;
}
.van-sidebar-item--select::before{
  background-color: #fff;
}
</style>