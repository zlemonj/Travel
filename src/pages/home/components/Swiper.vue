<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <!-- swiper -->
    <!--<swiper :options="swiperOption">-->
      <!--<swiper-slide>Slide 1</swiper-slide>-->
      <!--<swiper-slide>Slide 2</swiper-slide>-->
      <!--<swiper-slide>Slide 3</swiper-slide>-->
      <!--<swiper-slide>Slide 4</swiper-slide>-->
      <!--<swiper-slide>Slide 5</swiper-slide>-->
      <!--<swiper-slide>Slide 6</swiper-slide>-->
      <!--<swiper-slide>Slide 7</swiper-slide>-->
      <!--<swiper-slide>Slide 8</swiper-slide>-->
      <!--<swiper-slide>Slide 9</swiper-slide>-->
      <!--<swiper-slide>Slide 10</swiper-slide>-->
      <!--<div class="swiper-pagination" slot="pagination"></div>-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--</swiper>-->
  </div>
</template>
<script>
  export default {
    name:'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
//          pagination: {
//            el: '.swiper-pagination',
//            clickable: true
//          },
        },
        swiperList:[{
          id:'0001',
          imgUrl:'https://img1.qunarzz.com/qs/1809/2b/f060d9035028da02.jpg'
        },
          {
            id:'0002',
            imgUrl:'https://img1.qunarzz.com/qs/1809/d3/e8f0502ab25dec02.jpg'
          },
          {
          id:'0003',
            imgUrl:'https://img1.qunarzz.com/qs/1808/f1/5237b90429129102.jpg'
          }
        ]
      }

    }
//
//    data() {
//      return {
//        swiperOption: {
//          spaceBetween: 30,
//          centeredSlides: true,
//          autoplay: {
//            delay: 2500,
//            disableOnInteraction: false
//          },
//          pagination: {
//            el: '.swiper-pagination',
//            clickable: true
//          },
//          navigation: {
//            nextEl: '.swiper-button-next',
//            prevEl: '.swiper-button-prev'
//          }
//        }
//      }
//    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
