import axios from 'axios'
import { vm } from '@/main.js';

// axios配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://10.10.4.71:8007',
axios.defaults.baseURL = 'http://125.35.5.150:8008'

// request 拦截器
axios.interceptors.request.use(
    req=>{
        req.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return req;
    },
    err => {
        vm.$vux.toast.show({
            text:'请求错误',
            type: 'error'
        })
        return Promise.reject(err)
    }
)

// Response 拦截器
axios.interceptors.response.use(
    res => {
        vm.$vux.loading.hide()
        return res
    },
    err => {
        vm.$vux.loading.hide();
        if(err.response){
            switch (err.response.status){
                case 401:
                    vm.$vux.toast.show({
                        text:'401,未授权',
                        type: 'warn'
                    })
                    break;
                case 404:
                    vm.$vux.toast.show({
                        text:'404,接口未找到',
                        type: 'warn'
                    })
                    break;
                case 405:
                    vm.$vux.toast.show({
                        text:'405,不支持请求方式',
                        type: 'warn'
                    })
                    break;
                case 500:
                    vm.$vux.toast.show({
                        text:'服务器错误',
                        type: 'warn'
                    })
                    break;
                case 502:
                    vm.$vux.toast.show({
                        text:'502,网关错误',
                        type: 'warn'
                    })
                    break;    
            }
        }
        return Promise.reject(err.response.data)
    }
)

export default axios