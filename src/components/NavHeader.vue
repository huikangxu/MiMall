<!--  -->
<template>
  <div>
    <div class="nav-topbar">
      <div class="container">
        <div class="nav-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="nav-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index/"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" :key="index" v-for="(item, index) in phoneList">
                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <!-- <img v-lazy="'../assets/imgs/nav-img/nav-3-1.jpg'" alt=""> -->
                      <img src="../assets/imgs/nav-img/nav-3-1.jpg">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="../assets/imgs/nav-img/nav-3-2.jpg">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="../assets/imgs/nav-img/nav-3-3.png">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <!-- <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt=""> -->
                      <img src="../assets/imgs/nav-img/nav-3-4.jpg">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <!-- <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt=""> -->
                      <img src="../assets/imgs/nav-img/nav-3-5.jpg">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <!-- <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt=""> -->
                      <img src="../assets/imgs/nav-img/nav-3-6.png">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      username: '',
      phoneList: []
    }
  },
  filters:{
      currency(val){
        if(!val)return '0.00';
        return '￥' + val.toFixed(2) + '元';
      }
    },
  mounted () {
    this.getProductsList()
  },
  methods: {
    getProductsList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize:6
        }
      }).then(res => {
        this.phoneList = res.list
        console.log(this.phoneList)
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/reset.scss';
@import '../assets/scss/config.scss';
.nav-topbar {
  height: 39px;
  line-height: 39px;
  width: 100%;
  background-color: #333;
  color: #b0b0b0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-menu {
      margin-left: 100px;
      size: 12px;
      a {
        color: #b0b0b0;
        margin-right: 17px;
      }
    }
    .nav-user {
      margin-right: 100px;
      size: 12px;
      a {
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        display: inline-block;
        width: 110px;
        text-align: center;
        background-color: #ff6600;
        color: #fff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url('../assets/imgs/icon-cart-checked.png') no-repeat 50%;
          margin-right: 4px;
        }
      }
    }
  }
}
.nav-header {
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 112px;
    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: #ff6600;
      a {
        display: inline-block;
        width: 110px; // 这里是实际两个块的宽度：不理解
        height: 55px;
        &:before {
          content: ' '; // 很重要，是占位用的：不理解
          display: inline-block;
          width: 55px;
          height: 55px;
          background:url('../assets/imgs/mi-logo.png') no-repeat center;
          background-size: 55px;
          transition: margin .2s;
        }
        &:after {
          content: ' '; // 很重要，是占位用的，不加的话伪类产生不了：不理解
          display: inline-block;
          width: 55px;
          height: 55px;
          background:url('../assets/imgs/mi-home.png') no-repeat center;
          background-size: 55px;
        }
        &:hover::before {
          margin-left: -55px; // 显示第二张图
          transition: margin .2s; // C3的语法，查一查，切换生硬，要使用过渡
        }
      }
    }
    .header-menu {
      display: inline-block;
      width: 643px;
      padding-left: 209px;
      .item-menu {
        display: inline-block;
        color: #333;
        font-weight: bold;
        font-size: 16px;
        line-height: 112px;
        margin-right: 20px;
        span {
          cursor: pointer;
        }
        &:hover {
          color: $colorA;
          .children {
            display: block;
            opacity: 1;
          }
        }
      }
      .children {
        display: none;
        position: absolute;
        left: 0;
        width: 1226px;
        height: 220px;
        border: 1px solid #e0e0e0;
        opacity: 0;
        // overflow: hidden;
        box-shadow: 0 7px 6px 0 rgba(0,0,0,.11);
        transition: all .5s;
        background-color: #fff;
        z-index: 10;
        .product {
          float: left;
          width: 16.6%;
          height: 220px;
          font-size: 12px;
          left: 0;
          a { // 这里设置a为块级，否则为行内元素不能自动撑满，检查的时候不好看
            display: inline-block;
          }
          img {
            width: auto;
            height: 111px;
            margin-top: 26px;
          }
          .pro-img {
            height: 120px;
            margin-left: 20pxa;
          }
          .pro-name {
            font-weight: bold;
            color: #333;
            line-height: 12px;
            text-align: center;
            margin-top: 45px; // 19+26
            margin-bottom: 8px;
          }
          .pro-price {
            color: $colorA;
            line-height: 12px;
            text-align: center;
          }
        }
      }
    }
    .header-search {
      width: 319px;
      .wrapper {
        display: flex;
        height: 50px;
        border: 1px solid #e0e0e0;
        align-items: center;
        input {
          border: none;
          box-sizing: border-box;
          width: 264px;
          height: 50px;
          padding-left: 14px;
          border-right: 1px solid #e0e0e0;
        }
        a {
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url('../assets/imgs/icon-search.png') no-repeat center;
          background-size: contain;
          margin-left: 17px;

        }
      }
    }
  }
}
</style>
