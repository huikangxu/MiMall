<!--  -->
<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/base.scss'; // 引入container的样式
.service {
  // position: absolute;
  bottom: 238px;
  margin-left: 50px; // 没在1226px中居中，是上面position:absolute导致的；但是去掉绝对定位，没办法设置固定在下方
  padding: 33px 0;
  color: #666;
  font-size: 16px;
  li {
    display: inline-block; // 变为行内块级元素，即可横一排
    width: 24.8%; // 四块应该是25%，但一般浏览器会大一些或小一些，所以一般24.8% 或 24.9% 即可
    text-align: center;
    border-right: 1px solid #e5e5e5; // 这里使用border是因为和字高同，在header用伪类的方式是因为和图片高度不同
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle; // icon居中
      margin-right: 8px;
    }
    .icon-setting {
      @include bgImg(20px, 20px, '../assets/imgs/icon-setting.png')
    }
    .icon-7day {
      @include bgImg(20px, 20px, '../assets/imgs/icon-7day.png')
    }
    .icon-15day {
      @include bgImg(20px, 20px, '../assets/imgs/icon-15day.png')
    }
    .icon-post {
      @include bgImg(20px, 20px, '../assets/imgs/icon-post.png')
    }
  }

}
</style>
