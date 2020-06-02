<!--  -->
<template>
  <div class="page">
    <div class="index">
      <div class="container">
        <div class="swiper-box">
          <div class="nav-menu">
            <ul class="menu-wrap">
              <li class="menu-item">
                <a href="javascript:;">手机 电话卡</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" :key="i">
                    <li v-for="(sub,j) in item" :key="j">
                      <a :href="'/#/product/' + sub.id">
                        <img :src="sub ? sub.img : require('../assets/imgs/item-box-1.png')">
                        {{sub ? sub.name : '小米CC9'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">电视 盒子</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">笔记本 平板</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">家电 插线板</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">出行 穿戴</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">智能 路由器</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">电源 配件</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">生活 箱包</a>
              </li>
            </ul>
          </div>
          <swiper :options="swiperOption">
            <!-- <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
              <a v-bind:href="'/#/product/'+item.id">
                <img v-bind:src="item.img">
              </a>
            </swiper-slide> -->
            <swiper-slide>
              <a>
                <img src="../assets/imgs/slider/slide-1.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a>
                <img src="../assets/imgs/slider/slide-2.jpg">
              </a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="ads-box">
          <a :href="'/#/product/'+item.id" v-for="(item, i) in adsList" :key="i">
            <img :src="item.img">
          </a>
        </div>
        <div class="banner">
          <a>
            <img src="../assets/imgs/banner-1.png">
          </a>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'navIndex',
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay:true, // 自动轮播
        loop:true, // 最后一个翻页，到第一个（环路）
        effect:'cube', // 切换效果：立方体
        cubeEffect: {
          slideShadows: false,
          shadow: false,
        },
        pagination: { // 分页
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: { // 翻页器
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList:[ // banner拿不到img
        {
          id:'42',
          img:'../assets/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-1.jpg'
        }
      ],
      menuList: [
        [{
            id: 30,
            // img: '../assets/img/item-box-1.png',
            img: require('../assets/imgs/item-box-1.png'),
            name: '小米CC9'
          },{
            id: 32,
            img: require('../assets/imgs/item-box-2.png'),
            name: '小米8青春版'
          },{
            id: 34,
            img: require('../assets/imgs/item-box-3.jpg'),
            name: 'Readmi K20 Pro'
          },{
            id: 34,
            img: require('../assets/imgs/item-box-4.jpg'),
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: require('../assets/imgs/ads/ads-1.png')
        },
        {
          id: 48,
          img: require('../assets/imgs/ads/ads-2.jpg')
        },
        {
          id: 45,
          img: require('../assets/imgs/ads/ads-3.png')
        },
        {
          id: 47,
          img: require('../assets/imgs/ads/ads-4.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
// .page {
//   overflow: hidden; // 不能滚动是为啥
// }
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      // opacity: .7; 不用opacity设置，会把字体也设置透明的
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            // display: block;
            position: relative;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
          }
          &:after {
            position: absolute;
            right: 30px;
            padding-top: 30px;
            content: ' ';
            @include bgImg(10px, 15px, '../assets/imgs/icon-arrow.png')
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            position: absolute;
            width: 962px;
            height: 451px;
            left: 264px;
            top: 0;
            background-color: $colorG;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between; // 两边对齐
              height: 75px; // 451/6, 即每行75px
              li {
                width: 25%; // 962/4=241px, 或者用25%, 或者flex：1
                height: 75px; // 451/6, 即每行75px
                line-height: 75px;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle; // 设置图片居中
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img{
          width:100%;
          height:100%;
        }
    }
  }
  .ads-box {
    @include flex();
    // display: flex;
    // justify-content: space-between; // 公共样式felx
    height: 167px;
    margin-top: 14px;
    margin-bottom: 31px;
    a {  
      img {
        width: 296px;
        height: 167px;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    img {
      width: 1226px;
      height: 130px;
    }

  }
}

</style>
