<template>
    <div class="content">
        <div class="title">
            <van-image
                        round
                        width="7rem"
                        height="7rem"
                        src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <hr style="margin-top: 10px;"/>
            <div class="from">
                <van-form @submit="onSubmit">
                        <van-field
                            v-model="phone"
                            left-icon="manager"
                            placeholder="请输入手机号码"
                            :clearable="true"
                        />
                        <van-field
                            v-model="code"
                            left-icon="comment-circle"
                            placeholder="请输入验证码 "
                            :clearable="true"
                        >
                            <template #button>
                                <div id="codeText">
                                    <van-button :disabled="false"   size="small" type="default" :round="true" color="#999" @click="sendCode" >获取验证码</van-button>
                                </div>
                            </template>
                        </van-field>
                        <van-field
                            v-model="password"
                            left-icon="lock"
                            placeholder="请输入密码"
                            type="password"
                            :clearable="true"
                        />
                        <div style="margin: 16px;">
                                <van-button round block type="info" native-type="submit">注册</van-button>
                                <van-row style=" font-size: 12px; margin-top: 5px;">
                                    <van-col span="4">
                                        <router-link style="color: #999;" to="/register">去登陆</router-link>
                                    </van-col>
                                    <van-col span="6" offset="12">
                                        <router-link  style="color: #999;" to="/register">忘记密码</router-link>
                                    </van-col>
                                </van-row>
                                <div class="wx">
                                    <van-divider>第三方登录</van-divider>
                                    <p style="text-align: center;">
                                       <van-icon name="qq" /> &nbsp;&nbsp;
                                       <van-icon name="wechat" />&nbsp;&nbsp;
                                       <van-icon name="weibo" />&nbsp;&nbsp;
                                    </p>
                                </div>
                        </div>
                </van-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone:'',
            password:'',
            code:'',
        }
    },
    methods:{
        onSubmit(){
            //发送账户密码到服务器取请求注册
            //1.验证手机号码否存在
        },
        sendCode(){
            //1.向服务器发送一个请求，请求你给他输入的手机号码取发送验证码
            var codeText = document.getElementById("codeText");
            var num = 10 ;
            //setTimeout:延时
           var time =  setInterval(function(){
                console.log(num);
                codeText.innerHTML = `<span>`+num+`</span>`;
                if(num == 0){
                    clearInterval(time);
                    codeText.innerHTML=`<van-button :disabled="false"   size="small" type="default" :round="true" color="#999" @click="sendCode" >重新发送</van-button>`;
                }
                num--;

            },1000);
        }
    }
}
</script>
<style scoped>

    .content{
        /* background-color: skyblue; */
    }
    .title{
        text-align: center;
        margin-top: 10px;
    }
    /deep/ .van-field__left-icon{

        width: 50px;
        border-right: 1px solid #999;
    }
    /deep/.van-field{
        width: 90%;
        border: 1px solid #999;
        margin-top: 10px;
        border-radius: 200px;
        margin-left: 16px;
    }
    .from{
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 20px;
    }
    .wx{
        margin-top: 100px;
    }
</style>