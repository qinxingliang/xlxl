const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 取消驼峰校验
  lintOnSave: false,
  // 服务地址
  devServer :{
    port : 8088
  }

})
