<template>
    <div class="imgb">
    <Bz v-for="(v,i) in homedata" :key="i" :imglist="v.img" :smalltitle="v.smalltitle" :name="v.name" :middle="v.middle" :price2="v.price2" :ed="v.ed" :logo="v.logo"/>
  </div>
</template>

<script>
import Bz from "./homebzi.vue"
export default {
 props:{
        homedata:Array
    },
    components:{
        Bz
    }

}
</script>

<style scoped>


</style>