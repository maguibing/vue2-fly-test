<template>
  <div class="home">
    <!-- xshell 宝塔面板 -->
    <!-- yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec -->

    <!-- <div class="slide-wrap">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in slideList" :key="index">
          <img :src="item.url" class="fill" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      </swiper>
    </div> -->

    {{songList}}

  </div>
</template>

<script>
import '@/assets/styles/home.css'
export default {
  name: "Home",
  data () {
    return {
      songList: null,
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
  },
  created () {
    this.getHotSongs()
  },

  methods: {
    getHotSongs () {
      this.$axios.get(`/related/playlist?id=1`).then(res => {
        this.songList = res.data.playlists
      })
    }
  }
}
</script>