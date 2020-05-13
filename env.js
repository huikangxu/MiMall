let baseURL
switch(process.env.NODE_ENV){
    case 'dev':
      baseURL = 'htttp://dev-mall-pre.springboot.cn/api' // 这里把api提出来，否则每个接口都需要写api
      break
    case 'test':
      baseURL = 'htttp://test-mall-pre.springboot.cn/api'
      break
    case 'prev': // 自定义的环境，需要新增文件.env.prev，设置NODE_ENV='prev'
      baseURL = 'htttp://prev-mall-pre.springboot.cn/api'
      break
    case 'prod':
      baseURL = 'htttp://mall-pre.springboot.cn/api'
      break
    default:
      baseURL = 'htttp://mall-pre.springboot.cn/api'
      break
}
export default baseURL