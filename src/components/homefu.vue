<template>

  <div class="imgl" >
    
 <Hz v-for="(v,i) in slidedata" :key="i" :imgurl="v.images" :title="v.title" :small="v.small" :price="v.price" :id="v.id"/>
  </div>




</template>

<script>
import Hz from "./homezi"
export default {
    props:{
        slidedata:Array,
        
    },
    components:{
        Hz
    } 
}   
</script>

<style scoped>
.imgl{
  display: flex;
  overflow-x: auto;
  text-align: center;
}

</style>