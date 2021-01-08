<template>
  <div class="mana">
    <div class="header"><van-tabs v-model="activeName" class="manaa" sticky title-style="font-size='3rem'" offset-top="0rem">
  <van-tab title="商品" name="a" class="tab1" >
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
  <van-swipe-item><img :src="v.images" alt="" v-for="(v,i) in  arr" :key="i"></van-swipe-item>
  <van-swipe-item><img :src="v.images" alt="" v-for="(v,i) in  arr" :key="i"></van-swipe-item>
</van-swipe>
<div class="xiang" v-for="(v,i) in  arr" :key="i">
  <p>{{v.smalltitle}}</p>
  <p>{{v.title}}</p>
   <p>{{v.name}}</p>
    <p>{{v.middle}}</p>
    <p>{{v.sm}}</p>
    <p>说明书</p>
    <p>{{v.ed}}</p>
   <p>套餐价：<span>{{v.price}}</span></p>
   <p>{{v.logo}}</p> 
</div>
<div class="ding">
  <img src="logoo.png" alt="" class="logo">
  <p>满78包邮，2-4天达送达</p>
  <p>本商品由叮当商城旗舰店为您服务</p>
  <p><van-icon name="ellipsis" /></p>
</div>
<div class="guige" v-for="(v,i) in  arr" :key="i">
  规格：
{{v.guige}}
</div>
<div class="haoping">
  <p>好评度</p>
  <p>0条评价&gt;</p>
</div>
<div class="gengduo" v-for="(v,i) in  arr" :key="i">
<p>【更多优惠搭配】</p>
<p>套餐一</p>
<p>{{v.yongtu}}</p>
<img :src="v.images" alt="" class="duo">
<p>{{v.middle}}</p>
<p>{{v.pr}}</p>
 <p>套餐价：<span>{{v.price}}</span></p>
</div>
<div class="xiangguan">
  <p>相关商品</p>
  <van-tabs v-model="active" class="lie" >
  <van-tab title="精选" class="img2" >
    <div class="img3" v-for="(v,i) in  this.$store.getters.arr2" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div>
    </van-tab>
  <van-tab title="性功能障碍" class="xing">  
    <div class="img4" v-for="(v,i) in  this.$store.getters.arr3" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div></van-tab>
  <van-tab title="补肾壮阳">   
      <div class="img5" v-for="(v,i) in  this.$store.getters.arr4" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div></van-tab>
  <van-tab title="前列腺">   
       <div class="img5" v-for="(v,i) in  this.$store.getters.arr5" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div></van-tab>
  <van-tab title="滋阴补肾">   
       <div class="img6" v-for="(v,i) in  this.$store.getters.arr2" :key="i"> 
       <img :src="v.images" alt="" class="img" >
       <div class="xuan">    
         <span class="p1">{{v.title}}</span>
       <span class="p1">{{v.price}}</span>
       <span class="p1">{{v.small}}</span>
       </div>
      </div></van-tab>
</van-tabs>
</div>
  </van-tab>
  <van-tab title="详情" name="b" class="tab2">
    <van-divider>预定流程</van-divider>
  <img v-for="(v,i) in  this.$store.getters.arr" :key="i" :src="v.img" alt="">
  </van-tab>
<div class="content"> <van-tab title="评价" name="c" class="tab3">
    <van-tabs v-model="active" style="border:1rem solid gey;" class="zan">
  <van-tab title="全部（0）"></van-tab>
  <van-tab title="好评（0）"></van-tab>
  <van-tab title="中评（0）"></van-tab>
  <van-tab title="差评（0）"></van-tab>
  <p>暂无评价~</p>
</van-tabs>

  </van-tab></div>
 <div @click="fun()" >  <van-icon name="bars" class="icon" sticky/>  </div>
</van-tabs></div>
<div class="last"> 
    <p class="fen">
      <van-icon name="share-o" />
         <span @click="showShare=true">
               
             分享
             </span>
        <van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
/>
    </p>
     <p @click="funb()">
       <van-icon name="shopping-cart-o" />
       <span>清单列表</span></p>
    <p>
     <span @click="show=true" class="tian">  
          添加清单
         </span>
  <van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :quota="quota"
  :quota-used="quotaUsed"
  :hide-stock="sku.hide_stock"
  :custom-stepper-config="customStepperConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
        
    </p>
    </div>
  </div>
</template>

