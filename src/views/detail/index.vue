<template>
    <div class="goods">
        <div class="lunbo">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="lunbo in goodsLunBo" :key="lunbo.id">
                    <img :src="lunbo.url" width="100%" height="200px"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="desc">
            <h4 v-text="goods.title"></h4>
            <p style="margin-top: -20px;">
                <span style="color: red; font-size: 18px; font-weight: bold;">￥{{ goods.price }}</span>
                <span style="color: #999; font-size: 14px; margin-left: 5px; text-decoration: line-through;">{{ goods.originPrice}}</span>
                <span style="color: #999; font-size: 14px; margin-left:65%; ">月销量：{{ goods.saleNum}}</span>
            </p>

        </div>
        <hr/>
                <p style="text-align: center; color: #999; font-size: 14px; font-weight: bold;">图文详情</p>
        <hr/>
        <img :src="detail.url" v-for="detail in goodsLunBo" :key="detail.id" width="100%"/>
        <van-goods-action>
                        <van-goods-action-icon icon="chat-o" text="客服" dot />
                        <van-goods-action-icon icon="cart-o" text="购物车" :badge="cartCount"
                        @click="()=>{this.$router.push('/cart')}"/>
                        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
                        <van-goods-action-button type="warning" text="加入购物车" @click="addCart(goods)"/>
                        <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:0,
            goods:{
				"id": 3199403,
				"title": "短裤夏季防走光假两件大码宽松健身瑜伽裤跑步速干高腰运动短裤女",
				"image": "https://img.alicdn.com/bao/uploaded/i4/2177341422/O1CN01jdSig71MNJsxja7Ut_!!0-item_pic.jpg",
				"price": 9.9,
				"originPrice": 20,
				"saleNum": 41,
				"couponValue": "",
				"isFreePostage": true,
				"tabId": 2
			},
            goodsLunBo:[
                {
                    id:1,
                    url:'https://ossweb-img.qq.com/upload/adw/image/977/20240507/5ea48d02e6e8f9129cf41851339cdd36.jpeg',
                },
                {
                    id:2,
                    url:'https://ossweb-img.qq.com/upload/adw/image/977/20240430/89bd90eeddd9518a9eb71503b9c4f35e.jpeg',
                },
                {
                    id:3,
                    url:'https://ossweb-img.qq.com/upload/adw/image/977/20240510/1db7f5b3411a3e3c0a5874d7bc7c216a.jpeg',
                },
                {
                    id:4,
                    url:'https://ossweb-img.qq.com/upload/adw/image/977/20240507/752e2771f6b6a681013f55a1eeb1f2a0.jpeg',
                },

            ]
        }
    },
    props:['goodsId'],
    created(){
        this.id = this.$route.params.goodsId; //获取当前传递过来的商品ID
        //通过ID发送请求取数据库查找ID对应的商品数据 ，覆盖goods的值
    },
    methods:{
        /**
		 * 添加商品到购物车
		 */
		addCart(goods){
			console.log(goods);
			//开始调用Vuex里面添加商品到购物车的方法
			const currentGoods = {
					id:goods.id,
					image:goods.image,
					title:goods.title,
					price:goods.price,
                    num:1,
                    isChecked:true,
			}
			this.$store.commit('cart/add_cart',currentGoods);
			//提示
			this.$toast({
				type:'success',
				message:'添加到购物车成功！'
			})
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
    .desc{
       margin-left: 10px;
    }
</style>