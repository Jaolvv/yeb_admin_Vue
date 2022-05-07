import axios from "axios";
import { Message } from "element-ui";
import router from '../router';

axios.interceptors.response.use(success=>{
    // 业务逻辑错误1
    if(success.status && success.status == 200){
        // 500：业务逻辑错误；  401：未登录； 403：权限禁止
        if(success.data.code == 500 || success.data.code == 401 || success.data.code == 403){
            Message.error({message:success.data.message});
            return;
        }
        if(success.data.message){
            Message.success({message:success.data.message});
        }
    }
    // 返回成功
    return success.data;

//
},error=>{
    if(error.response.code == 504 || error.response.code == 404){
        Message.error({message:'服务器出问题咯！'});
    } else if (error.respone.code == 403) {
        Message.error({message:'权限不足，请练习管理员！'});
    } else if (error.respone.code == 401) {
        Message.error({message:'尚未登录，请登录重试！'});
        router.replace('/');
    } else {
        if(error.respone.data.message){
            Message.error({message:error.respone.data.message});
        } else {
            Message.error({message:'位置错误了！'});
        }
    }
    return;
});