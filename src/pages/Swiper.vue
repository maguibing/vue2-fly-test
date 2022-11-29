<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import '@/assets/styles/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: "Swiper",
  components: {
    swiper, swiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      //   slideList: [
      //     { url: require('../assets/images/wenwu1.png') },
      //     { url: require('../assets/images/wenwu2.png') },
      //   ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted () {
    // current swiper instance
    // this.swiper.slideTo(3, 1000, false);
    console.log("this is current swiper instance object", this.swiper);
  }
}
</script>