<template>
  <div class="no">
      <img src="no.jpg" alt="">
      <p>咦~页面不见了</p>
      <a @click="fun()">返回首页</a>
  </div>
</template>

<script>
export default {
methods: {
    fun(){
        this.$router.push("/")
    }
},
}
</script>

<style scoped>
img{
    width: 15.625rem;
    height:13.125rem;
    background-color: #fff;
}
body,html{
    width: 100%;
    height: 100%;
     background-color: gainsboro;
}
.no{
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  
    
}
.no p{
      font-size: 1.5rem;
}
a{
   font-size: 1.5625rem;
   color: blue;
   cursor: pointer;
}
</style>