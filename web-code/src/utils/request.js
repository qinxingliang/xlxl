import axios from 'axios'
import router from '@/router';
import { ElMessage } from 'element-plus';
import globalConfig from '../config'
// axios 请求配置
const request = axios.create({
  // 请求地址
  baseURL: globalConfig.url,
  // 超时时间
  timeout: 80000,
  // 每次请求带cookie
  withCredentials: true,
  // 请求方式
  method: 'POST'

})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  var token = window.localStorage.getItem("token");
  if (token) {
    // 如果本地有token将请求token添加到header中
    config.headers.set("token", token);
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器(如果结果code有402 登录信息失效跳转登录页等)
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status == 800) {
    window.localStorage.removeItem("token");
    ElMessage({
      message: "登录信息失效",
      type: "error"
    })
    // 当无权限时切换登录页
    router.push('/login');

  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response.status == 800) {
    // 当无权限时切换登录页
    window.localStorage.removeItem("token");
    ElMessage({
      message: "登录信息失效",
      type: "error"
    })
    router.push('/login');
  }
  return Promise.reject(error);
});


export default request