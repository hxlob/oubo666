<template>
    <van-nav-bar
            :title="$route.meta.title"
            left-arrow
            @click-left="onClickLeft"
    />
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        onClickLeft(){
            this.$router.back();
        }
    }
}
</script>
<style scoped lang="less">
    /* deep:样式穿透 */
    /deep/.van-nav-bar__title{
        font-weight:bold;
        font-size: 20px;
    }
    /deep/.van-nav-bar__text{
        color: red;
    }
    /deep/van-nav-bar{
        background-color: red;
    }

</style>