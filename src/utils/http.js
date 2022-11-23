import axios  from "axios";
import ElementUI from "element-ui";


const http = axios.create({
    baseURL: 'http://101.43.125.220:3000/',
    timeout: 1000,
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
// 在发送请求之前做些什么
return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
// 2xx 范围内的状态码都会触发该函数。
// 对响应数据做点什么
if(response.data.code!==200){
    ElementUI.Notification({
        title: '警告',
        message: response.data.msg,
        type:"error"
    })
}
return response;
}, function (error) {
// 超出 2xx 范围的状态码都会触发该函数。
// 对响应错误做点什么
return Promise.reject(error);
});

export default http