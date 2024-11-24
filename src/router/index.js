import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Category from '../views/category/index.vue'
import Cart from '../views/cart/index.vue'
import Min from '../views/min/index.vue'
import NavBar from '../components/nav-bar/index.vue'
import Detail from '../views/detail/index.vue'
import Back from '../components/nav-back/index.vue'
import Login from '../views/min/login.vue'
import Register from '../views/min/register.vue'
import SubCategory from '../views/category/subcategory.vue'
import SubGoods from '../views/category/subgoods.vue'
import Oders from '../views/oders/changeaddress.vue'

Vue.use(VueRouter)

const routes = [
    {path:'/',redirect:'/home'},//redirect:转发
    {path:'/category',redirect:'/category/subcategory/1'},//redirect:转发
    {
        path:'/home',
        name:'Home',
        components:{
            //告知跳转结束后首页组件在头部展示
            //header:Home,
              default:Home,
              footer:NavBar,
         },
         meta:{ //路由携带的参数信息
            icon:"wap-home", //图标
            title:'首页', //首页的名称
            inTabbar:true, // 是否展示底部菜单
         }
    },
    {
      path:'/category',
      name:'Category',
      components:{
          //告知跳转结束后首页组件在头部展示
           header:Back,
            default:Category,
          footer:NavBar,
       },
       meta:{ //路由携带的参数信息
          icon:"wap-nav", //图标
          title:'分类', //首页的名称
          inTabbar:true, // 是否展示底部菜单
       },
       children:[
         {
            path:'subcategory/:id',name:'Category.SubCategory',component:SubCategory,props:true,
            meta:{
              title:'商品类型'
            }
        },
        {
          path:'subgoods/:id',name:'Category.SubGoods',component:SubGoods,props:true,
          meta:{
            title:'商品'
          }
      }
       ]
  },
      {
        path:'/cart',
        name:'Cart',
        components:{
            //告知跳转结束后首页组件在头部展示
            header:Back,
              default:Cart,
            footer:NavBar,
        },
        meta:{ //路由携带的参数信息
            icon:"shopping-cart", //图标
            title:'购物车', //首页的名称
            inTabbar:true, // 是否展示底部菜单
        }
    },
    {
      path:'/min',
      name:'Min',
      components:{
          //告知跳转结束后首页组件在头部展示
          header:Back,
            default:Min,
          footer:NavBar,
      },
      meta:{ //路由携带的参数信息
          icon:"manager", //图标
          title:'我的', //首页的名称
          inTabbar:true, // 是否展示底部菜单
      }
    },
    {
      path:'/oders/changeaddress',
      name:'Oders',
      components:{
          //告知跳转结束后首页组件在头部展示
          header:Back,
            default:Oders,
          footer:NavBar,
      },
      meta:{ //路由携带的参数信息
          //icon:"manager", //图标
          title:'修改地址', //首页的名称
          inTabbar:true, // 是否展示底部菜单
      }
    },
    {
      path:'/detail/:goodsId',
      props:true,
      name:'Detail',
      components:{
          //告知跳转结束后首页组件在头部展示
            header:Back,
            default:Detail,
          //footer:NavBar,
      },
      meta:{ //路由携带的参数信息
          icon:"manager", //图标
          title:'商品详情', //首页的名称
          inTabbar:false, // 是否展示底部菜单
      }
    },
    {
      path:'/login',
      name:'Login',
      components:{
          //告知跳转结束后首页组件在头部展示
          header:Back,
          default:Login,
          //footer:NavBar,
      },
      meta:{ //路由携带的参数信息
          icon:"manager", //图标
          title:'登录', //首页的名称
          inTabbar:false, // 是否展示底部菜单
      }
    },
    {
      path:'/register',
      name:'Register',
      components:{
          //告知跳转结束后首页组件在头部展示
          header:Back,
            default:Register,
          //footer:NavBar,
      },
      meta:{ //路由携带的参数信息
          icon:"manager", //图标
          title:'注册', //首页的名称
          inTabbar:false, // 是否展示底部菜单
      }
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router //导出默认文件名称router
