<template>
    <div class="cart">

        <van-swipe-cell v-for="(item,index) in items" :key="index">
            <van-checkbox class="check" v-model="item.isChecked" checked-color="#ee0a24" @click="singleCheck(index)"/>
                <van-card
                    :price="item.price"
                    :title="item.title"
                    class="goods-card"
                    :thumb="item.image"
                />
                <div class="step">
                    <van-stepper v-model="item.num" theme="round" button-size="22"
                    disable-input
                    @plus="itemAddNumChange(index)"  @minus="itemJianNumChange(index)"/>
                </div>
                <template #right>
                    <van-button square text="删除" @click="deletItem(index)" type="danger" class="delete-button" />
                </template>
        </van-swipe-cell>

        <van-submit-bar :price="total*100" button-text="提交订单" @submit="onSubmit">
                    <van-checkbox v-model="allChecked" @click="allCheckedChange">全选</van-checkbox>
                    <template #tip>
                        你的收货地址不支持同城送, 
                        <div class="s1">
                            <van-button square text="修改地址" @click="onClickEditAddress" to="/oders/changeaddress"/> 
                        </div>
                    </template>
        </van-submit-bar>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    computed:{
        ...mapState({
            items:(state)=>JSON.parse(JSON.stringify(state.cart.items)),
            total:(state)=>state.cart.total
        }),
        allChecked:{
            get(){
                return this.$store.state.cart.allchecked ;
            },
            set(){

            }
        },
    },
    data(){
        return{

        }
    },
    methods:{
        //引入所有vuex中的指定方法
        ...mapMutations("cart",[
           "cal_total",
           "set_checked",
           "checkItem",
           "itemAddNumChange",
           "itemJianNumChange",
           "allCheckedState",
        ]),
        onSubmit(){

        },
        onClickEditAddress(){

        },
        /**
         * 修改购物车项的是否选中
         */
        singleCheck(index){
            this.checkItem(index);
            this.cal_total();
        },
        itemAddNumChange(index){
           this.$store.commit("cart/itemAddNumChange",index)
           this.cal_total();
        },
        itemJianNumChange(index){
            this.$store.commit("cart/itemJianNumChange",index)
           this.cal_total();
        },
        deletItem(index){
            console.log(123);
            this.$store.commit("cart/delteItem",index)
            this.cal_total();
        },
        allCheckedChange(){
            this.allCheckedState(!this.allChecked);
            this.set_checked(this.allChecked);
            this.cal_total();
        }


    },
    created(){
        console.log(this.items);
        this.cal_total();
    }
}
</script>
<style lang="less" scoped>
.cart{
    margin-left: 10px;
}
     .goods-card {
        margin: 0;
        background-color: white;
    }

  .delete-button {
    margin-top: 30%;
    height: 100%;
  }
  .van-card{
    flex: 1;
    margin: 20px;
  }
  .check{
    position: relative;
    top: 70px;
    left: 0px;
  }
  .delete-button{
    height: 100%;
  }
  .step{
    position: relative;
    top:-50px;
    left: 70%;
  }
  .s1{
    width: 90px;

    float: right;
    margin-top: -12px;
    font-size: 20px;
  }

</style>