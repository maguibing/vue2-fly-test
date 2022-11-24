import axios  from "axios";
import ElementUI from "element-ui";


const http = axios.create({
    baseURL: 'http://101.43.125.220:3000/',
    timeout: 1000,
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    return new Promise((resolve, reject)=>{
        if(response.data.code!==200){
            ElementUI.Notification({ title: '警告', message: response.data.msg, type:"error"})
        }else{
            resolve(response)
        }
    })
}, function (error) {
    return Promise.reject(error);
});

export default http