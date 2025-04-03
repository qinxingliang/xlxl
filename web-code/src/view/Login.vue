<template>
    <div style="background-image: url('/static/img/background.jpg');background-size: cover;">
        <div class="center" v-loading="loading" element-loading-text="登录中" element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)">
            <el-form ref="form" :model="form" :rules="rules" class="login-container" label-position="top" label-width="80px"
                @submit.native.prevent>
                <h3 class="login">系统登录</h3>
                <el-form-item label="用户" prop="userName">
                    <el-input v-model="form.userName" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passWord">
                    <el-input v-model="form.passWord" placeholder="请输入密码" show-password clearable></el-input>
                </el-form-item>
                <el-form-item class="center-btn">
                    <el-button type="primary" @click="login" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style>
.center {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
}

.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
}

.login {
    text-align: center;
    color: #505460;
}

.center-btn .el-form-item__content {
    text-align: center;
    display: block;
}
</style>
<script scoped>
// import http from '../utils/request'

export default {
    data() {
        return {
            // 表单数据
            form: {
                userName: '',
                passWord: ''
            },
            // 加载动画
            loading: false,
            // 校验规则
            rules: {
                userName: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }
                ],
                passWord: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        login() {
            var that = this;
            this.$refs.form.validate(valid => {
                // 校验表单
                if (valid) {
                    // 通过后调取接口
                    that.loading = true;
                    // 构建提交参数
                    that.$axios.post('/api/v1/login', that.form)
                        .then(res => {
                            if (res.data.code == 200) {
                                window.localStorage.setItem("token", res.headers.token);
                                this.$message({
                                    message: '登录成功',
                                    type: 'success'
                                });
                                // 登录成功跳转页面
                                that.$router.push('/');
                            }
                            else {
                                this.$message({
                                    message: res.data.message,
                                    type: 'error'
                                });
                            }

                        })
                        .catch(err => {
                            console.error(err);
                            this.$message({
                                message: '登录异常',
                                type: 'error'
                            });
                        })
                        .finally(fal => {
                            that.loading = false;
                        })
                } else {
                    this.$message({
                        message: "请检查必填项",
                        type: "error"
                    });
                }
            })
        }
    }
}
</script>