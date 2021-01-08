<template>
  
    <div class="imglist" @click="fun(id)"> 
      <!-- <router-link :to="{name:'Qiang',params:{xixi:id}}"> -->
      <img :src="imgurl" alt="">
      <div>{{title|sl}}</div>
      <div>{{price}}</div>
      <div>{{small}}</div>
        <!-- </router-link> -->
  </div>

</template>

<script>
export default {
    methods: {
    fun(id){
      console.log(id)
      this.$router.push({name:'Qiang',params:{xixi:id}})
    }
  },
props:{
    imgurl:String,
    title:String,
    price:String,
    small:String,
//  i:Number
id:Number

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
.imglist{
  width: 7.1875rem;
  height: 13.4375rem;
 
}
.imglist div:nth-of-type(1){
  font-size: 0.75rem;
  padding: 0 0.8125rem;
}
.imglist div:nth-of-type(2){
  font-size: 1.0625rem;
  color: #e94544;
  text-align: center;
  padding: 0 0.8125rem;
}
.imglist div:nth-of-type(3){
  font-size: 0.875rem;
      color: #888;
    text-align: center;
    text-decoration: line-through;
    padding:0  0.625rem;
}
.imglist img{
width:6.25rem;
height: 6.25rem;
padding: 0.9375rem;
}

</style>