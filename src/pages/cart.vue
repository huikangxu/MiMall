<!-- cart 应该是共用order页面的，但是路由会变为order/cart，比较奇怪，所以单独写一个页面，重新引入header，footer -->
<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader'
import NavFooter from '@/components/NavFooter'
export default {
  name: 'cart',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style scoped>

</style>
