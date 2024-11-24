<template>
    <div class="sub-goods">
        <van-grid :gutter="10" column-num="3">
                <van-grid-item @click="goGoodsDetail(goods.id)" v-for="goods in goodsList" :key="goods.id" :icon="goods.image"  />

        </van-grid>
    </div>
</template>
<script>
export default {
    data(){
        return{
            goodsList:[
            {
				"id": 20723859,
				"title": "加绒牛仔裤女2022春季新款春秋高腰修身显瘦紧身小脚铅笔chic裤子",
				"image": "https://img.alicdn.com/bao/uploaded/i4/3039690011/O1CN01VNV7mD1Bx4uOObJoJ_!!0-item_pic.jpg",
				"price": 79,
				"originPrice": 99,
				"saleNum": 7000,
				"couponValue": "",
				"isFreePostage": false,
				"tabId": 2
			},
			{
				"id": 86621610,
				"title": "棉袄2021年新款女ins棉衣韩版宽松冬季加厚学生短款羽绒棉服外套",
				"image": "https://img.alicdn.com/bao/uploaded/i3/3605290545/O1CN01N0Sw4s1FteU73Ozb4_!!0-item_pic.jpg",
				"price": 79.9,
				"originPrice": 89.9,
				"saleNum": 800,
				"couponValue": "10元券,50元卷",
				"isFreePostage": true,
				"tabId": 2
			},
			{
				"id": 3687693,
				"title": "网纱半身裙女中长款2021秋冬黑色高腰百褶垂感网纱裙蕾丝显瘦裙子",
				"image": "https://img.alicdn.com/bao/uploaded/i1/2166475645/O1CN01rakKqG1rZSS2fuwri_!!0-item_pic.jpg",
				"price": 59,
				"originPrice": 169,
				"saleNum": 600,
				"couponValue": "",
				"isFreePostage": true,
				"tabId": 2
			}
            ],
        }
    },
    methods:{
        goGoodsDetail(id){
            this.$router.push({name:'Detail',params:{goodsId:id}});
        }
    }
}
</script>
<style scoped>

</style>