<script>
import {homeone} from "@/api/homeapi.js"  
export default { 
     components:{

  },
  data() {
    return {
         showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],
      activeName: 'a',
      arr:[] ,
      show: false,
     sku: {
  tree: [
    {
      k: '颜色', // skuKeyName：规格类目名称
      k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      v: [
      ],
      largeImageMode: true, //  是否展示大图模式
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  price: '48.00', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false,
  hide_stock: false // 是否隐藏剩余库存
  
},
  goods: {
  // 默认商品 sku 缩略图
  picture: 'miao3.jpg'
},customStepperConfig: {
  // 自定义限购文案
  quotaText: '每次限购xxx件',
  // 自定义步进器超过限制时的回调
  handleOverLimit: (data) => {
    const { action, limitType, quota, quotaUsed, startSaleNum } = data;

    if (action === 'minus') {
      Toast(startSaleNum > 1  ? `${startSaleNum}件起售` : '至少选择一件商品');
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = `单次限购${quota}件`;
        if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
        Toast(msg);
      } else {
        Toast('库存不够了');
      }
    }
  },
  // 步进器变化的回调
  handleStepperChange: currentValue => {},
  // 库存
  stockNum: 1999,
  // 格式化库存
  stockFormatter: stockNum => {},
},
 messageConfig: {
  // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
  uploadImg: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('miao3.jpg'), 1000);
    });
  },
  // 最大上传体积 (MB)
  uploadMaxSize: 3,
  // placeholder 配置
  placeholderMap: {
    text: 'xxx',
    tel: 'xxx',
   
  }
},skuData: {
  // 商品 id
  goodsId: '946755',
  // 选择的商品数量
  selectedNum: 1,
  // 选择的 sku 组合
  selectedSkuComb: {
    id: 2257,
    price: 100,
    s1: '30349',
    s2: '1193',
    s3: '0',
    stock_num: 111,
    property_price: 1
  },
}
    }
    
  },
  mounted() { 
     
      homeone().then((ok)=>{
      console.log(this.$route.params.xixi)
          this.arr= ok.data.imglist.filter((v,id)=>{
              if(id== this.$route.params.xixi){
                  return v
              }
          })
          console.log(this.arr)
      }),
      this.$store.dispatch("manb")
      this.$store.dispatch("manc")
      this.$store.dispatch("mand")
      this.$store.dispatch("mane")
      this.$store.dispatch("manf")
},
  methods: {
    fun(){
      this.$router.go(-1)
    },
    funb(){
      this.$router.push("/list")}
    
  },

}
</script>

<style scoped>
.last .fen{
       
    /* margin-top: 1.25rem; */
    width:30%;
    
     background-color: rgb(255, 255, 255);
}
.last .fen span{
    display: block;
    font-size: 0.8125rem;
      margin-top: -2.3125rem;
}
.last p .tian{
    display: inline;
    font-size: 1rem;
    margin-top: 1.25rem;
}
.img2 .img,.img3 .img,.img4 .img,.img5 .img,.img6 .img{
  width:7.6875rem;
  height: 7.25rem;
  margin-left: 1.25rem;
  margin-bottom: 0.1875rem;
}
.img2 .xuan,.img3 .xuan,.img4 .xuan,.img5 .xuan,.img6 .xuan{
    margin: -5.625rem 0.625rem 0.625rem 10.9375rem;
}

.lie span{
display: block;


}
.lie span:nth-of-type(2){
    color: #e94444;
     font-size: 1rem;
}
.lie span:nth-of-type(3){

font-size: 0.875rem;
    text-decoration: line-through;
        color: #888;
}
.xiangguan p{
    margin-left: 0.875rem;
     border-bottom: 0.0625rem solid #eee;
    padding: 0.625rem;
}
.gengduo{
     border-bottom: 0.9375rem solid #f5f5f5;
    border-top: 0rem solid #f5f5f5;
}
.gengduo p:nth-of-type(1){
    margin-left: 0.625rem;
     border-bottom: 0.0625rem solid #eee;
    padding: 1rem;
}
.gengduo p:nth-of-type(2){
    margin-left: 1.5rem;
     color: #e94444;
     font-size: 0.8125rem;
     padding: 0.625rem;
        border-bottom: 0.0625rem solid #eee;

}
.gengduo p:nth-of-type(3){
    margin-left:0.875rem;
      color: #888;
         
     font-size: 0.875rem;
     padding: 1.25rem;
}
.gengduo .duo{
  width: 5.9375rem;
  height: 5.8125rem;
  margin-left: 2.375rem;
  margin-top:-1.25rem;
}
.gengduo p:nth-of-type(4){
    margin-left: 1.375rem;
margin-top:0.625rem;
     font-size: 0.875rem;
     padding: 0.9375rem;
}
.gengduo p:nth-of-type(5){
    margin-left: 2.375rem;
    color: #888;
     font-size: 0.9375rem;
     margin-top: -0.5rem;
         border-bottom: 0.0625rem solid #eee;
     
}
.gengduo p:nth-of-type(6){
    margin-left: 1.8125rem;

     font-size: 0.9375rem;
    font-weight: bold;
         padding: 0.625rem;
     
}
.gengduo p:nth-of-type(6) span{
color: #e94444;
font-size: 1.0625rem;
font-weight: bold;

}
.haoping{
     border-bottom: 0.9375rem solid #f5f5f5;
    border-top: 0rem solid #f5f5f5;
}
.haoping p:nth-of-type(1){
   margin-left: 1.25rem;
    padding:0.75rem;
     font-size:0.875rem;
}
.haoping p:nth-of-type(2){
  float: right;
    padding: 0.625rem;
    margin: -2.5rem 0rem 0rem 0rem;
    color: #888;
}

