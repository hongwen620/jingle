<template>
  <div class="bottombar">
      <router-link to="/">
      <img src="home.jpg" alt="" @click="home()" class="home">
      <span class="home1">叮当商城</span>
      </router-link>
      <router-link to="/list">
       <img src="list.jpg" alt="" @click="list()" class="list2">
      <span class="list1">清单列表</span>
      </router-link>
      <router-link to="/me">
      <img src="me.jpg" alt="" @click="me()" class="me2">
      <span class="me1">我的</span>
      </router-link>
  </div>
</template>

<script>

export default {
    methods: {
        home(){
            document.querySelectorAll(".home")[0].src = "homered.jpg"
             document.querySelectorAll(".home1")[0].style.color = "red"
        },
         list(){
             document.querySelectorAll(".list2")[0].src = "listred.jpg"
             document.querySelectorAll(".list1")[0].style.color = "red"
        },
            me(){
            document.querySelectorAll(".me2")[0].src = "mered.jpg"
             document.querySelectorAll(".me1")[0].style.color = "red"
        }
    },
}
</script>

<style scoped>
.router-link-exact-active span{
    color: #e5262a;
}
.router-link-exact-active img{
color: #e5262a;
}
.bottombar{
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    z-index: 9999;
    background-color: #fff;
    border-top: 0.0625rem solid #d9d9d9;
    border-bottom: 0.0625rem solid #d9d9d9; 
    text-align: center;  
    color: #7f8389; 
 
}
a{
    text-decoration: none;
   
}
.bottombar img{
       height: 1.5625rem;
   margin-top:0.375rem;
    padding-top: 0rem;

}
.bottombar span{
    display: block;
    font-size: 0.9375rem;
    transform: scale(.83);
    border-bottom: 0;
     color: #7f8389;
         margin-bottom: 0.5rem;

}
</style>