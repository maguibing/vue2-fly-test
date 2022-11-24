<template>
  <div class="home">
    <router-link to="/login">去往登录页</router-link>
  </div>
</template>

<script>
import '@/assets/styles/home.css'
export default {
  name: "Home",
  data () {
    return {
      swiperOption: {
        // autoplay: true,
        direction: "horizontal", // 水平切换选项
        loop: true, // 循环模式选项
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      slideList: [
        { url: require('../assets/images/wenwu1.png') },
        { url: require('../assets/images/wenwu2.png') },
      ]
    }
  }
}
</script>

<!-- <div class="slide-wrap">  轮播图
    <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in slideList" :key="index">
        <img :src="item.url" class="fill" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
    </swiper>
</div> -->