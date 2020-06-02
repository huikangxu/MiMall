<!--  -->
<template>
  <div>
    <div class="container">
      <div class="line-origin"></div>
      <div class="block-block">
        <div class="mi-icon">
          <img src="../assets/imgs/logo-footer.png">
        </div>
        <p>小米商城</p>
        <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span class="line-short">|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span class="line-short">|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span class="line-short">|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序+Node+Mongo)</a>
        <div class="last-text">Copyright ©2019 <span class="last-text-origin">mi.futurefe.com</span> All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/reset.scss';
@import '../assets/scss/config.scss';
.container {
  // position: absolute;
  // bottom: 0;
  height: 238px;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #999;
  font-size: 16px;
  .line-origin {
    height: 4px;
    width: 100%;
    background-color: $colorA;
  }
  .mi-icon {
    margin-top: 42px;
    margin-bottom: 13px;
    img {
      height: 36px;
      width: 53px;
    }
  }
  p {
    margin-bottom: 30px;
  }
  a {
    color: #999;
    font-size: 16px;
  }
  .line-short {
    margin: 0 10px;
  }
  .last-text {
    margin-top: 14px;
    .last-text-origin {
      color: $colorA;
    }
  }
}
</style>
