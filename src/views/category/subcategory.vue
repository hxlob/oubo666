<template>
    <div class="sub-category">
        <van-grid :gutter="10" column-num="3">
                <van-grid-item @click="goGoodsList(type.id)"   v-for="type in typeslist" :key="type.id"
                    :icon="type.icon" :text="type.name" />
        </van-grid>
    </div>
</template>
<script>
export default {
    data(){
        return{
            typeslist:[
                {id:1,name:'衬衫',icon:'https://img1.lukou.com/static/coupon/p/image_link/EKIjL1DF77CGaU6X4HvencSbDMHAWBkC.png'},
                {id:2,name:'裤装',icon:'https://img1.lukou.com/static/coupon/p/image_link/EKIjL1DF77CGaU6X4HvencSbDMHAWBkC.png'},
                {id:3,name:'衬衫',icon:'https://img1.lukou.com/static/coupon/p/image_link/EKIjL1DF77CGaU6X4HvencSbDMHAWBkC.png'},
                {id:4,name:'衬衫',icon:'https://img1.lukou.com/static/coupon/p/image_link/EKIjL1DF77CGaU6X4HvencSbDMHAWBkC.png'}
            ],

        }
    },
    props:['id'],
    beforeMount() {
        //通过菜单ID查询商品分类，最终覆盖types的值
        if(this.id==0 || this.id == ""){
            this.id = 1 ;
        }
    },
    methods:{
        goGoodsList(id){
        //通过类型ID查询所有的商品数据
            console.log(id);
            this.$router.push({name:'Category.SubGoods',params:{id:id}});
        }
    }
}
</script>
<style scoped>

</style>