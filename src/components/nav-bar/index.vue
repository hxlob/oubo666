<template>
    <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home" to='/home'>首页</van-tabbar-item>
            <van-tabbar-item icon="wap-nav" to="/category">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart" to="/cart" :badge="cartCount">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager" badge="20" to="/login">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
    data(){
        return{
            active:0,
        }
    },
    computed:{
        cartCount(){
            return this.$store.state.cart.items.length;
        }
    }
}
</script>
<style scoped>

</style>