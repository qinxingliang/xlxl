package project.config;

import project.handler.LoginHandlerInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;


@Configuration
public class MyConfig implements WebMvcConfigurer {

    @Resource
    private LoginHandlerInterceptor loginHandlerInterceptor;
    /**
     * 配置拦截器
     *
     * @param registry 相当于拦截器的注册中心
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
//       下面这句代码相当于添加一个拦截器
//       addPathPatterns()配置我们要拦截哪些路径 addPathPatterns("/**")表示拦截所有请求，包括我们的静态资源
//       excludePathPatterns 如果有静态资源的时候可以在这个地方放行
        registry.addInterceptor(loginHandlerInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns(
                          "/api/v1/login"
                        , "/static/**"
                        , "/api/file/imgUpload"
                        , "/api/lbt/v1/getAll"
                        , "/**/wx/**");
    }

    /**
     * 全局跨域配置
     * @param registry
     */
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")//项目中所有接口都支持跨域
                //.allowedOrigins("*")//前端哪些域名可以跨域（这里是全部都可以）
                .allowedOriginPatterns("*")
                .allowedMethods("GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS")//允许所有请求方式
                .allowCredentials(true)//自己的的项目需要带cookie凭证
                .maxAge(3600)//跨域允许时间
                .allowedHeaders("*");//请求信息所有
    }
}