.header{
  margin-bottom: 3.3125rem
}
.guige{
   border-bottom: 0.9375rem solid #f5f5f5;
    border-top: 0rem solid #f5f5f5;
    font-size: 0.9375rem;
    margin-left: -0.3125rem;
    padding: 0.625rem 0.625rem 0.625rem 2.3125rem;
}
.ding{
  border-top: 0.9375rem solid #f5f5f5;
  position: relative;
 border-bottom: 0.9375rem solid #f5f5f5;
}
.ding .logo{
  width: 1.875rem;
  height: 1.875rem;
  margin: 0.625rem 0.625rem 0rem  2rem;
}
.ding p:nth-of-type(1){
 color: #e94444;
 display: inline;
position: absolute;
top: 1.0625rem ;
font-size:0.875rem;
}
.ding p:nth-of-type(2){
 margin: 0.625rem 0.625rem 0.625rem  1.9375rem;


font-size: 0.875rem;
}
.ding p:nth-of-type(3){
 margin: -1.4375rem 0.625rem 0.625rem 21.25rem;
font-size: 0.9375rem;


}
.xiang{
  margin: -3.5rem 0rem 0rem 2.5rem;
}
.xiang p:nth-of-type(1){
    width: 0.625rem;
    height:0.625rem;
    background-color: orange;
    color: #fff;
    font-size:0.8125rem;
    text-align: center;
    border-radius: 0.125rem;
    display: inline;
  

}
.xiang p:nth-of-type(2){
margin-left: 0.375rem;
border: 0.0625rem solid gainsboro;

display: inline;
  

}
.xiang p:nth-of-type(3){
margin-left: 0.375rem;

display: inline;
  

}
.xiang p:nth-of-type(4){


display: inline;
  

}
.xiang p:nth-of-type(5){
margin-bottom: 1.25rem;
  font-size: 0.8125rem;

}
.xiang p:nth-of-type(6){
margin:-1.875rem 0.625rem 0.625rem 16.4375rem;
    font-size: 0.8125rem;
    height: 1.25rem;
    text-align: center;
    border: 0.0625rem solid #ddd;
    border-radius: 0.1875rem;
}



.xiang p:nth-of-type(7){
margin-left:-0.0625rem;
font-size: 0.9375rem;
display: inline;
  color: gray;

}
.xiang p:nth-of-type(8) span{
color: #e94444;
font-size: 1.125rem;
font-weight: bold;

}
.xiang p:nth-of-type(9) {
width: 4rem;
border: 0.0625rem solid #e94444;
font-size: 0.9375rem;
color: #e94444;
margin-top:0.9375rem;
margin-bottom: 0.9375rem;
}
.tab3{

       background: #f5f5f5;
       width: 100%;
height: 36.25rem; 
   overflow-y: auto;
    overflow-x: hidden;
}
.tab1{
  overflow-y: auto;
    overflow-x: hidden;
}
.zan p{
  font-size: 0.875rem;
  margin: 12.0625rem 0rem 0rem 9.3125rem;
  color: gray;
}
.van-divider{
  color: #969799;
  background-color: #ebedf0;
  border: 0;
  height: 2.8125rem;
}
.icon{
  position: fixed;
  top: 0.625rem;
 margin: 0.0625rem 0rem 0rem 22.3125rem;
  font-size: 1.25rem;
  z-index: 9999;

}
.last{
    position: fixed;
    bottom: 0;
    width: 100%; 
    z-index: 9999;
    display: flex;
 justify-content: space-around;
}
.last p span{
  display: block;
  margin-top: -2.1875rem;
  font-size: 0.75rem;
}

.last p{
  float: left;
 
  height: 3.25rem;
  text-align: center;
  line-height: 3.25rem;

}
.last p:nth-of-type(2){
  background-color: rgb(255, 255, 255);
    width: 30%;
}
.last p:nth-of-type(3){
  float: left;
  width: 40%;
  background-color: rgba(255, 0, 0,.9);
  color: #fff;
 
}
.tab2 img{
  width: 100%;
  /* height: 304px; */
  display: block;
}
.tab2,tab2,tab3{
  overflow-y: auto;
}
.van-button::before{
 border-radius: 0rem;
 background-color: #fff;
}
  .tab1 .my-swipe .van-swipe-item {
    color: #fff;
    line-height: 9.375rem;
    text-align: center;
  }
  .tab1 img{
    width: 80%;
    margin-top: 1rem;
    height: 10.9375rem;
 
  }
.van-tab__text{
    font-size: 1rem;
}
</style>