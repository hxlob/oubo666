<template>
    <div class="category">
        <van-sidebar v-model="activeKey">
            <van-sidebar-item   v-for="meau in meaus" :key="meau.id"
                :title="meau.name"
                :to="{name:'Category.SubCategory',params:{id:meau.id}}"
            />
        </van-sidebar>
        <div class="sub-category">
            <router-view/>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            activeKey:0,
            meaus:[
                {id:2, name: '男装',},
                {id:3, name: '女装',},
                {id:4, name: '童装',},
                {id:5, name: '秋装',},
            ],
        }
    },
    methods:{

    },
    created(){
    },
}
</script>
<style scoped>
        .category{
            display: flex;
            .sub-category{
                flex:1;
            }
        }
</style>