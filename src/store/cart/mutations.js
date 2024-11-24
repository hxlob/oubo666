import state from './state'
export default {
    /**
     * 操作state数据的所有方法
     */
    /**
     * 添加商品到购物车
     * @param {*} state
     * @param {*} item
     */

    add_cart(state,item){
        const list = state.items ; //获取所有的购物项
        //1.查看添加的商品是否存在购物车中
        if(list == null || list.length <= 0){
            state.items.unshift(item);
        }else{
            for(var i = 0 ; i < list.length ; i++){
               if(item.id ==list[i].id){
                list[i].num  = list[i].num + 1 ;
                return ;
               }
            }
            state.items.unshift(item);
        }
        console.log(state.items);
    },
    //计算总价
    /**
     * 计算总价
     * @param {*} state
     */
    cal_total(state){
        let total = 0 ;
        const list  = state.items ;
        console.log(list);
        const checkedItems =  list.filter((item)=>item.isChecked);
        for(var i = 0 ; i < checkedItems.length ; i++){
            total = total + (checkedItems[i].price * (checkedItems[i].num));
        }
        total = parseFloat(total.toFixed(2));
        state.total = total ;
    },
    /**
     * 修改商品是否选中
     * @param {} state
     * @param {*} index
     */
    checkItem(state,index){
        const list   = state.items ;
        list[index].isChecked = !(list[index].isChecked);
        if(list[index].isChecked == false){
            state.allchecked = false;
        }else{
            for(var i = 0 ; i < list.length ; i++){
                if(list[i].isChecked == false){
                    return ;
                }

            }
            state.allchecked = true ;
        }
    },
    itemAddNumChange(state,index){
        const list   = state.items ;
        if(list != null && list.length > 0){
            list[index].num = list[index].num + 1 ;
        }
    },
    itemJianNumChange(state,index){
        const list   = state.items ;
        if(list != null && list.length > 0){
            list[index].num = list[index].num - 1 ;
        }
    },
    delteItem(state,index){
        const list   = state.items ;
        if(list != null && list.length > 0){
            list.splice(index,1);
        }
    },
    allCheckedState(state,checked){
        const list   = state.items ;
        if(list != null && list.length > 0){
            state.allchecked = checked ;
        }
    },
    set_checked(state,checked){
        const list   = state.items ;
        if(list != null && list.length > 0){
            for(var i = 0 ; i < list.length ; i++){
                list[i].isChecked = checked;
            }

        }
    }
}