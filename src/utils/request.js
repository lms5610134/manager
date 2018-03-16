import axios from 'axios';

const server = axios.create({
  baseURL: 'http://tom.tunnel.echomod.cn',
  timeout: 10000
});

// 添加一个响应拦截器
server.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处理
  if (res.status === 200) {
    return res.data;
  }
}, function (err) {
  // Do something with response error
  return Promise.reject(err);
})

export default server
