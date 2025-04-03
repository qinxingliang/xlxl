<template>
    <div style="height: 100%;">
        <div class="header">
            <div class="user">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link" style="display: flex;">
                        <div class="username">{{ user.nickName }}</div>
                        <img :src=user.icon alt="用户">
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="user">修改密码</el-dropdown-item>
                            <el-dropdown-item command="icon">修改头像</el-dropdown-item>
                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <!-- 弹出层 密码修改-->
        <el-dialog title="修改密码" v-model="changePassModel" class="dialog-pass" open="clearFields"
            :close-on-click-modal="false">
            <el-form :model="form" :rules="rules" ref="form" label-position="top">
                <el-form-item label="旧密码" prop="oldPass">
                    <el-input v-model="form.oldPass" placeholder="请输入旧密码" show-password clearable></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPass">
                    <el-input v-model="form.newPass" placeholder="请输入新密码" show-password clearable></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="confirmPass">
                    <el-input v-model="form.confirmPass" placeholder="请输入新密码" show-password clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeChangePasswordModel">取 消</el-button>
                <el-button type="primary" @click="submitPassWord">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 弹出层修改头像 -->

        <el-dialog title="修改头像" v-model="changeIconModel" class="dialog-pass" open="clearFields"
            :close-on-click-modal="false">
            <el-form :model="iconForm"  ref="iconForm" label-position="top">
                <el-form-item label="轮播图图片" prop="cImgUrl">
                    <el-upload class="avatar-uploader" action="" :show-file-list="false" :http-request="uploadImg"
                        accept="image/*">
                        <img v-if="iconForm.cImgUrl" :src="iconForm.cImgUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="this.changeIconModel = false">取 消</el-button>
                <el-button type="primary" @click="submitIcon">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.header {
    height: 100%;
    background-color: #333
}

.user {
    position: absolute;
    right: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 60px;
}

.user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.user .el-dropdown {
    height: 40px;
}

.username {
    color: #fff;
    height: 40px;
    align-items: center;
    display: flex;
    margin-right: 10px;
}

.dialog-pass {
    width: 460px;
    height: 400px;
}

.dialog-footer {
    float: right;
}
</style>

<style>
.el-dropdown .el-dropdown-link:focus-visible {
    outline-width: 0px;
}
</style>
<script scoped>
import { Plus } from '@element-plus/icons-vue'
import { loadingInstance } from '../utils/util';
import globalConfig from '../config'
export default {
    components: {
        Plus
    },
    data() {
        // 密码一致校验
        var checkConfirmPass = (rule, value, callback) => {
            if (this.form.newPass != value) {
                return callback(new Error('两次密码输入的不一致'));
            } else {
                return callback();
            }
        }
        return {
            // 修改密码弹出层
            changePassModel: false,
            // 修改头像弹出层
            changeIconModel: false,
            // password相关
            form: {
                oldPass: '',
                newPass: '',
                confirmPass: ''
            },
            user: {
                icon: '',
                id: '',
                nickName: '',
                role: '',
                userName: '',
            },
            // 修改头像表单
            iconForm:{
                
            },
            // 表单校验规则
            ruleForm: {
                oldPass: '',
                newPass: '',
                confirmPass: ''
            },
            rules: {
                oldPass: [
                    {
                        required: true,
                        message: '请输旧密码',
                        trigger: 'blur'
                    }

                ],
                newPass: [
                    {
                        required: true,
                        message: '请输入新密码',
                        trigger: 'blur'
                    }
                ],
                confirmPass: [
                    {
                        required: true,
                        message: '请输入确认密码',
                        trigger: 'blur'
                    },
                    {
                        validator: checkConfirmPass,
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    // 渲染之前获取用户信息
    beforeMount() {
        this.getUserInfo();
    },
    methods: {
        // 获取用户信息
        getUserInfo() {
            this.$axios.post('/api/user/v1/getUserMessage', null)
                .then(res => {
                    this.user = res.data.data
                })
                .catch(err => {
                    debugger
                })

        },
        // 下拉框事件
        handleCommand(command) {
            if (command == 'logout') {
                window.localStorage.removeItem("token");
                this.$router.push('/login')
                this.$message({
                    message: "退出登录成功",
                    type: 'success'
                })
            }
            else if (command == 'icon') {
                // 修改头像
                this.iconForm.cImgUrl = this.user.icon
                this.changeIconModel = true;
            }
            else {
                // 修改密码
                this.copenChangePasswordModel();
            }

        },

        // 关闭修改密码弹出
        closeChangePasswordModel() {
            this.changePassModel = false;
        },
        // 打开密码弹出层
        copenChangePasswordModel() {
            this.changePassModel = true;
        },
        // 打开弹出层前置操作
        clearFields() {
            // 清空已填写数据
            this.form = {
                oldPass: '',
                newPass: '',
                confirmPass: ''
            };
            // 清空表单校验
            this.$refs.form.resetFields();
        },
        submitPassWord() {
            // 校验规则
            this.$refs.form.validate(valid => {
                if (valid) {
                    var param = {
                        oldPass: this.form.oldPass,
                        newPass: this.form.newPass
                    }
                    this.$axios.post('/api/user/v1/updateUserPass', param)
                        .then(res => {
                            if (res.data.code != 200) {
                                this.$message({
                                    type: 'error',
                                    message: res.data.message
                                })
                            }
                            else {
                                this.$message({
                                    type: 'success',
                                    message: '编辑成功,请重新登录'
                                })
                                window.localStorage.removeItem("token");
                                this.$router.push('/login')
                            }
                        })
                        .catch(err => {
                            debugger
                        })
                } else {
                    this.$message({
                        message: "请检查必填项",
                        type: "error"
                    });
                }
            })
        },
        // 修改头像提交
        submitIcon() {
            var loding = loadingInstance('this', '提交中');
            this.$axios({
                url: 'api/user/v1/update',
                data: {
                    cIcon: this.iconForm.cImgUrl
                }
            }).then(res=>{
                if(res.data){
                    this.$message({
                        type: 'success',
                        message: '更新成功'
                    })
                    this.getUserInfo();
                    this.changeIconModel = false;
                }else{
                    this.$message({
                        type: 'error',
                        message: '更新头像异常'
                    })
                }
            }).finally(res=>{
                loding.close();
            })
        },
        // 上传图片
        uploadImg(param) {
            let formData = new FormData();
            formData.append('file', param.file)
            // 开启遮罩
            var loding = loadingInstance('this', '图片上传中');
            this.$axios({
                url: globalConfig.url + '/api/file/imgUpload',
                method: 'POST',
                header: { "Content-Type": "multipart/form-data" },
                data: formData
            })
                .then(res => {
                    this.iconForm.cImgUrl = res.data.data.url
                })
                .catch(err => {
                    debugger
                    this.$message({
                        type: 'error',
                        message: '上传文件异常'
                    })
                })
                .finally(fil => {
                    loding.close();
                })
        },
    }
}
</script>